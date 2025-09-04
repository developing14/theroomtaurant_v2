import { IsDate, IsOptional, IsString } from "class-validator"
import { Employee } from "src/employee/entities/employee.entity"

export class UpdatePositionDto{
    @IsString()
    @IsOptional()
    name: string
    
    @IsString()
    @IsOptional()
    jobType:string
    
    @IsDate()
    @IsOptional()
    ClaimTime:Date
    
    @IsDate()
    @IsOptional()
    LeaveTime:Date
    
    @IsString()
    @IsOptional()
    employee:Employee

}