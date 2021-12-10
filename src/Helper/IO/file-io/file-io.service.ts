import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import config from 'src/Core/Config/config';

@Injectable()
export class FileIoService {
  delete(filename: string) {
    fs.unlinkSync(`${config().UPLOADSRC}${filename}`);
  }
  // ReadStream(path: string) {
  //   return fs.createReadStream(path);
  // }
}
