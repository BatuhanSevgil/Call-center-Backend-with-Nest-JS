import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Prisma/prisma.service';
import { TOTPService } from 'src/Helper/TOTP/totp.service';
import { DataEntity } from './entities/data.entity';

@Injectable()
export class DataService {
  constructor(
    public readonly prisma: PrismaService,
    public readonly httpService: HttpService,
  ) {}

  findAll() {
    // this.httpService.post()
    console.log();
  }
  create(data: DataEntity) {
    return this.prisma.data.create({ data });
  }
}
