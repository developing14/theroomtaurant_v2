import { IsDate, IsNumber, IsOptional, IsString } from "class-validator"
import { Employee } from "src/employee/schema/employee.schema"

export class UpdatePositionDto{
    @IsString()
    @IsOptional()
    name: string
    
    @IsString()
    @IsOptional()
    jobType: string
    
    @IsNumber()
    @IsOptional()
    salaryLevel:number
    
    @IsDate()
    @IsOptional()
    ClaimTime:Date
    
    @IsDate()
    @IsOptional()
    LeaveTime:Date
    
    @IsString()
    @IsOptional()
    employee:Employee
    
    @IsDate()
    @IsOptional()
    lastUpdate: Date


}