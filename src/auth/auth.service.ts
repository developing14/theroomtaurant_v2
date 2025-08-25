import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

@Injectable()
export class AuthService {    
    constructor(
        private readonly accountService: AccountService,
        private readonly JwtService:JwtService,
        private readonly ConfigService:ConfigService,
    ) {}

    async authenticate(loginName:string, password:string){
        const target = await this.accountService.findOneByLoginName(loginName)

        if (!target) throw new NotFoundException('Account not found')
        
        const isMatched = bcrypt.compareSync(password, target.password)
        if (!isMatched) throw new UnauthorizedException('Wrong password')

        const isDeleted = target.isDeleted
        if (isDeleted) throw new ForbiddenException('Account is not activated')

        const payload = { sub: target._id, loginName: target.loginName };

        return {
              accessToken: await this.JwtService.signAsync(payload, {secret: 'mysecret'}),
        }
    }

    async verifyToken(token:any){
        const verified = this.JwtService.verifyAsync(token, {secret: 'mysecret'})
        if (!verified) throw new UnauthorizedException('Token is not accepted')

        return verified
    }

}