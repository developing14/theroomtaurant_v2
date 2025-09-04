import { PartialType } from "@nestjs/mapped-types";
import { CreateAttendanceDto } from "./create-attendance.dto";
import { IsDate, IsOptional, IsString } from "class-validator";
import { Employee } from "src/employee/entities/employee.entity";

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
    employee:Employee
}