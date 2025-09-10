import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PositionModule } from './position/position.module';
import { CandidateModule } from './candidate/candidate.module';

import databaseConfig from './config/database.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
        isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mongodb',
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        username: config.get<string>('database.username'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.database'),
        autoLoadEntities: true
      }),
    }),
    AccountModule, AuthModule, EmployeeModule, DepartmentModule, AttendanceModule, PositionModule, CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}



