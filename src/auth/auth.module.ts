import { Module } from '@nestjs/common';
import { AccountController, AuthController } from './auth.controller';
import { AccountService, AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schema/account.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Account.name, schema: AccountSchema}
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.MYSECRET,
    })
  ],
  controllers: [AuthController, AccountController],
  providers: [AuthService, JwtService, AccountService]
})
export class AuthModule {}
