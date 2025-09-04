import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Department {
    constructor (payload?:Department){
        if (payload){
            this.name = payload.name
            this.isDeleted = payload.isDeleted
        }
    }

    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    name:string

    @Column()
    isDeleted: boolean
}
