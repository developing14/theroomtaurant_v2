import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Candidate } from './entities/candidate.entity';
import { Qualification } from './entities/qualification.entity';
import {Document} from './entities/document'

@Module({
  imports: [TypeOrmModule.forFeature([Candidate, Document, Qualification])],
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class CandidateModule {}
