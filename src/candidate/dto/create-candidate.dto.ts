import { IsDate, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from "typeorm";
import { Candidate } from "../entities/candidate.entity";

export class CreateCandidateDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsDate()
    @IsNotEmpty()
    birth: Date
    
    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    address: string
    
    @IsString()
    @IsNotEmpty()
    identityCard: string
}

export class CreateQualificationDto {

    @IsNotEmpty()
    candidate: Candidate

    @IsString()
    @IsNotEmpty()
    qualification: string

    @IsString()
    @IsNotEmpty()
    workExperience: string
    
    @IsDate()
    @IsNotEmpty()
    applyDay: Date

    @IsMongoId()
    @IsNotEmpty()
    applyPosition: ObjectId

}

export class CreateDocumentDto {
    @IsString()
    @IsNotEmpty()
    cv: string    
    
    @IsString()
    @IsNotEmpty()
    socialInsurance: string    
    
    @IsString()
    @IsNotEmpty()
    HealthCare: string    
    
    @IsString()
    @IsNotEmpty()
    HoKhau: string
    
    @IsNotEmpty()
    candidate: Candidate
}
