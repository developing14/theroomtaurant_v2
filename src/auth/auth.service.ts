import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {    
    constructor(
        private readonly accountService: AccountService,
        private readonly JwtService:JwtService,
        private readonly ConfigService:ConfigService,
    ) {}

    // Login
    async authenticate(loginName:string, password:string){
        const target = await this.accountService.findOneByLoginName(loginName)

        if (!target) throw new NotFoundException('Account not found')
        
        const isMatched = bcrypt.compareSync(password, target.password)
        if (!isMatched) throw new UnauthorizedException('Wrong password')

        const isDeleted = target.isDeleted
        
        if (isDeleted) throw new ForbiddenException('Account is not activated')

        const payload = { sub: target._id, loginName: target.loginName };

        return this.JwtService.signAsync(payload, {secret: this.ConfigService.get<string>('MYSECRET')})
    }

    async verifyToken(token:any){
        const verified = this.JwtService.verifyAsync(token, {secret: this.ConfigService.get<string>('MYSECRET')})
        if (!verified) throw new UnauthorizedException('Token is not accepted')

        return verified
    }

    //Sign up
    async signup(payload:any){
        const loginName = payload.loginName
        const email = payload.email

        this.accountService.isExisted(loginName)
        this.accountService.isExisted(email)

        this.accountService.create(payload)
    }

}