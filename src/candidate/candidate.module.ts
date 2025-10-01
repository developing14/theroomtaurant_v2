import { Module } from '@nestjs/common';
import { CandidateService, DocumentsService, InterviewReportService, OnboardingService } from './candidate.service';
import { CandidateController, CandidateDocumentsController, InterviewReportController, OnboardingController } from './candidate.controller';


import { Candidate, CandidateSchema } from './schema/candidate.schema';
import { Documents, Documentsschema } from './schema/documents.schema'
import { InterviewReport, InterviewReportSchema } from './schema/interviewReport.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Onboarding, OnboardingSchema } from './schema/onboarding.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Candidate.name, schema: CandidateSchema },
    { name: Documents.name, schema: Documentsschema },
    { name: InterviewReport.name, schema: InterviewReportSchema },
    { name: Onboarding.name, schema: OnboardingSchema },
  ])],
  controllers: [CandidateController, CandidateDocumentsController, InterviewReportController, OnboardingController],
  providers: [CandidateService, DocumentsService, InterviewReportService, OnboardingService],
})
export class CandidateModule {}
