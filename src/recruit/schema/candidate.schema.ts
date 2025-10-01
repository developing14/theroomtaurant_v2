import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ObjectId } from "mongodb"

@Schema()
export class Candidate {
    constructor(candidate:Candidate){
        if(candidate){
            this.name = candidate.name
            this.birth = candidate.birth
            this.phone = candidate.phone
            this.email = candidate.email
            this.address = candidate.address
            this.identityNumber = candidate.identityNumber
            this.isDeletedd = false
        }
    }


    @Prop({require: true})
    name: string
 
    @Prop({require: true})
    birth: Date
    
    @Prop({require: true, unique: true})
    email: string

    @Prop({require: true})
    phone: string
    
    @Prop({require: true})
    address: string

    @Prop({require: true})
    identityNumber: string

    @Prop({default: false})
    isDeletedd: boolean

    @Prop({default: new Date()})
    lastUpdate: Date
}


export const CandidateSchema = SchemaFactory.createForClass(Candidate)