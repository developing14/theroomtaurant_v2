import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { ObjectId, Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor (@InjectRepository(Employee) private readonly employeeRepo:Repository<Employee>){}
  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepo.create(createEmployeeDto)
    return this.employeeRepo.save(employee);
  }

  findAll() {
    return this.employeeRepo.find();
  }

  findOneById(id: string) {
    return this.employeeRepo.findOneBy({_id: new ObjectId(id)});
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepo.update({_id: new ObjectId(id)}, updateEmployeeDto);
  }

  remove(id: string) {
    return this.employeeRepo.update({_id: new ObjectId(id)}, {isDeleted: true});
  }
  
  restore(id: string) {
    return this.employeeRepo.update({_id: new ObjectId(id)}, {isDeleted: false});
  }
}
