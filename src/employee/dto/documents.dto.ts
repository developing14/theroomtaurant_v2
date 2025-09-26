import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsMongoId, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateDocumentsDto {
    @IsString()
    @IsNotEmpty()
    cv: string
    
    @IsString()
    @IsNotEmpty()
    HealthChecking: string
    
    @IsDate()
    @IsNotEmpty()
    appliedDay: Date

    @IsString()
    @IsNotEmpty()
    taxCode: string

    @IsString()
    @IsNotEmpty()
    insuranceCode: string

    @IsString()
    @IsNotEmpty()
    contract: string

    @IsDate()
    @IsOptional()
    leaveTime: Date
    
    @IsMongoId()
    @IsNotEmpty()
    employee: ObjectId
    
    @IsDate()
    @IsOptional()
    lastUpdate: Date

}

export class UpdateDocumentsDto extends PartialType(CreateDocumentsDto) {
    @IsString()
    @IsOptional()
    cv: string
    
    @IsString()
    @IsOptional()
    HealthChecking: string
    
    @IsDate()
    @IsOptional()
    appliedDay: Date

    @IsString()
    @IsOptional()
    taxCode: string

    @IsString()
    @IsOptional()
    insuranceCode: string

    @IsString()
    @IsOptional()
    contract: string

    @IsDate()
    @IsOptional()
    leaveTime: Date
    
    @IsMongoId()
    @IsOptional()
    employee: ObjectId

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}