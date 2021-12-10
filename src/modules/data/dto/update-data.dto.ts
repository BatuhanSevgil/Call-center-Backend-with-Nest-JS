import { PartialType } from '@nestjs/swagger';
import { DataEntity } from '../entities/data.entity';

export class UpdateDataDto extends PartialType(DataEntity) {}
