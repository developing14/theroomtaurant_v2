import { Injectable } from '@nestjs/common';

import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCandidateDto, UpdateCandidateDto} from './dto/candidate.dto';
import { CreateDocumentsDto, UpdateDocumentsDto } from './dto/documents.dto';
import { CreateInterviewReportDto, UpdateInterviewReportDto } from './dto/interviewReport.dto';

import { Candidate } from './schema/candidate.schema';
import { Documents } from './schema/documents.schema';
import { InterviewReport } from './schema/interviewReport.schema';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel('Candidate') private readonly CandidateModel:Model<Candidate>){}
  
  create(createCandidateDto: CreateCandidateDto) {
    const candidate = new this.CandidateModel(createCandidateDto)
    return candidate.save()
  }

  findAll() {
    return this.CandidateModel.find();
  }  

  findOneById(id: string) {
    return this.CandidateModel.findById(id);
  }

  update(id: string, updateCandidateDto: UpdateCandidateDto) {
    updateCandidateDto.lastUpdate = new Date();
    return this.CandidateModel.updateOne(
      {_id: id},
      updateCandidateDto
    );
  }

  remove(id: string) {
    return this.CandidateModel.updateOne(
      {_id: id},
      {isDeletedd: true,
      lastUpdate: new Date()
      }
    );
  }
  
  restore(id: string){
    return this.CandidateModel.updateOne(
      {_id: id},
      {isDeletedd: false,
      lastUpdate: new Date()
      }
    );    
  } 
  
}

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel('Documents') private readonly DocumentsModel:Model<Documents>,
  ){} 

  create(createDocumentsDto: CreateDocumentsDto) {
    const documents = new this.DocumentsModel(createDocumentsDto)
    documents.lastUpdate = new Date();
    return documents.save();
  }

  findAll() {
    return this.DocumentsModel.find();
  }

  findOneById(id: string){
    return this.DocumentsModel.findById(id)
  }
  
  findOneByCandidate(candidateId: string){
    return this.DocumentsModel.findOne({candidate: candidateId})
  }

  update(id: string, updateDocumentsDto: UpdateDocumentsDto) {
    updateDocumentsDto.lastUpdate = new Date();
    return this.DocumentsModel.updateOne(
      {_id: id},
      updateDocumentsDto
    );
  }

  remove(id: string){
    return this.DocumentsModel.deleteOne({_id: id})
  }
}

@Injectable()
export class InterviewReportService {
  constructor(
    @InjectModel('InterviewReport') private readonly InterviewReportModel: Model<InterviewReport>){}

  create(interviewReportDto: CreateInterviewReportDto) {
    const report = new this.InterviewReportModel(interviewReportDto)
    report.lastUpdate = new Date();
    return report.save();
  }
  findAll() {
    return this.InterviewReportModel.find();
  }
  
  findOneById(id: string){
    return this.InterviewReportModel.findById(id)
  }

  findOneByCandidate(candidateId: string){
    return this.InterviewReportModel.findOne({interviewee: candidateId})
  }

  update(id: string, updateInterviewReportDto: UpdateInterviewReportDto) {
    updateInterviewReportDto.lastUpdate = new Date();
    return this.InterviewReportModel.updateOne(
      {_id: id},
      updateInterviewReportDto
    );
  }

  remove(id: string){
    return this.InterviewReportModel.deleteOne({_id: id})
  }
  
}
