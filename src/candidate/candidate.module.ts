import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Candidate } from './entities/candidate.entity';
import { Qualification } from './entities/qualification.entity';
import {Documents} from './entities/documents.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Candidate, Documents, Qualification])],
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class CandidateModule {}
