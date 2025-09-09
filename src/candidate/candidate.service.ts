import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCandidateDto, CreateDocumentDto, CreateQualificationDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto, UpdateDocumentDto, UpdateQualificationDto } from './dto/update-candidate.dto';

import { Candidate } from './entities/candidate.entity';
import { Qualification } from './entities/qualification.entity';
import { Document } from './entities/document'
import { ObjectId } from 'mongodb';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate) private readonly CandidateRepo:Repository<Candidate>,
    @InjectRepository(Qualification) private readonly QualificationRepo:Repository<Qualification>,
    @InjectRepository(Document) private readonly DocumentRepo:Repository<Document>
  ){}
  
  createCandidate(createCandidateDto: CreateCandidateDto) {
    const candidate = this.CandidateRepo.create(createCandidateDto)
    return this.CandidateRepo.save(candidate);
  }

  createQualification(createqualificationDto: CreateQualificationDto) {
    const qualification = this.QualificationRepo.create(createqualificationDto)
    return this.QualificationRepo.save(qualification);
  }

  createDocument(createDocumentDto: CreateDocumentDto) {
    const document = this.DocumentRepo.create(createDocumentDto)
    return this.DocumentRepo.save(document);
  }

  findAllCandidate() {
    return this.CandidateRepo.find();
  }

  findAllQualification() {
    return this.QualificationRepo.find();
  }

  findAllDocument() {
    return this.DocumentRepo.find();
  }

  findCandidateById(id: string) {
    return this.CandidateRepo.findOneBy({_id: new ObjectId(id)});
  }

  findQualificationByCandidate(candidateId: string){
    return this.QualificationRepo.findOneBy({candidate: new ObjectId(candidateId)})
  }

  findDocumentByCandidate(candidateId: string){
    return this.DocumentRepo.findOneBy({candidate: new ObjectId(candidateId)})
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

  updateDocument(candidateId: string, updateDocumentDto: UpdateDocumentDto) {
    return this.DocumentRepo.update(
      {candidate: new ObjectId(candidateId)},
      updateDocumentDto
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

  removeDocument(candidateId: string){
    return this.DocumentRepo.delete({candidate: new ObjectId(candidateId)})
  }
}
