import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ObjectId} from 'mongodb'

import * as bcrypt from 'bcrypt'

import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly AccountRepository:Repository<Account>
  ){}
  
  create(createAccountDto: CreateAccountDto) {    
    createAccountDto.password = bcrypt.hashSync(createAccountDto.password, 10)
    return this.AccountRepository.save(createAccountDto);
  }

  findAll() {
    return this.AccountRepository.find();
  }

  findOne(id: string) {
    return this.AccountRepository.findOneBy({_id: new ObjectId(id)});
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.AccountRepository.update({_id: new ObjectId(id)}, updateAccountDto);
  }

  remove(id: string) {
    return this.AccountRepository.update({_id: new ObjectId(id)}, {isDeleted: true});
  }
  
  restore(id: string){
    return this.AccountRepository.update({_id: new ObjectId(id)}, {isDeleted: false});
  }
  
}
