import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCandidateDto, CreateDocumentsDto as CreateDocumentsDto, CreateInterviewReportDto, CreateQualificationDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto, UpdateDocumentsDto as UpdateDocumentsDto, UpdateQualificationDto } from './dto/update-candidate.dto';

import { Candidate } from './entities/candidate.entity';
import { Qualification } from './entities/qualification.entity';
import { Documents } from './entities/documents.entity'
import { ObjectId } from 'mongodb';
import { InterviewReport } from './entities/interviewReport.entity';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate) private readonly CandidateRepo:Repository<Candidate>,
    @InjectRepository(Qualification) private readonly QualificationRepo:Repository<Qualification>,
    @InjectRepository(Documents) private readonly DocumentsRepo:Repository<Documents>,
    @InjectRepository(InterviewReport) private readonly InterviewReportRepo:Repository<InterviewReport>
  ){}
  
  createCandidate(createCandidateDto: CreateCandidateDto) {
    const candidate = this.CandidateRepo.create(createCandidateDto)
    return this.CandidateRepo.save(candidate);
  }

  createQualification(createqualificationDto: CreateQualificationDto) {
    const qualification = this.QualificationRepo.create(createqualificationDto)
    return this.QualificationRepo.save(qualification);
  }

  createDocuments(createDocumentsDto: CreateDocumentsDto) {
    const Documents = this.DocumentsRepo.create(createDocumentsDto)
    return this.DocumentsRepo.save(Documents);
  }

  createInterviewReport(interviewReportDto: CreateInterviewReportDto) {
    const report = this.InterviewReportRepo.create(interviewReportDto)
    return this.InterviewReportRepo.save(report);
  }

  findAllCandidate() {
    return this.CandidateRepo.find();
  }

  findAllQualification() {
    return this.QualificationRepo.find();
  }

  findAllDocuments() {
    return this.DocumentsRepo.find();
  }

  findAllInterviewReports() {
    return this.InterviewReportRepo.find();
  }

  findCandidateById(id: string) {
    return this.CandidateRepo.findOneBy({_id: new ObjectId(id)});
  }

  findQualificationByCandidate(candidateId: string){
    return this.QualificationRepo.findOneBy({candidate: new ObjectId(candidateId)})
  }

  findDocumentsByCandidate(candidateId: string){
    return this.DocumentsRepo.findOneBy({candidate: new ObjectId(candidateId)})
  }

  findInterviewReportsByCandidate(candidateId: string){
    return this.InterviewReportRepo.findOneBy({interviewee: new ObjectId(candidateId)})
  }

  updateCandidate(id: string, updateCandidateDto: UpdateCandidateDto) {
    return this.CandidateRepo.update(
      {_id: new ObjectId(id)},
      updateCandidateDto
    );
  }

  updateQualification(candidateId: string, updateQualificationDto: UpdateQualificationDto) {
    return this.QualificationRepo.update(
      {candidate: new ObjectId(candidateId)},
      updateQualificationDto
    );
  }

  updateDocuments(candidateId: string, updateDocumentsDto: UpdateDocumentsDto) {
    return this.DocumentsRepo.update(
      {candidate: new ObjectId(candidateId)},
      updateDocumentsDto
    );
  }

  updateInterviewReport(interviewReportId: string, updateInterviewReportDto: CreateInterviewReportDto) {
    return this.InterviewReportRepo.update(
      {_id: new ObjectId(interviewReportId)},
      updateInterviewReportDto
    );
  }

  removeCandidate(id: string) {
    return this.CandidateRepo.update(
      {_id: new ObjectId(id)},
      {isDeleted: true}
    );
  }
  
  restoreCandidate(id: string){
    return this.CandidateRepo.update(
      {_id: new ObjectId(id)},
      {isDeleted: false}
    );    
  }

  removeQualification(candidateId: string){
    return this.QualificationRepo.delete({candidate: new ObjectId(candidateId)})
  }

  removeDocuments(candidateId: string){
    return this.DocumentsRepo.delete({candidate: new ObjectId(candidateId)})
  }

  removeInterviewReport(interviewee: string){
    return this.InterviewReportRepo.delete({interviewee: new ObjectId(interviewee)})
  }
}
