import { Injectable } from '@nestjs/common';
import config from 'src/Core/Config/config';
import { AcceptData } from 'src/modules/data/dto/Data.xlsx.dto';
import * as XLSX from 'xlsx';
import { xlsxResult } from './xlsxResult.dto';
import { FileIoService } from '../IO/file-io/file-io.service';
import * as fs from 'fs';
import * as readXlsxFile from 'read-excel-file/node';
import sizeof from 'object-sizeof';

@Injectable()
export class XlsxHelperService {
  constructor(private readonly FileOI: FileIoService) {}
  async toJSON(filename: string) {
    const filePath = `${config().UPLOADSRC}${filename}`;

    const workbook: XLSX.WorkBook = await XLSX.read(filePath, {
      type: 'file',
    });

    const data = await XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]],
    );

    const dataHeader = Object.keys(data[0]);

    console.log(data);
    return new xlsxResult(data.length, dataHeader, data);
  }
}
