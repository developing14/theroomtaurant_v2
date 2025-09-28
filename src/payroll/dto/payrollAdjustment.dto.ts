import { PartialType } from '@nestjs/mapped-types';
import { ObjectId } from 'mongodb';
import { IsBoolean, IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePayrollAdjustmentDto {
    @IsMongoId()
    @IsNotEmpty()
    payrollId: ObjectId

    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    type: string
    
    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsBoolean()
    @IsOptional()
    isDeleted: boolean
    
    @IsDate()
    @IsOptional()
    lastUpdaTe: Date
}

export class UpdatePayrollAdjustmentDto extends PartialType(CreatePayrollAdjustmentDto){
    @IsMongoId()
    @IsOptional()
    payrollId: ObjectId
    
    @IsString()
    @IsOptional()
    name: string
    
    @IsString()
    @IsOptional()
    type: string
    
    @IsNumber()
    @IsOptional()
    amount: number

    @IsBoolean()
    @IsOptional()
    isDeleted: boolean
    
    @IsDate()
    @IsOptional()
    lastUpdate: Date

}