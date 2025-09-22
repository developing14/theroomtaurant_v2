import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn } from "typeorm";
import { Position } from "./position.entity";
import { Employee } from "src/employee/entities/employee.entity";

@Entity()
export class Assignment {
    constructor(payload?:Assignment){
        if(payload){
            this.startDate = payload.startDate
            this.endDate = payload.endDate
            this.position = payload.position
            this.employee = payload.employee
        }
    }

    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    startDate: Date 

    @Column()
    endDate: Date

    @ManyToOne(() => Position, (position)=> position.assignments)
    position: ObjectId 

    @ManyToOne(() => Employee, (employee)=> employee.assignments)
    employee: ObjectId
}
