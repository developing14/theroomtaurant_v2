import { PartialType } from "@nestjs/mapped-types"
import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { ObjectId } from "mongodb"

export class CreateAttendanceDto {

    @IsString()
    @IsNotEmpty()
    workType:string

    @IsDate()
    @IsOptional()
    timeIn:Date

    @IsDate()
    @IsOptional()
    timeOut:Date

    @IsNumber()
    @IsOptional()
    shiftLength: number

    @IsMongoId()
    @IsNotEmpty()
    employee:ObjectId

    @IsDate()
    @IsOptional()
    lastUpdate: Date    
}


export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto){
    
    @IsString()
    @IsOptional()
    workType:string

    @IsDate()
    @IsOptional()
    timeIn:Date

    @IsDate()
    @IsOptional()
    timeOut:Date

    @IsNumber()
    @IsOptional()
    shiftLength: number

    @IsMongoId()
    @IsOptional()
    employee:ObjectId

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}