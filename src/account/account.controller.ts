import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto, UpdateAccountDto } from './dto/account.dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';


@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly configService: ConfigService) {}

  @Post()
  async create(@Body(ValidationPipe) createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.accountService.findOneById(id);
  }

  @Patch('id/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(id, updateAccountDto);
  }

  @Delete('id/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.accountService.remove(id);
  }

  @Patch('id/:id/restore')
  restore(@Param('id', ParseObjectIdPipe) id:string){
    return this.accountService.restore(id)
  }
}
