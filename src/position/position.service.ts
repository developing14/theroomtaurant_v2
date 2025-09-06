import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionService {
  constructor(@InjectRepository(Position) private readonly PositionRepo:Repository<Position>){}
  create(createPositionDto: CreatePositionDto) {
    const position = this.PositionRepo.create(createPositionDto)
    return this.PositionRepo.save(position);
  }

  findAll() {
    return this.PositionRepo.find();
  }

  findAllByJobType(jobType:string){
    return this.PositionRepo.find({where: {jobType: jobType}})
  }

  findOneById(id: string) {
    return this.PositionRepo.findOneBy({_id: new ObjectId(id)});
  }

  update(id: string, updatePositionDto: UpdatePositionDto) {
    return this.PositionRepo.update({_id: new ObjectId(id)}, updatePositionDto);
  }

  remove(id: string) {
    return this.PositionRepo.delete({_id: new ObjectId(id)});
  }
}
