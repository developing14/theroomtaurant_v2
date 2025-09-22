import { Column, Entity, JoinColumn, ObjectId, ObjectIdColumn, OneToMany, OneToOne } from "typeorm"
import { Account } from "src/account/entities/account.entity"
import { Position } from "src/position/entities/position.entity"
import { Attendance } from "src/attendance/entities/attendance.entity"
import { InterviewReport } from "src/candidate/entities/interviewReport.entity"
import { Assignment } from "src/position/entities/assignment.entity"

@Entity()
export class Employee {
    constructor(payload?:Employee){
        if(payload){
            this.name = payload.name
            this.birth = payload.birth
            this.phone = payload.phone
            this.email= payload.email
            this.address= payload.address
            this.taxCode= payload.taxCode
            this.insuranceCode= payload.insuranceCode
            this.contract= payload.contract
            this.leaveTime= payload.leaveTime
            this.account= payload.account
            this.attendances= payload.attendances
            this.interviewReports= payload.interviewReports
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
        
        @Column()
        leaveTime: Date

        @OneToOne(()=> Account)
        @JoinColumn()
        account:Account

        @OneToMany(()=>Attendance, (attendance)=> attendance.employee)
        attendances: Attendance[]

        @OneToMany(()=> InterviewReport, (interviewReport)=> interviewReport.interviewer)
        interviewReports: ObjectId[]

        @OneToMany(()=> Assignment, (assignment)=> assignment.employee)
        assignments: ObjectId[]
}