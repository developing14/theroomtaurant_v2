import { Controller, Get, Inject, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import {Request, Response} from 'express'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor (@Inject() private readonly authService:AuthService){}

    @Get()
    async login(@Req() req:Request, @Res() res:Response){
        const loginName = req.body?.loginName
        const password = req.body?.password
        if (!loginName || !password) throw new UnauthorizedException('Missing loginname or password')
        
        const accessToken = await this.authService.authenticate(loginName, password)
        res.cookie('accessToken', accessToken)

        return res.send('true')
    }

    @Get('test')
    @UseGuards(AuthGuard)
    test(@Req() req:Request){
        return 'true'
    }
}

