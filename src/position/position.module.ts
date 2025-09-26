import { Module } from '@nestjs/common';
import { AssignmentService, PositionService } from './position.service';
import { PositionController } from './position.controller';

import { Position, PositionSchema } from './schema/position.schema';
import { Assignment, AssignmentSchema } from './schema/assignment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Position.name, schema: PositionSchema },
    { name: Assignment.name, schema: AssignmentSchema }
  ] )],
  controllers: [PositionController],
  providers: [PositionService, AssignmentService],
})
export class PositionModule {}
