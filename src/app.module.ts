import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { TypeOrmModule } from '@nestjs/typeorm'

import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        username: '', 
        password: '', 
        database: 'TheRoomtaurantDB',
        autoLoadEntities: true,
      }), ConfigModule.forRoot({
            isGlobal: true, 
        }),AccountModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
