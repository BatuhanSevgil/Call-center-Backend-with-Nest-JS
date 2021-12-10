import { File } from '@prisma/client';
export class FileEntity implements File {
  constructor(partial: Partial<FileEntity>) {
    Object.assign(this, partial);
  }
  id: number;
  fileName: string;
  fileDesc: string;
  filePath: string;
  fileExt: string;
  dataCount: number;
  dataSyncStatus: boolean;
  dataSyncDate: Date;
  dataSyncResult: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  version: number;
  flags: string[];
}
