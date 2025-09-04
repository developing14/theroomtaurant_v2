import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import {ObjectId } from 'mongodb';
import { Repository } from 'typeorm';

@Injectable()
export class AttendanceService {
  constructor(@InjectRepository(Attendance) private readonly AttendanceRepo:Repository<Attendance>){}
  create(createAttendanceDto: CreateAttendanceDto) {
    return this.AttendanceRepo.save(createAttendanceDto);
  }

  findAll() {
    return this.AttendanceRepo.find();
  }

  findOneById(id: string) {
    return this.AttendanceRepo.findOneBy({_id:new ObjectId(id)});
  }

  update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    return this.AttendanceRepo.update({_id:new ObjectId(id)}, updateAttendanceDto);
  }

  remove(id: string) {
    return this.AttendanceRepo.delete({_id:new ObjectId(id)});
  }
}
