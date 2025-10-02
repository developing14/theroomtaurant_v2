import { Module } from '@nestjs/common';
import { AssumptionService, DepartmentService, PositionService } from './lineup.service';
import { AssumptionController, DepartmentController, PositionController } from './lineup.controller';

import { Position, PositionSchema } from './schema/position.schema';
import { Assumption, AssumptionSchema } from './schema/assumption.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from './schema/department.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Position.name, schema: PositionSchema },
    { name: Assumption.name, schema: AssumptionSchema },
    { name: Department.name, schema: DepartmentSchema }

  ] )],
  controllers: [PositionController, AssumptionController, DepartmentController],
  providers: [PositionService, AssumptionService, DepartmentService],
})
export class LineupModule {}
