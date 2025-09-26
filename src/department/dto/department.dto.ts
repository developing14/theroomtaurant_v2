import {IsDate, IsNotEmpty, IsOptional, IsString, IsBoolean } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';

export class CreateDepartmentDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsBoolean()
    @IsOptional()
    isDeleted:boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
    @IsString()
    @IsOptional()
    name:string

    @IsBoolean()
    @IsOptional()
    isDeleted:boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}
