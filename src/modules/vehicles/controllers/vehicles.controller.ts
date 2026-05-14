import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehiclesService } from '../services/vehicles.service';
import { CreateVehicleDto } from '../dto/vehicles.dto';
@Controller('vehicle')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  findAll() {
    return 'Todos los behiculos';
  }

  @Post()
  createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }
}
