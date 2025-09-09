import { Column, Entity, JoinColumn, ObjectId, ObjectIdColumn, OneToMany, OneToOne } from "typeorm"
import { Account } from "src/account/entities/account.entity"
import { Position } from "src/position/entities/position.entity"
import { Attendance } from "src/attendance/entities/attendance.entity"

@Entity()
export class Employee {
    constructor(payload?:Employee){
        if(payload){
            this.name = payload.name
            this.birth = payload.birth
            this.phone = payload.phone
            this.email= payload.email
            this.address= payload.address
            this.isDeleted = false
        }
    }
        @ObjectIdColumn()
        _id:ObjectId
        
        @Column()
        name: string

        @Column()
        birth:Date
        
        @Column()
        phone: string
        
        @Column()
        email:string
        
        @Column()
        address:string

        @Column()
        taxCode: string

        @Column()
        insuranceCode: string

        @Column()
        contract: string
        
        @Column()
        isDeleted: boolean

        @OneToOne(()=> Account)
        @JoinColumn()
        account:Account

        @OneToMany(()=>Position, (position)=>position.employee )
        position: Position[]

        @OneToMany(()=>Attendance, (attendance)=> attendance.employee)
        attendance: Attendance[]
}
