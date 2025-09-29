import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { CreateDocumentsDto, UpdateDocumentsDto } from './dto/documents.dto';

import { EmployeeService, DocumentsService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly documentsService: DocumentsService
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }
  
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }    
  
  @Get('id/:id')
  async findOne(@Param('id', ParseObjectIdPipe) id: string) {
    const employee = await this.employeeService.findOneById(id);
    const documents = await this.documentsService.findOneByEmployee(id);
    return {employee, documents};
  }
  
  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }  
  
  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.employeeService.remove(id);
  }  
  
  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id: string){
    return this.employeeService.restore(id);
  }
}

@Controller('EmployeeDocuments')
export class EmployeeDocumentsController {
  constructor (private readonly documentsService:DocumentsService){}
  
  @Post('')
  createDocuments(@Body() CreateDocumentsDto: CreateDocumentsDto) {
    return this.documentsService.create(CreateDocumentsDto);
  }
  
  @Get('')
  findAllDocuments() {
    return this.documentsService.findAll();
  }
  
  @Get('id/:id')
  findOneDocuments(@Param('id', ParseObjectIdPipe) id: string) {
    return this.documentsService.findOneById(id);
  }
  
  @Patch('id/:id')
  updateDocuments(@Param('id', ParseObjectIdPipe) id: string, @Body() updateDocumentsDto: UpdateDocumentsDto) {
    return this.documentsService.update(id, updateDocumentsDto);
  }

  @Delete('documents/id/:id')
  removeDocuments(@Param('id', ParseObjectIdPipe) id: string) {
    return this.documentsService.remove(id);
  }
}