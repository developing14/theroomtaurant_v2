import { PartialType } from "@nestjs/mapped-types"
import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { ObjectId } from "typeorm"

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
    @IsOptional()
    feedback: string

    @IsNumber()
    @IsOptional()
    rating: number

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}   

export class UpdateInterviewReportDto extends PartialType(CreateInterviewReportDto) {
    @IsMongoId()
    @IsOptional()
    interviewer: ObjectId   
    
    @IsMongoId()
    @IsOptional()
    interviewee: ObjectId

    @IsString()
    @IsOptional()
    location: string

    @IsDate()
    @IsOptional()
    date: Date

    @IsString()
    @IsOptional()
    content: string

    @IsString()
    @IsOptional()
    feedback: string

    @IsOptional()
    rating: number
    
    @IsDate()
    @IsOptional()
    lastUpdate: Date
}