import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from '../entities/customer.entity';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from '../dto/customer.dto';

@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {

    const customer = this.customersRepository.create(createCustomerDto);

    return this.customersRepository.save(customer);
  }

  findAll() {
    return this.customersRepository.find();
  }

  findOne(id: number) {
    return this.customersRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ) {

    await this.customersRepository.update(id, updateCustomerDto);

    return this.findOne(id);
  }

  async remove(id: number) {

    const customer = await this.findOne(id);

    if (customer) {
      return this.customersRepository.remove(customer);
    }

    return null;
  }
}