import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SalesController } from './controllers/sales.controllers';
import { SalesService } from './services/sales.service';

import { Sale } from './entities/sales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],

  controllers: [SalesController],

  providers: [SalesService],

  exports: [TypeOrmModule, SalesService],
})
export class SalesModule {}