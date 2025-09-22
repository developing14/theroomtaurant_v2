import { Column, Entity, JoinColumn, ObjectId, ObjectIdColumn, OneToOne } from "typeorm";
import { Candidate } from "./candidate.entity";

@Entity()
export class Documents{
    constructor(Documents:Documents){
        if (Documents){
            this.cv = Documents.cv
            this.socialInsurance = Documents.socialInsurance
            this.HealthCare = Documents.HealthCare
            this.HoKhau = Documents.HoKhau
            this.candidate = Documents.candidate
        }
    }

    @ObjectIdColumn()
    _id:ObjectId

    @Column()
    cv: string

    @Column()
    socialInsurance: string

    @Column()
    HealthCare: string

    @Column()
    HoKhau: string

    @OneToOne(()=> Candidate)
    @JoinColumn()
    candidate: ObjectId
}