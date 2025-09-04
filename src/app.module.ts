import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { TypeOrmModule } from '@nestjs/typeorm'

import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PositionModule } from './position/position.module';

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
        }),AccountModule, AuthModule, EmployeeModule, DepartmentModule, AttendanceModule, PositionModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
