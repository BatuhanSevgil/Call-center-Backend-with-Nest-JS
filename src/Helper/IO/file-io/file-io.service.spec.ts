import { Test, TestingModule } from '@nestjs/testing';
import { FileIoService } from './file-io.service';

describe('FileIoService', () => {
  let service: FileIoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileIoService],
    }).compile();

    service = module.get<FileIoService>(FileIoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
