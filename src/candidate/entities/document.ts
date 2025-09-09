import { Column, Entity, JoinColumn, ObjectIdColumn, OneToOne } from "typeorm";
import { Candidate } from "./candidate.entity";

@Entity()
export class Document{
    constructor(document:Document){
        if (document){
            this.cv = document.cv
            this.socialInsurance = document.socialInsurance
            this.HealthCare = document.HealthCare
            this.HoKhau = document.HoKhau
            this.candidate = document.candidate
        }
    }

    @Column()
    cv: string

    @Column()
    socialInsurance: string

    @Column()
    HealthCare: string

    @Column()
    HoKhau: string

    @ObjectIdColumn()
    @OneToOne(()=> Candidate)
    @JoinColumn()
    candidate: Candidate
}