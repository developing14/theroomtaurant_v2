import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountModule } from 'src/account/account.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    AccountModule, 
    JwtModule.register({
      global: true,
      secret: process.env.MYSECRET,
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService]
})
export class AuthModule {}
