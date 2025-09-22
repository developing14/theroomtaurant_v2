import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto, CreateDocumentsDto, CreateInterviewReportDto, CreateQualificationDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  createCandidate(@Body(new ValidationPipe) createCandidateDto: CreateCandidateDto) {
    return this.candidateService.createCandidate(createCandidateDto);
  }

  @Post('qualification')
  createQualification(@Body() createQualificationDto: CreateQualificationDto) {
    return this.candidateService.createQualification(createQualificationDto);
  }

  @Post('Documents')
  createDocuments(@Body(new ValidationPipe) createDocumentsDto: CreateDocumentsDto) {
    return this.candidateService.createDocuments(createDocumentsDto);
  }

  @Post('interviewReport')
  createInterviewReport(@Body() createInterviewReportDto: CreateInterviewReportDto) {
    return this.candidateService.createInterviewReport(createInterviewReportDto);
  }

  @Get()
  async findAllCandidate() {
    
    const candidate = await this.candidateService.findAllCandidate();
    return candidate
  }

  @Get('id/:id')
  async findOne(@Param('id') id: string) {
    const candidate = await this.candidateService.findCandidateById(id);
    const qualification = await this.candidateService.findQualificationByCandidate(id);
    const Documents = await this.candidateService.findDocumentsByCandidate(id);
    const interviewReport = await this.candidateService.findInterviewReportsByCandidate(id);
    return {...candidate, ...qualification, ...Documents, ...interviewReport}
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

