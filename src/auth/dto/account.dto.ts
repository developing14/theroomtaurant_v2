import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAccountDto {
    @IsString()
    @IsNotEmpty()
    loginName: string
    
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsBoolean()
    @IsOptional()
    isDeletedd: boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}

