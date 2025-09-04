import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
import {ObjectId} from 'mongodb'

@Injectable()
export class DepartmentService {
  constructor (@InjectRepository(Department) private readonly DepartmentRepo:Repository<Department>){}
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.DepartmentRepo.save(createDepartmentDto);
  }

  findAll() {
    return this.DepartmentRepo.find();
  }

  findOneById(id: string) {
    return this.DepartmentRepo.findOneBy({_id: new ObjectId(id)});
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.DepartmentRepo.update({_id:new ObjectId(id)}, updateDepartmentDto);
  }

  remove(id: string) {
    return this.DepartmentRepo.update({_id:new ObjectId(id)}, {isDeleted: true});
  }

  restore(id: string) {
    return this.DepartmentRepo.update({_id:new ObjectId(id)}, {isDeleted: false});
  }
}
