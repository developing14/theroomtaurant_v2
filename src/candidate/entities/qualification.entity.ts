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
            this.applyPosition = qualification.applyPosition
            this.recruitionDay = qualification.recruitionDay
            this.candidate = qualification.candidate
        }
    }

    @ObjectIdColumn()
    _id: ObjectId
    
    @Column()
    qualification: string
    
    @Column()
    workExperience: string

    @Column()
    applyDay: Date

    @Column()
    recruitionDay: Date

    @OneToOne(()=> Candidate)
    @JoinColumn()
    candidate: ObjectId

    @ManyToOne(()=> Position, (position)=>position._id)
    applyPosition: ObjectId

}