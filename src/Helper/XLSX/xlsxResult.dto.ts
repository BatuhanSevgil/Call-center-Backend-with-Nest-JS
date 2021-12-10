import { AcceptData } from 'src/modules/data/dto/Data.xlsx.dto';

export class xlsxResult {
  public constructor(Count?: number, DataHeader?: string[], Data?: Array<any>) {
    this.Count = Count;
    this.Data = Data;
    this.DataHeader = DataHeader;
  }
  DataHeader: string[];
  Count: number;
  Data: Array<any>;
}
