import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';

import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { CreateDocumentsDto, UpdateDocumentsDto } from './dto/documents.dto';
import { Employee } from './schema/employee.schema';
import { Documents } from 'src/employee/schema/documents.schema';

@Injectable()
export class EmployeeService {
  constructor (@InjectModel('Employee') private readonly employeeModel:Model<Employee>){}
  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = new this.employeeModel(createEmployeeDto)
    return employee.save();
  }

  findAll() {
    return this.employeeModel.find();
  }

  findOneById(id: string) {
    return this.employeeModel.findById(id);
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    updateEmployeeDto.lastUpdate = new Date()
    return this.employeeModel.updateOne({_id: id}, updateEmployeeDto);
  }
  
  remove(id: string) {
    return this.employeeModel.updateOne(
      {_id: new ObjectId(id)}, 
      { isDeleted: true,
        leaveDate: new Date(),
        lastUpdate: new Date()
      });
    }
    
    restore(id: string) {
      return this.employeeModel.updateOne(
        {_id: id}, 
        { isDeleted: false,
          leaveDate: null,
          lastUpdate: new Date()          
      });
  }
}


@Injectable()
export class DocumentsService {
  constructor (@InjectModel('Documents') private readonly DocumentsModel:Model<Documents>){}
  create(createDocumentsDto: CreateDocumentsDto) {
    const documents = new this.DocumentsModel(createDocumentsDto)
    return documents.save();
  }

  findAll() {
    return this.DocumentsModel.find();
  }

  findOneById(id: string) {
    return this.DocumentsModel.findById(id);
  }

  findOneByEmployee(employeeId: string) {
    return this.DocumentsModel.findOne({employee: employeeId});
  }

  update(id: string, updateDocumentsDto: UpdateDocumentsDto) {
    updateDocumentsDto.lastUpdate = new Date()
    return this.DocumentsModel.updateOne({_id: id}, updateDocumentsDto);
  }
  
  remove(id: string) {
    return this.DocumentsModel.deleteOne({_id:id})
  }
}