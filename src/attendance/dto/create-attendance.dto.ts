import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateAttendanceDto {
    @IsDate()
    @IsNotEmpty()
    assignedTimeIn: Date
    
    @IsDate()
    @IsNotEmpty()
    assignedTimeOut: Date

    @IsString()
    @IsNotEmpty()
    shiftType:string

    @IsDate()
    @IsOptional()
    lastUpdate: Date    
}