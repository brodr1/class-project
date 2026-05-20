import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { CustomersController } from './controllers/customer.controller';
import { CustomersService } from './services/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],

  controllers: [CustomersController],

  providers: [CustomersService],

  exports: [TypeOrmModule, ],
})
export class CustomersModule {}