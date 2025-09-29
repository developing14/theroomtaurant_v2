import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

import { CreatePayrollDto, UpdatePayrollDto } from './dto/payroll.dto';
import { CreatePayrollAdjustmentDto, UpdatePayrollAdjustmentDto } from './dto/payrollAdjustment.dto';

import { PayrollAdjustmentService, PayrollService } from './payroll.service';

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
