import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe} from '@nestjs/common';
import { AssumptionService, DepartmentService, PositionService } from './lineup.service';
import { CreatePositionDto,UpdatePositionDto } from './dto/position.dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { CreateAssumptionDto } from './dto/assumption.dto';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../lineup/dto/department.dto';

@Controller('position')
export class PositionController {
  constructor(
    private readonly positionService: PositionService,
    private readonly assumptionService: AssumptionService,
    
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
    const assumption = this.assumptionService.findOneByPositionId(id)
    return {position, assumption}
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

@Controller('assumption')
export class AssumptionController {
  constructor (private readonly assumptionService:AssumptionService){}
  
  @Post('')
  createAssumption(@Body() createAssumptionDto: CreateAssumptionDto){
    return this.assumptionService.create(createAssumptionDto)
  }
  @Get('')
  findAllAssumption(){
    return this.assumptionService.findAll()
  }
  @Get('id/:id')
  findOneAssumption(@Param('id', ParseObjectIdPipe) id: string){
    return this.assumptionService.findOneById(id)
  }
  @Patch('id/:id')
  updateAssumption(@Param('id', ParseObjectIdPipe) id: string, @Body() updateAssumptionDto: CreateAssumptionDto) {
    return this.assumptionService.update(id, updateAssumptionDto);
  }
  @Delete('id/:id')
  removeAssumption(@Param('id', ParseObjectIdPipe) id: string) {
    return this.assumptionService.remove(id);
  }
  @Patch('id/:id/restore')
  restoreAssumption(@Param('id', ParseObjectIdPipe) id: string) {
    return this.assumptionService.restore(id);
  }

}


@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(@Body(new ValidationPipe) createDepartmentDto:CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.departmentService.findOneById(id);
  }

  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.departmentService.remove(id);
  }
  
  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id: string) {
    return this.departmentService.restore(id);
  }
}
