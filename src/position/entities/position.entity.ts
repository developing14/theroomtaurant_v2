import { Department } from "src/department/entities/department.entity";
import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn, OneToMany } from "typeorm";
import { Assignment } from "./assignment.entity";

@Entity()
export class Position {

    constructor(payload?:Position){
        if (payload){
            this.name = payload.name
            this.jobType = payload.jobType
            this.salaryLevel = payload.salaryLevel
            this.department = payload.department
            this.assignments = payload.assignments
        }
    }

    @ObjectIdColumn()
    _id:ObjectId

    @Column()
    name: string

    @Column()
    jobType:string

    @Column()
    salaryLevel:number

    @ManyToOne(()=> Department, (department)=> department.positions)
    department:ObjectId

    @OneToMany(()=> Assignment, (assignment)=> assignment.position)
    assignments: ObjectId[]

}