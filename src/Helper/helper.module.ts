import { Global, Module } from '@nestjs/common';
import { FileIoService } from './IO/file-io/file-io.service';
import { TOTPService } from './TOTP/totp.service';
import { XlsxHelperService } from './XLSX/xlsx-helper.service';
@Global()
@Module({
  providers: [XlsxHelperService, FileIoService, TOTPService],
  exports: [XlsxHelperService, FileIoService, TOTPService],
})
export class HelperModule {}
