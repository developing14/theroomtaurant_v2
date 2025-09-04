import { IsNotEmpty, IsString } from "class-validator"

export class CreateAttendanceDto {
    @IsString()
    @IsNotEmpty()
    assignedTimeIn: Date
    
    @IsString()
    @IsNotEmpty()
    assignedTimeOut: Date

    @IsString()
    @IsNotEmpty()
    shiftType:string
    
}