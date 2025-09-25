import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePositionDto {
    @IsString()
    @IsNotEmpty()
    name:string
    
    @IsString()
    @IsNotEmpty()
    jobType:string
    
    @IsNumber()
    @IsNotEmpty()
    salaryLevel:number

    @IsDate()
    @IsOptional()
    lastUpdate: Date
    
}