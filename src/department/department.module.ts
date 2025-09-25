import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';

import { Department, DepartmentSchema } from './schema/department.schema';
import { Position } from '../position/schema/position.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Department.name, schema: DepartmentSchema }])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
