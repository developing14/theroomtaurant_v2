import { PartialType } from "@nestjs/mapped-types"
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { ObjectId } from "mongodb"

export class CreateAttendanceDto {

    @IsString()
    @IsNotEmpty()
    workType:string

    @IsDate()
    @IsOptional()
    lastUpdate: Date    
}


export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto){
    
    @IsString()
    @IsOptional()
    shiftType:string

    @IsDate()
    @IsOptional()
    timeIn:Date

    @IsDate()
    @IsOptional()
    timeOut:Date

    @IsOptional()
    employee:ObjectId

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}