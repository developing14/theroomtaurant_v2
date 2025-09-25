import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsDate, IsOptional, IsPhoneNumber, IsString, MaxLength } from 'class-validator';

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
    
    @IsDate()
    @IsOptional()
    lastUpdate: Date 
    
}