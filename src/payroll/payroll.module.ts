import { Module } from '@nestjs/common';
import { PayrollAdjustmentService, PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Payroll', schema: require('./schema/payroll.schema').PayrollSchema },
    { name: 'PayrollAdjustment', schema: require('./schema/payrollAdjustment.schema').PayrollAdjustmentSchema }
  ])],
  controllers: [PayrollController],
  providers: [PayrollService, PayrollAdjustmentService],
})
export class PayrollModule {}
