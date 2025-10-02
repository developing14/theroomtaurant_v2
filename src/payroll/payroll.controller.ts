import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

import { CreatePayrollDto, UpdatePayrollDto } from './dto/payroll.dto';
import { CreatePayrollAdjustmentDto, UpdatePayrollAdjustmentDto } from './dto/payrollAdjustment.dto';

import { AttendanceService, PayrollAdjustmentService, PayrollService } from './payroll.service';
import { CreateAttendanceDto, UpdateAttendanceDto } from './dto/attendance.dto';

@Controller('payroll')
export class PayrollController {
  constructor(
    private readonly payrollService: PayrollService,
    private readonly payrollAdjustmentService: PayrollAdjustmentService
  ) {}

  @Post()
  create(@Body() createPayrollDto: CreatePayrollDto) {
    return this.payrollService.create(createPayrollDto);
  }
  
  
  @Get()
  findAll() {
    return this.payrollService.findAll();
  }
  
  
  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    const payroll = this.payrollService.findOneById(id)
    const adjustment = this.payrollAdjustmentService.findOneByPayrollId(id)
    return {payroll, adjustment}
  }
  
  
  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updatePayrollDto: UpdatePayrollDto) {
    return this.payrollService.update(id, updatePayrollDto);
  }
  
  
  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.payrollService.remove(id);
  }
  
  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id:string){
    return this.payrollService.restore(id)
  }
  
}

@Controller('payrollAdjustment')
export class PayrollAdjustmentController {
  constructor (private readonly payrollAdjustmentService:PayrollAdjustmentService){}
  
  @Post('')
  createPayrollAdjustment(@Body() createPayrollAdjustmentDto: CreatePayrollAdjustmentDto) {
    return this.payrollAdjustmentService.create(createPayrollAdjustmentDto);
  }
  
  @Get('payrollAdjustment')
  findAll(){
    return this.payrollAdjustmentService.findAll()
  }

  @Get('id/:id')
  findOneAjm(@Param('id', ParseObjectIdPipe) id: string) {
    return this.payrollAdjustmentService.findOneById(id);
  }
  
  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updatePayrollDto: UpdatePayrollAdjustmentDto) {
    return this.payrollAdjustmentService.update(id, updatePayrollDto);
  }
  
  @Delete('id/:id')
  delete(@Param('id', ParseObjectIdPipe) id:string){
    return this.payrollAdjustmentService.remove(id)
  }
}


@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('test')
  test(){
    return new Date()
  }

  @Post()
  create(@Body(new ValidationPipe) createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.create(createAttendanceDto);
  }

  @Get()
  findAll() {
    return this.attendanceService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.attendanceService.findOneById(id);
  }

  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendanceService.update(id, updateAttendanceDto);
  }

  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.attendanceService.remove(id);
  }
}
