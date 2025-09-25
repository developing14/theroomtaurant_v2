import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { Position } from './schema/position.schema';
import { InjectModel } from '@nestjs/mongoose';

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
    return this.PositionModel.updateOne({_id: new ObjectId(id)}, updatePositionDto);
  }

  remove(id: string) {
    return this.PositionModel.deleteOne({_id: new ObjectId(id)});
  }
}
