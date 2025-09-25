import { IsDate, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsDate()
    @IsNotEmpty()
    birth: Date
    
    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    email:string
    
    @IsString()
    @IsNotEmpty()
    address:string

    @IsString()
    @IsNotEmpty()
    taxCode: string

    @IsDate()
    @IsOptional()
    lastUpdate: Date

}
