import {IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDepartmentDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}
