import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

import { Payroll } from './schema/payroll.schema';
import { PayrollAdjustment } from './schema/payrollAdjustment.schema';

import { CreatePayrollDto, UpdatePayrollDto } from './dto/payroll.dto';
import { CreatePayrollAdjustmentDto, UpdatePayrollAdjustmentDto } from './dto/payrollAdjustment.dto';
import { CreateAttendanceDto, UpdateAttendanceDto } from './dto/attendance.dto';
import { Attendance } from './schema/attendance.schema';

@Injectable()
export class PayrollService {
  constructor (@InjectModel('Payroll') private payrollModel:Model<Payroll>) {}
  create(createPayrollDto: CreatePayrollDto) {
    const payroll = new this.payrollModel(createPayrollDto)
    return payroll.save()
  }

  findAll() {
    return this.payrollModel.find();
  }

  findOneById(id: string) {
    return this.payrollModel.findById(id);
  }

  update(id: string, updatePayrollDto: UpdatePayrollDto) {
    updatePayrollDto.lastUpdate = new Date()
    return this.payrollModel.updateOne(
      {_id:id},
      updatePayrollDto
    );
  }

  remove(id: string) {
    return this.payrollModel.updateOne(
      {_id:id},
      {isDeleted: true}
    );
  }
  
  restore(id:string){
    return this.payrollModel.updateOne(
      {_id:id},
      {isDeleted: false}
    );
  }
}

@Injectable()
export class PayrollAdjustmentService {

  constructor (@InjectModel('PayrollAdjustment') private PayrollAdjustmentModel:Model<PayrollAdjustment>) {}

  create(createPayrollAdjustmentDto: CreatePayrollAdjustmentDto) {
    const PayrollAdjustment = new this.PayrollAdjustmentModel(createPayrollAdjustmentDto)
    return PayrollAdjustment.save()
  }

  findAll() {
    return this.PayrollAdjustmentModel.find();
  }

  findOneByPayrollId(id:string){
    return this.PayrollAdjustmentModel.findOne({payrollId: id})
  }

  findOneById(id: string) {
    return this.PayrollAdjustmentModel.findById(id);
  }

  update(id: string, updatePayrollAdjustmentDto: UpdatePayrollAdjustmentDto) {
    updatePayrollAdjustmentDto.lastUpdate = new Date()
    return this.PayrollAdjustmentModel.updateOne(
      {_id:id},
      updatePayrollAdjustmentDto
    );
  }

  remove(id: string) {
    return this.PayrollAdjustmentModel.deleteOne({_id:id});
  }

}

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
