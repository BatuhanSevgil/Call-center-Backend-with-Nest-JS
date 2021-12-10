import {
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import config from 'src/Core/Config/config';
import { PrismaService } from 'src/Core/Prisma/prisma.service';
import { XlsxHelperService } from 'src/Helper/XLSX/xlsx-helper.service';

export class DataConsumerDto {
  id: number;
  filename: string;
}

@Processor('exceltodata')
export class DataConsumer {
  constructor(
    private readonly XlsxHelper: XlsxHelperService,
    private readonly prisma: PrismaService,
  ) {}
  @Process()
  async saveDate(job: Job<DataConsumerDto>) {
    const xlsxResult = await this.XlsxHelper.toJSON(job.data.filename);
    console.log(xlsxResult);
    console.log(xlsxResult.Count);

    if (xlsxResult.Count <= 1) {
      throw new Error('DATA yok hacı  ');
    }
    if (
      !(
        xlsxResult.DataHeader.includes('adsoyad') &&
        xlsxResult.DataHeader.includes('telefon')
      )
    ) {
      throw new Error('Excel Data Header Uyuşmazlığı');
    }

    console.log(this.prisma.file.findMany({}));
  }

  @OnQueueCompleted()
  async complated() {
    console.log('ben complatedım abi valla ! ');
  }
  @OnQueueFailed()
  async fail(job: Job<DataConsumerDto>) {
    console.log('TAŞ KESİN ULEEYN! ');
    console.log(job.failedReason);
  }
}
