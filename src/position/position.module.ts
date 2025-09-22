import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Assignment } from './entities/assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Position, Assignment])],
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}
