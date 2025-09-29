import { Module } from '@nestjs/common';
import { CandidateService, DocumentsService, InterviewReportService } from './candidate.service';
import { CandidateController, CandidateDocumentsController, InterviewReportController } from './candidate.controller';


import { Candidate, CandidateSchema } from './schema/candidate.schema';
import { Documents, Documentsschema } from './schema/documents.schema'
import { InterviewReport, InterviewReportSchema } from './schema/interviewReport.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Candidate.name, schema: CandidateSchema },
    { name: Documents.name, schema: Documentsschema },
    { name: InterviewReport.name, schema: InterviewReportSchema }
  ])],
  controllers: [CandidateController, CandidateDocumentsController, InterviewReportController],
  providers: [CandidateService, DocumentsService, InterviewReportService],
})
export class CandidateModule {}
