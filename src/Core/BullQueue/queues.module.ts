import { BullModule } from '@nestjs/bull';
import { Global, Module } from '@nestjs/common';
import { DataProducerService } from 'src/modules/data/Queues/data-producer.service';
import { DataConsumer } from 'src/modules/data/Queues/data.consumer';
@Global()
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'exceltodata',
    }),
  ],
  providers: [DataConsumer, DataProducerService],
  exports: [DataConsumer, DataProducerService],
})
export class QueuesModule {}
