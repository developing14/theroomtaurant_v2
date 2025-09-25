import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
    @IsString()
    @IsOptional()
    name:string

    @IsBoolean()
    @IsOptional()
    isDeleted:boolean

    @IsDate()
    @IsOptional()
    lastUpdate: Date
}
