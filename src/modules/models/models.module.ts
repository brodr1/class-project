import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModelsService } from './services/models.service';
import { VehicleModel } from './entities/vehicle-model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleModel])],
  providers: [ModelsService],
  exports: [ModelsService],
})
export class ModelsModule {}