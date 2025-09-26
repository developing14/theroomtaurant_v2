import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { ObjectId } from "mongodb"

export class CreateAssignmentDto{
    
    @IsDate()
    @IsOptional()
    startDate: Date 

    @IsDate()
    @IsOptional()
    endDate: Date
    
    @IsMongoId()
    @IsNotEmpty()
    position: ObjectId
    
    @IsMongoId()
    @IsOptional()
    employee:ObjectId

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}

export class UpdateAssignmentDto extends CreateAssignmentDto{}