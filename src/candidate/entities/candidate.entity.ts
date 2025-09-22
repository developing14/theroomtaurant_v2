import { Column, Entity, ObjectId, ObjectIdColumn, OneToMany } from "typeorm";
import { InterviewReport } from "./interviewReport.entity";

@Entity()
export class Candidate {
    constructor(candidate:Candidate){
        if(candidate){
            this.name = candidate.name
            this.birth = candidate.birth
            this.phone = candidate.phone
            this.address = candidate.address
            this.identityCard = candidate.identityCard
            this.isDeleted = false
        }
    }


    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    name: string
 
    @Column()
    birth: Date
    
    @Column()
    phone: string
    
    @Column()
    address: string

    @Column()
    identityCard: string

    @Column()
    isDeleted: boolean

    @OneToMany(() => InterviewReport, (interviewReport)=> interviewReport.interviewee)
    interviewReports: ObjectId[]

}
