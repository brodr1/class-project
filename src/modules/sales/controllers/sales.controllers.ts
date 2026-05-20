import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { SalesService } from '../services/sales.service';

import {
  CreateSalesDto,
  UpdateSalesDto,
} from '../dto/sales.dto';

@ApiTags('Sales')
@Controller('sales')
export class SalesController {

  constructor(
    private readonly salesService: SalesService,
  ) {}

  @Post()
  create(
    @Body() createSalesDto: CreateSalesDto,
  ) {
    return this.salesService.create(createSalesDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.salesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,

    @Body() updateSalesDto: UpdateSalesDto,
  ) {
    return this.salesService.update(
      id,
      updateSalesDto,
    );
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.salesService.remove(id);
  }
}