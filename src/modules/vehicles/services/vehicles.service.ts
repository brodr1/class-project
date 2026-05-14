import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/vehicles.dto';
import { InjectRepository } from '@nestjs/typeorm';
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
      console.log('Datos listos para guardar:', createVehicleDto);

      const newVehicle = this.vehicleRepository.create(createVehicleDto);

      await this.vehicleRepository.save(newVehicle);

      return newVehicle;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al crear vehiculo');
    }
  }
  async findAll() {
    try {
      return await this.vehicleRepository.find();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('error al encontrar los vehicles');
    }
  }
}
