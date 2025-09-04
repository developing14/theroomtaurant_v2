import { IsDate, IsNotEmpty, IsPhoneNumber, IsString, MaxLength } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsDate()
    @IsNotEmpty()
    birth: Date
    
    @IsPhoneNumber()
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

}
