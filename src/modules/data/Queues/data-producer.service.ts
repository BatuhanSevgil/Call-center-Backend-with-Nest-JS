import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { DataConsumerDto } from './data.consumer';

@Injectable()
export class DataProducerService {
  constructor(@InjectQueue('exceltodata') private DataSave: Queue) {}

  addQueue(data: DataConsumerDto) {
    this.DataSave.add(data);
  }
}
