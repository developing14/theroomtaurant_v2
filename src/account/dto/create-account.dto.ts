import { IsNotEmpty, IsString } from "class-validator";

export class CreateAccountDto {
    @IsString()
    @IsNotEmpty()
    loginName: string
    
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

}
