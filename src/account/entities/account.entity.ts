import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Account {

    constructor(account?: Account){
         if (account){
            this.loginName = account.loginName
            this.email = account.email
            this.password = account.password
            this.isDeleted = false
            this.lastUpdate = new Date()
            }

    }

    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    loginName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    isDeleted: boolean

    @Column()
    lastUpdate: Date
}
