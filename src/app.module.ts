import { Module } from '@nestjs/common';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsModule } from './modules/brands/brands.module';
import { ModelsModule } from './modules/models/models.module';
import { CustomersModule } from './customers/customer.module';
import { Sale } from './modules/sales/entities/sales.entity';
import { SalesModule } from './modules/sales/sales.module';

@Module({
  imports: [
    VehiclesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    BrandsModule,
    ModelsModule,
    CustomersModule,
    SalesModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
