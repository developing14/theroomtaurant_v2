import { Column, Entity, JoinColumn, ManyToOne, ObjectId, ObjectIdColumn, OneToOne } from "typeorm";
import { Position } from "src/position/entities/position.entity";
import { Candidate } from "./candidate.entity";

@Entity()
export class Qualification {
    constructor(qualification:Qualification){
        if (qualification){
            this.qualification = qualification.qualification
            this.workExperience = qualification.workExperience
            this.applyDay = qualification.applyDay
            this.recruitionDay = qualification.recruitionDay
            this.candidate = qualification.candidate
            this.applyPosition = qualification.applyPosition
        }
    }
    
    @Column()
    qualification: string
    
    @Column()
    workExperience: string

    @Column()
    applyDay: Date

    @Column()
    recruitionDay: Date

    @ObjectIdColumn()
    @OneToOne(()=> Candidate)
    @JoinColumn()
    candidate: Candidate

    @ManyToOne(()=> Position, (position)=>position._id)
    applyPosition: ObjectId

}