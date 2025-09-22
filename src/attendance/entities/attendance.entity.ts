import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn } from "typeorm";
import { Employee } from "src/employee/entities/employee.entity";

@Entity()
export class Attendance{
    constructor (payload?:Attendance){
        if(payload){
            this.assignedTimeIn = payload.assignedTimeIn
            this.assignedTimeOut = payload.assignedTimeOut
            this.timeIn = payload.timeIn
            this.timeOut = payload.timeOut
            this.shiftType = payload.shiftType
            this.employee = payload.employee
        }
    }

    @ObjectIdColumn()
    _id:ObjectId

    @Column()
    assignedTimeIn: Date
    
    @Column()
    assignedTimeOut: Date
    
    @Column()
    shiftType:string

    @Column()
    timeIn:Date

    @Column()
    timeOut:Date

    @ManyToOne(()=>Employee, (employee)=> employee.attendances)
    employee:ObjectId

}