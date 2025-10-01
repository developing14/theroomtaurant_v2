import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'

import { ConfigModule, ConfigService } from '@nestjs/config'

import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PositionModule } from './position/position.module';
import { CandidateModule } from './candidate/candidate.module';
import { PayrollModule } from './payroll/payroll.module';


@Module({
  imports: [
    ConfigModule.forRoot({
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
    AccountModule, AuthModule, EmployeeModule, DepartmentModule, AttendanceModule, PositionModule, CandidateModule, PayrollModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}



