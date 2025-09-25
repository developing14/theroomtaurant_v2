import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe} from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body(new ValidationPipe) createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }

  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
      return this.positionService.findOneById(id);
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
}
