import { Module } from '@nestjs/common';
import { PayrollAdjustmentService, PayrollService } from './payroll.service';
import { PayrollAdjustmentController, PayrollController } from './payroll.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payroll, PayrollSchema } from './schema/payroll.schema';
import { PayrollAdjustment, PayrollAdjustmentSchema } from './schema/payrollAdjustment.schema';
import { Attendance, AttendanceSchema } from './schema/attendance.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Payroll.name, schema: PayrollSchema },
    { name: PayrollAdjustment.name, schema: PayrollAdjustmentSchema },
    { name: Attendance.name, schema: AttendanceSchema }
  ])],
  controllers: [PayrollController, PayrollAdjustmentController],
  providers: [PayrollService, PayrollAdjustmentService],
})
export class PayrollModule {}
