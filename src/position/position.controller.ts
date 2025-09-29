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

  
  @Get()
  findAll() {
    return this.positionService.findAll();
  }
  
  
  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    const position = this.positionService.findOneById(id);
    const assignment = this.assignmentService.findOneByPositionId(id)
    return {position, assignment}
  }
  
  
  @Get('type/:type')
  findJobType(@Param('type') jobtype:string){
    return this.positionService.findAllByJobType(jobtype)
  }
  
  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updatePositionDto: UpdatePositionDto) {
    return this.positionService.update(id, updatePositionDto);
  }
  
  
  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.positionService.remove(id);
  }
  
  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id: string) {
    return this.positionService.restore(id);
  }
  
  
}

@Controller('assignment')
export class AssignmentController {
  constructor (private readonly assignmentService:AssignmentService){}
  
  @Post('')
  createAssignment(@Body() createAssignmentDto: CreateAssignmentDto){
    return this.assignmentService.create(createAssignmentDto)
  }
  @Get('')
  findAllAssignment(){
    return this.assignmentService.findAll()
  }
  @Get('id/:id')
  findOneAssignment(@Param('id', ParseObjectIdPipe) id: string){
    return this.assignmentService.findOneById(id)
  }
  @Patch('id/:id')
  updateAssignment(@Param('id', ParseObjectIdPipe) id: string, @Body() updateAssignmentDto: CreateAssignmentDto) {
    return this.assignmentService.update(id, updateAssignmentDto);
  }
  @Delete('id/:id')
  removeAssignment(@Param('id', ParseObjectIdPipe) id: string) {
    return this.assignmentService.remove(id);
  }
  @Patch('id/:id/restore')
  restoreAssignment(@Param('id', ParseObjectIdPipe) id: string) {
    return this.assignmentService.restore(id);
  }

}
