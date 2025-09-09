import { Qualification } from "src/candidate/entities/qualification.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn, OneToMany } from "typeorm";

@Entity()
export class Position {

    constructor(payload?:Position){
        if (payload){
            this.name = payload.name
            this.jobType = payload.jobType
            this.ClaimTime = payload.ClaimTime
            this.LeaveTime = payload.LeaveTime
            this.employee = payload.employee
        }
    }

    @ObjectIdColumn()
    _id:ObjectId

    @Column()
    name: string

    @Column()
    jobType:string

    @Column()
    ClaimTime:Date

    @Column()
    LeaveTime:Date

    @ManyToOne(()=>Employee, (employee)=> employee.account)
    employee:Employee

}