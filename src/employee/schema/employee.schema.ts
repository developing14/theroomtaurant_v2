import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { ObjectId } from "mongodb"

@Schema()
export class Employee {
    constructor(payload?:Employee){
        if(payload){
            this.name = payload.name
            this.birth = payload.birth
            this.phone = payload.phone
            this.email= payload.email
            this.address= payload.address
            this.account= payload.account
        }   
    }
        @Prop()
        name: string

        @Prop()
        birth:Date
        
        @Prop()
        phone: string
        
        @Prop()
        email:string
        
        @Prop()
        address:string

        @Prop()
        account:ObjectId

        @Prop({default: false})
        isDeleted: boolean

        @Prop({default: null})
        leaveDate: Date

        @Prop({default: new Date()})
        lastUpdate: Date
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);