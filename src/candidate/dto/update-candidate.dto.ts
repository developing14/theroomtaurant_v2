import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateDto, CreateDocumentDto, CreateQualificationDto } from './create-candidate.dto';
import { IsDate, IsMongoId, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'typeorm';
import { Candidate } from '../entities/candidate.entity';

export class UpdateCandidateDto extends PartialType(CreateCandidateDto) {
        @IsString()
        @IsOptional()
        name: string
    
        @IsDate()
        @IsOptional()
        birth: Date
        
        @IsString()
        @IsOptional()
        phone: string
    
        @IsString()
        @IsOptional()
        address: string
        
        @IsString()
        @IsOptional()
        identityCard: string
}
export class UpdateQualificationDto extends PartialType(CreateQualificationDto) {
    candidate: Candidate
    
        @IsString()
        @IsOptional()
        qualification: string
    
        @IsString()
        @IsOptional()
        workExperience: string
        
        @IsDate()
        @IsOptional()
        applyDay: Date
    
        @IsMongoId()
        @IsOptional()
        applyPosition: ObjectId
}
export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
        
        @IsOptional()
        candidate: Candidate
    
        @IsString()
        @IsOptional()
        CV: string    
        
        @IsString()
        @IsOptional()
        socialInsurance: string    
        
        @IsString()
        @IsOptional()
        HealthCare: string    
        
        @IsString()
        @IsOptional()
        HoKhau: string
}
