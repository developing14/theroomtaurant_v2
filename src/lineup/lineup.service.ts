import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreatePositionDto, UpdatePositionDto } from './dto/position.dto';
import { CreateAssumptionDto, UpdateAssumptionDto } from './dto/assumption.dto';

import { Position } from './schema/position.schema';
import { Assumption } from './schema/assumption.schema';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';
import { Department } from './schema/department.schema';

@Injectable()
export class PositionService {
  constructor(@InjectModel('Position') private readonly PositionModel:Model<Position>){}
  
  create(createPositionDto: CreatePositionDto) {
    const position = new this.PositionModel(createPositionDto)
    return position.save();
  }

  findAll() {
    return this.PositionModel.find();
  }

  findAllByJobType(jobType:string){
    return this.PositionModel.findOne({jobType: jobType})
  }

  findOneById(id: string) {
    return this.PositionModel.findById(id);
  }

  update(id: string, updatePositionDto: UpdatePositionDto) {
    updatePositionDto.lastUpdate = new Date()
    return this.PositionModel.updateOne({_id: id}, updatePositionDto);
  }

  remove(id: string) {
    return this.PositionModel.updateOne(
      {_id: id}, 
      { isDeleted: true,
        lastUpdate: new Date() 
      }
    )
  }

  restore(id: string) {
    return this.PositionModel.updateOne(
      {_id: id}, 
      { isDeleted: false,
        lastUpdate: new Date() 
      }
    )
  }
}

@Injectable()
export class AssumptionService {
  constructor(@InjectModel('Assumption') private readonly AssumptionModel:Model<Assumption>){}
  
  create(createAssumptionDto: CreateAssumptionDto) {
    const assumption = new this.AssumptionModel(createAssumptionDto)
    return assumption.save();
  } 

  findAll() {
    return this.AssumptionModel.find();
  }

  findOneById(id: string) {
    return this.AssumptionModel.findById(id);
  }

  findOneByPositionId(id: string){
    return this.AssumptionModel.findOne({position: id})
  }

  update(id: string, updateAssumptionDto: UpdateAssumptionDto) {
    updateAssumptionDto.lastUpdate = new Date()
    return this.AssumptionModel.updateOne({_id: id}, updateAssumptionDto);
  }

  remove(id: string) {
    return this.AssumptionModel.updateOne(
      {_id: id}, 
      { endDate: new Date(),
        lastUpdate: new Date()
      });
  }

  restore(id: string) {
    return this.AssumptionModel.updateOne(
      {_id: id}, 
      { endDate: null,
        lastUpdate: new Date() 
      }
    )
  }
}

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
    return this.DepartmentModel.updateOne({_id:id}, {isDeletedd: true, lastUpdate: new Date()});
  }

  restore(id: string) {
    return this.DepartmentModel.updateOne({_id:id}, {isDeletedd: false, lastUpdate: new Date()});
  }
}
