import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsMongoId, IsNotEmpty, IsOptional } from "class-validator";
import { ObjectId } from "mongodb";

export class CreateOnboardingDto {
    @IsDate()
    @IsNotEmpty()
    startTime: Date
    
    @IsDate()
    @IsOptional()
    endTime: Date

    @IsMongoId()
    @IsNotEmpty()
    trainer: ObjectId
    
    @IsMongoId()
    @IsNotEmpty()
    trainee: ObjectId

    @IsDate()
    @IsOptional()
    lastUpdate: Date

}

export class UpdateOnboardingDto extends PartialType(CreateOnboardingDto) {
    @IsDate()
    @IsOptional()
    startTime: Date

    @IsMongoId()
    @IsOptional()
    trainer: ObjectId
    
    @IsMongoId()
    @IsOptional()
    trainee: ObjectId

}