import {
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import {
  CreateVehicleDto,
  UpdateVehicleDto,
} from '../dto/vehicles.dto';

import { Vehicle } from '../entities/vehicle.entity';

import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {

  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {

    try {

      console.log(
        'Datos listos para guardar:',
        createVehicleDto,
      );

      const newVehicle =
        this.vehicleRepository.create(
          createVehicleDto,
        );

      await this.vehicleRepository.save(
        newVehicle,
      );

      return newVehicle;

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al crear vehiculo',
      );
    }
  }

  async findAll() {

    try {

      return await this.vehicleRepository.find();

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al encontrar los vehiculos',
      );
    }
  }

  async findOne(id: number) {

    try {

      return await this.vehicleRepository.findOneBy({
        id,
      });

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al encontrar el vehiculo',
      );
    }
  }

  async update(
    id: number,
    updateVehicleDto: UpdateVehicleDto,
  ) {

    try {

      await this.vehicleRepository.update(
        id,
        updateVehicleDto,
      );

      return this.findOne(id);

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al actualizar vehiculo',
      );
    }
  }

  async remove(id: number) {

    try {

      const vehicle = await this.findOne(id);

      if (vehicle) {
        return await this.vehicleRepository.remove(
          vehicle,
        );
      }

      return null;

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al eliminar vehiculo',
      );
    }
  }
}