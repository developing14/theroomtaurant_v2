import { Module } from '@nestjs/common';
import { PayrollAdjustmentService, PayrollService } from './payroll.service';
import { PayrollAdjustmentController, PayrollController } from './payroll.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payroll } from './schema/payroll.schema';
import { PayrollAdjustment } from './schema/payrollAdjustment.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Payroll.name, schema: require('./schema/payroll.schema').PayrollSchema },
    { name: PayrollAdjustment.name, schema: require('./schema/payrollAdjustment.schema').PayrollAdjustmentSchema }
  ])],
  controllers: [PayrollController, PayrollAdjustmentController],
  providers: [PayrollService, PayrollAdjustmentService],
})
export class PayrollModule {}
