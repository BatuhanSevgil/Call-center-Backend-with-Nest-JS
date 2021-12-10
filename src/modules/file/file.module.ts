import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { HttpModule } from '@nestjs/axios';
import { HelperModule } from 'src/Helper/helper.module';

@Module({
  imports: [HttpModule, HelperModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
