import { IsBoolean, IsDate, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { ObjectId } from "mongodb";

export class CreateEmployeeDto {
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
    email:string
    
    @IsString()
    @IsNotEmpty()
    address:string

    @IsMongoId()
    @IsOptional()
    account:ObjectId

    @IsBoolean()
    @IsOptional()
    isDeleted: boolean

    @IsDate()
    @IsOptional()
    leaveDate: Date

    @IsDate()
    @IsOptional()
    lastUpdate: Date

}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    @IsString()
    @IsOptional()
    name: string

    @IsDate()
    @IsOptional()
    birth:Date
    
    @IsString()
    @IsOptional()
    phone: string

    @IsString()
    @IsOptional()
    email:string
    
    @IsString()
    @IsOptional()
    address:string

    @IsMongoId()
    @IsOptional()
    account:ObjectId
    
    @IsBoolean()
    @IsOptional()
    isDeleted: boolean

    @IsDate()
    @IsOptional()
    leaveDate: Date
    
    @IsDate()
    @IsOptional()
    lastUpdate: Date 
    
}