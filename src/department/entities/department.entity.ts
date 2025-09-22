import { Position } from "src/position/entities/position.entity";
import { Column, Entity, ObjectId, ObjectIdColumn, OneToMany } from "typeorm";

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

    @OneToMany(()=> Position, (positions)=> positions)
    positions:ObjectId[]
}
