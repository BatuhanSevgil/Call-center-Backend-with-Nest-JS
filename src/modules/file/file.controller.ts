import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import config from 'src/Core/Config/config';
import { XlsxHelperService } from 'src/Helper/XLSX/xlsx-helper.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  // @Post()
  // create(@Body() createFileDto: FileEntity) {
  //   return this.fileService.create(createFileDto);
  // }
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: config().UPLOADSRC,
    }),
  )
  uploadSingle(
    @UploadedFile() file: Express.Multer.File,
    @Body() formDetail: any,
  ) {
    console.log(file);
    const fileExt = file.originalname.split('.').reverse()[0];
    const data = new FileEntity({
      fileExt: fileExt,
      fileDesc: formDetail['desc'],
      fileName: formDetail['filename'],
      filePath: file.filename,
    });
    this.fileService.create(data);
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.fileService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
