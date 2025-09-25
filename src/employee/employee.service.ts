import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { Employee } from './schema/employee.schema';

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
    return this.employeeModel.updateOne({_id: new ObjectId(id)}, updateEmployeeDto);
  }
  
  remove(id: string) {
    return this.employeeModel.updateOne(
      {_id: new ObjectId(id)}, 
      {isDeleted: true,
        lastUpdate: new Date()
      });
    }
    
    restore(id: string) {
      return this.employeeModel.updateOne(
        {_id: new ObjectId(id)}, 
        {isDeleted: false,
          lastUpdate: new Date()          
      });
  }
}
