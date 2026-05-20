import {
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import {
  CreateSalesDto,
  UpdateSalesDto,
} from '../dto/sales.dto';

import { Sale } from '../entities/sales.entity';

import { Repository } from 'typeorm';

@Injectable()
export class SalesService {

  constructor(
    @InjectRepository(Sale)
    private readonly salesRepository: Repository<Sale>,
  ) {}

  async create(createSalesDto: CreateSalesDto) {

    try {

      const newSale =
        this.salesRepository.create(
          createSalesDto,
        );

      await this.salesRepository.save(
        newSale,
      );

      return newSale;

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al crear venta',
      );
    }
  }

  async findAll() {

    try {

      return await this.salesRepository.find();

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al encontrar ventas',
      );
    }
  }

  async findOne(id: number) {

    try {

      return await this.salesRepository.findOneBy({
        id,
      });

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al encontrar venta',
      );
    }
  }

  async update(
    id: number,
    updateSalesDto: UpdateSalesDto,
  ) {

    try {

      await this.salesRepository.update(
        id,
        updateSalesDto,
      );

      return this.findOne(id);

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al actualizar venta',
      );
    }
  }

  async remove(id: number) {

    try {

      const sale = await this.findOne(id);

      if (sale) {
        return await this.salesRepository.remove(
          sale,
        );
      }

      return null;

    } catch (error) {

      console.log(error);

      throw new InternalServerErrorException(
        'Error al eliminar venta',
      );
    }
  }
}