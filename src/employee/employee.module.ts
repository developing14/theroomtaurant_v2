import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DocumentsService, EmployeeService } from './employee.service';
import { EmployeeController, EmployeeDocumentsController } from './employee.controller';

import { Employee, EmployeeSchema } from './schema/employee.schema';
import { Documents, DocumentsSchema } from './schema/documents.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employee.name, schema: EmployeeSchema },
    { name: Documents.name, schema: DocumentsSchema }
  ])],
  controllers: [EmployeeController, EmployeeDocumentsController],
  providers: [EmployeeService, DocumentsService],
})
export class EmployeeModule {}
