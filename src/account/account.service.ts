import { Injectable} from '@nestjs/common';
import { CreateAccountDto, UpdateAccountDto } from './dto/account.dto';

import { ObjectId } from 'mongodb'

import * as bcrypt from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountSchema } from './schema/account.schema';


@Injectable()
export class AccountService {

  constructor(@InjectModel('Account') private readonly accountModel:Model<Account>) {}  

  create(createAccountDto: CreateAccountDto) {    
    const created = new this.accountModel(createAccountDto);
    created.password = bcrypt.hashSync(createAccountDto.password, 10)
    return created.save();
  }

  findAll() {
    return this.accountModel.find();
  }

  findOneById(id: string) {
    return this.accountModel.findById(id);
  }

  findOneByLoginName(loginName: string) {
    return this.accountModel.findOne({loginName:loginName});
  }

  findOneByEmail(email: string) {
    return this.accountModel.findOne({email: email});
  }

  async isExisted(identifier:any):Promise<null | string>{
    if (await this.findOneByLoginName(identifier)) return 'Login Name is used'
    if (await this.findOneByEmail(identifier)) return 'Email is used'
      
    return null
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountModel.updateOne({_id: new ObjectId(id)}, updateAccountDto);
  }

  remove(id: string) {
    return this.accountModel.updateOne({_id: new ObjectId(id)}, {isDeletedd: true});
  }
  
  restore(id: string){
    return this.accountModel.updateOne({_id: new ObjectId(id)}, {isDeletedd: false});
  }
  
}
