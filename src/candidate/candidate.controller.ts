import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { CandidateService, InterviewReportService, DocumentsService } from './candidate.service';
import { CreateCandidateDto, UpdateCandidateDto } from './dto/candidate.dto';
import { CreateDocumentsDto, UpdateDocumentsDto } from './dto/documents.dto';
import { CreateInterviewReportDto, UpdateInterviewReportDto } from './dto/interviewReport.dto';

@Controller('candidate')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly documentsService: DocumentsService,
    private readonly interviewReportService: InterviewReportService
  ) {}

  @Get('test/id/:id')
  test(@Param('id') id: string) {
    return this.interviewReportService.findOneByOwner(id)
  }

  @Post()
  createCandidate(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  @Post('documents')
  createDocuments(@Body() createDocumentsDto: CreateDocumentsDto) {
    return this.documentsService.create(createDocumentsDto);
  }

  @Post('interviewReport')
  createInterviewReport(@Body() createInterviewReportDto: CreateInterviewReportDto) {
    return this.interviewReportService.create(createInterviewReportDto);
  }

  @Get()
  async findAllCandidate() {    
    const candidates = await this.candidateService.findAll();
    return candidates
  }

  @Get('documents')
  async findAllDocuments(){
    return this.documentsService.findAll()
  }

  @Get('interviewReport')
  async findAllInterviewReport(){
    return this.interviewReportService.findAll()
  }

  @Get('id/:id')
  async findOne(@Param('id') id: string) {
    const candidate = await this.candidateService.findOneById(id);
    const Documents = await this.documentsService.findOneByOwner(id);
    const interviewReport = await this.interviewReportService.findOneByOwner(id);
    return {Documents, candidate, interviewReport}
  }

  @Patch('id/:id')
  update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidateService.update(id, updateCandidateDto);
  }

  @Patch('documents/id/:id')
  updateDocuments(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentsDto) {
    return this.documentsService.update(id, updateDocumentDto);
  }

  @Patch('interviewReport/id/:id')
  updateInterviewReport(@Param('id') id: string, @Body() updateInterviewReportDto: UpdateInterviewReportDto) {
    return this.interviewReportService.update(id, updateInterviewReportDto);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(id);
  }

  @Patch('restore/id/:id')
  restore(@Param('id') id: string) {
    return this.candidateService.restore(id);
  }

  @Delete('documents/id/:id')
  removeDocument(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }

  @Delete('interviewReport/id/:id')
  removeInterviewReport(@Param('id') id: string) {
    return this.interviewReportService.remove(id);
  }

}

