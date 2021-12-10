import { HttpModule } from '@nestjs/axios';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueuesModule } from './Core/BullQueue/queues.module';
import config from './Core/Config/config';
import { PrismaModule } from './Core/Prisma/prisma.module';
import { HelperModule } from './Helper/helper.module';
import { DataModule } from './modules/data/data.module';
import { DataProducerService } from './modules/data/Queues/data-producer.service';
import { DataConsumer } from './modules/data/Queues/data.consumer';

import { FileModule } from './modules/file/file.module';
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    HttpModule,
    PrismaModule,
    QueuesModule,
    HelperModule,
    FileModule,
    DataModule,
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
