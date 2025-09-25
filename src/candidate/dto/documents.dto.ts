import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'typeorm';



export class CreateDocumentsDto {
    @IsString()
    @IsNotEmpty()
    cv: string    
    
    @IsString()
    @IsNotEmpty()
    socialInsurance: string    
    
    @IsString()
    @IsNotEmpty()
    HealthChecking: string    
    
    @IsString()
    @IsNotEmpty()
    HoKhau: string

    @IsDate()
    @IsNotEmpty()
    appliedDay: Date
    
    @IsNotEmpty()
    candidate: ObjectId

    @IsDate()
    @IsOptional()
    lastUpdate: Date
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

        @IsDate()
        @IsOptional()
        lastUpdate: Date
}


