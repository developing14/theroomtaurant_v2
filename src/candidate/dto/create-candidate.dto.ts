import { IsDate, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from "typeorm";

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
    candidate: ObjectId

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

export class CreateDocumentsDto {
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
    candidate: ObjectId
}

export class CreateInterviewReportDto {
    @IsMongoId()
    @IsNotEmpty()
    interviewer: ObjectId

    @IsMongoId()
    @IsNotEmpty()
    interviewee: ObjectId

    @IsString()
    @IsNotEmpty()
    location: string   

    @IsDate()
    @IsNotEmpty()
    date: Date  

    @IsString()
    @IsNotEmpty()
    content: string

    @IsString()
    @IsNotEmpty()
    feedback: string
}   
