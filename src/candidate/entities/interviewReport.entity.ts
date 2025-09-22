import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn } from "typeorm";
import { Candidate } from "./candidate.entity";

@Entity()
export class InterviewReport {
    constructor(interviewReport:InterviewReport){
        if (interviewReport){
            this.interviewer = interviewReport.interviewer
            this.interviewee = interviewReport.interviewee
            this.date = interviewReport.date
            this.location = interviewReport.location
            this.content = interviewReport.content
            this.feedback = interviewReport.feedback
            this.rating = interviewReport.rating
        }
    }
    @ObjectIdColumn()
    _id: ObjectId
    
    @Column()
    location: string
    
    @Column()
    date: Date
    
    @Column()
    content: string
    
    @Column()
    feedback: string
    
    @Column()
    rating: number
    
    @ManyToOne(() => Employee, (employee)=> employee.interviewReports)
    interviewer: ObjectId    
    
    @ManyToOne(() => Candidate, (candidate)=> candidate.interviewReports)
    interviewee: ObjectId
}