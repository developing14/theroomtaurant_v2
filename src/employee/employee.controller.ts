import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { CreateDocumentsDto, UpdateDocumentsDto } from './dto/documents.dto';

import { EmployeeService, DocumentsService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly documentsService: DocumentsService,
    
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Post('documents')
  createDocuments(@Body() CreateDocumentsDto: CreateDocumentsDto) {
    return this.documentsService.create(CreateDocumentsDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get('documents')
  findAllDocuments() {
    return this.documentsService.findAll();
  }
  
  @Get('documents/id/:id')
  findOneDocuments(@Param('id', ParseObjectIdPipe) id: string) {
    return this.documentsService.findOneById(id);
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

  @Patch('documents/id/:id')
  updateDocuments(@Param('id', ParseObjectIdPipe) id: string, @Body() updateDocumentsDto: UpdateDocumentsDto) {
    return this.documentsService.update(id, updateDocumentsDto);
  }

  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.employeeService.remove(id);
  }

  @Delete('documents/id/:id')
  removeDocuments(@Param('id', ParseObjectIdPipe) id: string) {
    return this.documentsService.remove(id);
  }
  
  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id: string){
    return this.employeeService.restore(id);
  }
}