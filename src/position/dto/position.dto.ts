import { IsBoolean, IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ObjectId } from "mongodb";

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

    @IsMongoId()
    @IsNotEmpty()
    department: ObjectId

    @IsBoolean()
    @IsOptional()
    isDelete: boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date
    
}


export class UpdatePositionDto{
    @IsString()
    @IsOptional()
    name: string
    
    @IsString()
    @IsOptional()
    jobType: string
    
    @IsNumber()
    @IsOptional()
    salaryLevel:number

    @IsMongoId()
    @IsOptional()
    department: ObjectId

    @IsBoolean()
    @IsOptional()
    isDelete: boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date

}