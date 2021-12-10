import { Test, TestingModule } from '@nestjs/testing';
import { XlsxHelperService } from './xlsx-helper.service';

describe('XlsxHelperService', () => {
  let service: XlsxHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XlsxHelperService],
    }).compile();

    service = module.get<XlsxHelperService>(XlsxHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
