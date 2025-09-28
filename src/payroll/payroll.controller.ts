import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

import { CreatePayrollDto, UpdatePayrollDto } from './dto/payroll.dto';

import { PayrollAdjustmentService, PayrollService } from './payroll.service';
import { CreatePayrollAdjustmentDto, UpdatePayrollAdjustmentDto } from './dto/payrollAdjustment.dto';

@Controller('payroll')
export class PayrollController {
  constructor(
    private readonly payrollService: PayrollService,
    private readonly payrollAdjustmentService: PayrollAdjustmentService,
  ) {}

  @Post()
  create(@Body() createPayrollDto: CreatePayrollDto) {
    return this.payrollService.create(createPayrollDto);
  }
  
  @Post('payrollAdjustment')
  createPayrollAdjustment(@Body() createPayrollAdjustmentDto: CreatePayrollAdjustmentDto) {
    return this.payrollAdjustmentService.create(createPayrollAdjustmentDto);
  }

  @Get()
  findAll() {
    return this.payrollService.findAll();
  }

  @Get('payrollAdjustment')
  findAllAjm(){
    return this.payrollAdjustmentService.findAll()
  }

  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.payrollService.findOneById(id);
  }
  
  @Get('payrollAdjustment/id/:id')
  findOneAjm(@Param('id', ParseObjectIdPipe) id: string) {
    return this.payrollAdjustmentService.findOneById(id);
  }
  
  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updatePayrollDto: UpdatePayrollDto) {
    return this.payrollService.update(id, updatePayrollDto);
  }

  @Patch('payrollajd/id/:id')
  updateajm(@Param('id', ParseObjectIdPipe) id: string, @Body() updatePayrollDto: UpdatePayrollAdjustmentDto) {
    return this.payrollAdjustmentService.update(id, updatePayrollDto);
  }

  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.payrollService.remove(id);
  }

  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id:string){
    return this.payrollService.restore(id)
  }

  @Delete('test/:id')
  delete(@Param('id', ParseObjectIdPipe) id:string){
    return this.payrollAdjustmentService.remove(id)
  }
}
