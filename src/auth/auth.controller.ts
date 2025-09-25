import { BadRequestException, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express'
import { AuthService } from './auth.service';
import { AccountService } from 'src/account/account.service';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Controller('auth')
export class AuthController {
    constructor (
    private readonly authService:AuthService,
    private readonly accountService:AccountService){}

    @Post('login')
    async login(@Req() req:Request, @Res() res:Response){
        const loginName = req.body?.loginName
        const password = req.body?.password

        if (!loginName || !password) throw new UnauthorizedException('Missing loginname or password')
        
        const accessToken = await this.authService.authenticate(loginName, password)
        res.cookie('accessToken', accessToken)

        return res.send('Logged in')
    }

    @Get('logout')
    logout(@Res() res:Response){
        res.clearCookie('accessToken')
        return res.send('logged out')
    }

    @Post('signup')
    async signup(@Req() req:Request ){
        
        const newAccount:CreateAccountDto = plainToInstance(CreateAccountDto, req.body)
        
        let error:any = await validate(newAccount)
        if (error.length > 0) throw new BadRequestException('Required field(s) is missing')
        
        error = this.accountService.isExisted(newAccount.loginName)
        error = this.accountService.isExisted(newAccount.email)
        if (error.length > 0) throw new BadRequestException(error)

        return this.accountService.create(newAccount)    
    }
}

