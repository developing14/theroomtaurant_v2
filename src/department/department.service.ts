import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

import { ObjectId } from 'mongodb'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
    return this.DepartmentModel.findById({_id: new ObjectId(id)});
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.DepartmentModel.updateOne({_id:new ObjectId(id)}, updateDepartmentDto);
  }

  remove(id: string) {
    return this.DepartmentModel.updateOne({_id:new ObjectId(id)}, {isDeleted: true});
  }

  restore(id: string) {
    return this.DepartmentModel.updateOne({_id:new ObjectId(id)}, {isDeleted: false});
  }
}
