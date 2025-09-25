import { PartialType } from "@nestjs/mapped-types";
import { CreateAttendanceDto } from "./create-attendance.dto";
import { IsDate, IsOptional, IsString } from "class-validator";
import { Employee } from "src/employee/schema/employee.schema";
import { ObjectId } from "typeorm";

export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto){

    @IsDate()
    @IsOptional()
    assignedTimeIn: Date
    
    @IsDate()
    @IsOptional()
    assignedTimeOut: Date
    
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