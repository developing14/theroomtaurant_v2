import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
    email: string

    @IsString()
    @IsNotEmpty()
    address: string
    
    @IsString()
    @IsNotEmpty()
    identityNumber: string

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}

export class UpdateCandidateDto extends PartialType(CreateCandidateDto) {
    @IsString()
    @IsOptional()
    name: string
    
    @IsDate()
    @IsOptional()
    birth: Date
    
    @IsString()
    @IsOptional()
    phone: string
    
    @IsString()
    @IsOptional()
    address: string
    
    @IsString()
    @IsOptional()
    identityNumber: string

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}

