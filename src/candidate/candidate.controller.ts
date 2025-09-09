import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto, CreateDocumentDto, CreateQualificationDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  createCandidate(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.createCandidate(createCandidateDto);
  }

  @Post('qualification')
  createQualification(@Body() createQualificationDto: CreateQualificationDto) {
    return this.candidateService.createQualification(createQualificationDto);
  }

  @Post('Document')
  createDocument(@Body() createDocumentDto: CreateDocumentDto) {
    return this.candidateService.createDocument(createDocumentDto);
  }

  @Get()
  findAllCandidate() {
    return this.candidateService.findAllCandidate();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findCandidateById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    // return this.candidateService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.candidateService.remove(id);
  }
}

