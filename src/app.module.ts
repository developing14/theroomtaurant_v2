import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule, ConfigService } from '@nestjs/config'

import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PositionModule } from './position/position.module';
import { CandidateModule } from './candidate/candidate.module';

import databaseConfig from './config/database.config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
        isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
        dbName: configService.get<string>('DATABASE_NAME')
      }),
    }),
    AccountModule, AuthModule, EmployeeModule, DepartmentModule, AttendanceModule, PositionModule, CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}



