import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsDate, IsMongoId, IsNotEmpty, IsOptional } from "class-validator";
import { ObjectId } from "mongodb";

export class CreatePayrollDto {
    @IsMongoId()
    @IsNotEmpty()
    emloyeeDoc: ObjectId
    
    @IsMongoId()
    @IsNotEmpty()
    position: ObjectId
    
    @IsBoolean()
    @IsOptional()
    isDeleted: boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date

}

export class UpdatePayrollDto extends PartialType(CreatePayrollDto) {
    
    @IsMongoId()
    @IsOptional()
    emloyeeDoc: ObjectId

    @IsMongoId()
    @IsOptional()
    position: ObjectId

    @IsBoolean()
    @IsOptional()
    isDeleted: boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date

}

