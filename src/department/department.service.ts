import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

import { Department } from './schema/department.schema';

@Injectable()
export class DepartmentService {
  constructor (@InjectModel('Department') private readonly DepartmentModel:Model<Department>){}
  create(createDepartmentDto: CreateDepartmentDto) {
    const department = new this.DepartmentModel(createDepartmentDto)
    return department.save();
  }

  findAll() {
    return this.DepartmentModel.find();
  }

  findOneById(id: string) {
    return this.DepartmentModel.findById({_id: id});
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    updateDepartmentDto.lastUpdate = new Date()
    return this.DepartmentModel.updateOne({_id:id}, updateDepartmentDto);
  }

  remove(id: string) {
    return this.DepartmentModel.updateOne({_id:id}, {isDeleted: true, lastUpdate: new Date()});
  }

  restore(id: string) {
    return this.DepartmentModel.updateOne({_id:id}, {isDeleted: false, lastUpdate: new Date()});
  }
}
