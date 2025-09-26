import { Module } from '@nestjs/common';
import { DocumentsService, EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

import { Employee, EmployeeSchema } from './schema/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsSchema } from './schema/documents.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employee.name, schema: EmployeeSchema },
    { name: 'Documents', schema: DocumentsSchema }
  ])],
  controllers: [EmployeeController],
  providers: [EmployeeService, DocumentsService],
})
export class EmployeeModule {}
