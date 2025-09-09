import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PositionModule } from './position/position.module';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [
        TypeOrmModule.forRoot({
          type: 'mongodb',
          host: 'localhost',
          port: 27017,
          username: '',
          password: '',
          database: 'TheRoomtaurantDB',
          autoLoadEntities: true
        }),
        ConfigModule.forRoot({
            isGlobal: true
        }),
    AccountModule, AuthModule, EmployeeModule, DepartmentModule, AttendanceModule, PositionModule, CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}



