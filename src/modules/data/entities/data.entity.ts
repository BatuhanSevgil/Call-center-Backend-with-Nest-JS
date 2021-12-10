import { Data } from '@prisma/client';

export class DataEntity implements Data {
  id: number;
  fileId: number;
  phone: string;
  name: string;
  email: string;
  adress: string;
  ip: string;
  info1: string;
  info2: string;
  info3: string;
  statusId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  version: number;
  flags: string[];
}
