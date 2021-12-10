import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataService } from './data.service';
import { DataEntity } from './entities/data.entity';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  findAllData() {
    return this.dataService.findAll();
  }

  @Post()
  create(@Body() data: DataEntity) {
    return this.dataService.create(data);
  }
}
