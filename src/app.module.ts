import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { TypeOrmModule } from '@nestjs/typeorm'

import { AccountModule } from './account/account.module'

@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        username: '', 
        password: '', 
        database: 'TheRoomtaurantDB',
        autoLoadEntities: true,
      }), AccountModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
