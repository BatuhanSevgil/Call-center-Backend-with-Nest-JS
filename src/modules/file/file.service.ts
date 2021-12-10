import { HttpService } from '@nestjs/axios';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import config from 'src/Core/Config/config';
import { PrismaService } from 'src/Core/Prisma/prisma.service';
import { TOTPService } from 'src/Helper/TOTP/totp.service';
import { XlsxHelperService } from 'src/Helper/XLSX/xlsx-helper.service';
import { DataProducerService } from '../data/Queues/data-producer.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    public readonly prisma: PrismaService,
    readonly xlsx: XlsxHelperService,
    private readonly DataQueue: DataProducerService,
    private readonly httpService: HttpService,
    public readonly totpoService: TOTPService,
  ) {}
  async create(data: FileEntity) {
    const { id } = await this.prisma.file.create({ data });
    console.log(`${config().EXCELSERVER}${id}`);
    const result = await this.httpService
      .get(`${config().EXCELSERVER}${id}`)
      .subscribe((result) => {
        console.log(result);
      });
    return result;
    // this.DataQueue.addQueue({ id, filename: fileName });
  }

  findAll() {
    return this.prisma.file.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
