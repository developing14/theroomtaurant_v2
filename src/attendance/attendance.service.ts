import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateAttendanceDto, UpdateAttendanceDto } from './dto/attendance.dto';
import { Attendance } from './schema/attendance.schema';

@Injectable()
export class AttendanceService {
  constructor(@InjectModel('Attendance') private readonly attendanceModel:Model<Attendance>){}
  
  create(createAttendanceDto: CreateAttendanceDto) {
    const attendance = new this.attendanceModel(createAttendanceDto)
    attendance.lastUpdate = new Date();
    return attendance.save();
  }

  findAll() {
    return this.attendanceModel.find();
  }

  findOneById(id: string) {
    return this.attendanceModel.findById(id);
  }

  update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    updateAttendanceDto.lastUpdate = new Date();
    return this.attendanceModel.updateOne({_id:id}, updateAttendanceDto);
  }

  remove(id: string) {
    return this.attendanceModel.deleteOne({_id:id});
  }
}
