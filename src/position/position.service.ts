import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreatePositionDto, UpdatePositionDto } from './dto/position.dto';
import { CreateAssignmentDto, UpdateAssignmentDto } from './dto/assignment.dto';

import { Position } from './schema/position.schema';
import { Assignment } from './schema/assignment.schema';

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
      { isDelete: true,
        lastUpdate: new Date() 
      }
    )
  }

  restore(id: string) {
    return this.PositionModel.updateOne(
      {_id: id}, 
      { isDelete: false,
        lastUpdate: new Date() 
      }
    )
  }
}

@Injectable()
export class AssignmentService {
  constructor(@InjectModel('Assignment') private readonly AssignmentModel:Model<Assignment>){}
  
  create(createAssignmentDto: CreateAssignmentDto) {
    const assignment = new this.AssignmentModel(createAssignmentDto)
    return assignment.save();
  } 

  findAll() {
    return this.AssignmentModel.find();
  }

  findOneById(id: string) {
    return this.AssignmentModel.findById(id);
  }

  update(id: string, updateAssignmentDto: UpdateAssignmentDto) {
    updateAssignmentDto.lastUpdate = new Date()
    return this.AssignmentModel.updateOne({_id: id}, updateAssignmentDto);
  }

  remove(id: string) {
    return this.AssignmentModel.updateOne(
      {_id: id}, 
      { endDate: new Date(),
        lastUpdate: new Date()
      });
  }

  restore(id: string) {
    return this.AssignmentModel.updateOne(
      {_id: id}, 
      { endDate: null,
        lastUpdate: new Date() 
      }
    )
  }
}
