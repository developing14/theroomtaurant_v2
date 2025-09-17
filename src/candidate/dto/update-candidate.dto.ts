import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateDto, CreateDocumentsDto, CreateQualificationDto } from './create-candidate.dto';
import { IsDate, IsMongoId, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'typeorm';

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
        candidate: ObjectId
    
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
export class UpdateDocumentsDto extends PartialType(CreateDocumentsDto) {
        
        @IsOptional()
        candidate: ObjectId
    
        @IsString()
        @IsOptional()
        cv: string    
        
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
