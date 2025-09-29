import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { CandidateService, InterviewReportService, DocumentsService } from './candidate.service';
import { CreateCandidateDto, UpdateCandidateDto } from './dto/candidate.dto';
import { CreateDocumentsDto, UpdateDocumentsDto } from './dto/documents.dto';
import { CreateInterviewReportDto, UpdateInterviewReportDto } from './dto/interviewReport.dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

@Controller('candidate')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly documentsService: DocumentsService,
    private readonly interviewReportService: InterviewReportService
  ) {}

  @Post()
  createCandidate(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }
  
  @Get()
  async findAllCandidate() {    
    const candidates = await this.candidateService.findAll();
    return candidates
  }  
  
  @Get('id/:id')
  async findOne(@Param('id') id: string) {
    const candidate = await this.candidateService.findOneById(id);
    const Documents = await this.documentsService.findOneByCandidate(id);
    const interviewReport = await this.interviewReportService.findOneByCandidate(id);
    return {Documents, candidate, interviewReport}
  }
  
  @Patch('id/:id')
  update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidateService.update(id, updateCandidateDto);
  }
  
  
  
  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(id);
  }
  
  @Patch('restore/id/:id')
  restore(@Param('id') id: string) {
    return this.candidateService.restore(id);
  }
  
  
  
}

@Controller('candidateDocuments')
export class CandidateDocumentsController {
  constructor(private readonly documentsService: DocumentsService){}
  
  @Post('')
  createDocuments(@Body() createDocumentsDto: CreateDocumentsDto) {
    return this.documentsService.create(createDocumentsDto);
  }
  
  @Get('')
  async findAllDocuments(){
    return this.documentsService.findAll()
  }

  @Get('id/:id')
  async findOneById(@Param('id', ParseObjectIdPipe) id: string){
    return this.documentsService.findOneById(id)
  }
  
  @Patch('id/:id')
  updateDocuments(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentsDto) {
    return this.documentsService.update(id, updateDocumentDto);
  }
  
  @Delete('id/:id')
  removeDocument(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}

@Controller('interviewReport')
export class InterviewReportController {
  constructor (private readonly interviewReportService: InterviewReportService){}
  
  @Post('')
  createInterviewReport(@Body() createInterviewReportDto: CreateInterviewReportDto) {
    return this.interviewReportService.create(createInterviewReportDto);
  }
  
  @Get('')
  async findAllInterviewReport(){
    return this.interviewReportService.findAll()
  }

  @Get('id/:id')
  async findOneById(@Param('id', ParseObjectIdPipe) id: string){
    return this.interviewReportService.findOneById(id)
  }

  @Patch('id/:id')
  updateInterviewReport(@Param('id') id: string, @Body() updateInterviewReportDto: UpdateInterviewReportDto) {
    return this.interviewReportService.update(id, updateInterviewReportDto);
  }

  @Delete('id/:id')
  removeInterviewReport(@Param('id') id: string) {
    return this.interviewReportService.remove(id);
  }
}

