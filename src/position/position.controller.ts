import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe} from '@nestjs/common';
import { AssignmentService, PositionService } from './position.service';
import { CreatePositionDto,UpdatePositionDto } from './dto/position.dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { CreateAssignmentDto } from './dto/assignment.dto';

@Controller('position')
export class PositionController {
  constructor(
    private readonly positionService: PositionService,
    private readonly assignmentService: AssignmentService,
    
  ) {}

  @Post()
  create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }

  @Post('assignment')
  createAssignment(@Body() createAssignmentDto: CreateAssignmentDto){
    return this.assignmentService.create(createAssignmentDto)
  }

  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  @Get('assignment')
  findAllAssignment(){
    return this.assignmentService.findAll()
  }

  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
      return this.positionService.findOneById(id);
  }

  @Get('assignment/id/:id')
  findOneAssignment(@Param('id', ParseObjectIdPipe) id: string){
    return this.assignmentService.findOneById(id)
  }

  @Get('type/:type')
  findJobType(@Param('type') jobtype:string){
    return this.positionService.findAllByJobType(jobtype)
  }

  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updatePositionDto: UpdatePositionDto) {
    return this.positionService.update(id, updatePositionDto);
  }

  @Patch('assignment/id/:id')
  updateAssignment(@Param('id', ParseObjectIdPipe) id: string, @Body() updateAssignmentDto: CreateAssignmentDto) {
    return this.assignmentService.update(id, updateAssignmentDto);
  }

  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.positionService.remove(id);
  }

  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id: string) {
    return this.positionService.restore(id);
  }

  @Delete('assignment/id/:id')
  removeAssignment(@Param('id', ParseObjectIdPipe) id: string) {
    return this.assignmentService.remove(id);
  }

  @Patch('assignment/id/:id/restore')
  restoreAssignment(@Param('id', ParseObjectIdPipe) id: string) {
    return this.assignmentService.restore(id);
  }
}
