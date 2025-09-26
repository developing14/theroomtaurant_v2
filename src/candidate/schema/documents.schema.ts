import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import  { ObjectId } from 'mongodb'

@Schema()
export class Documents{
    constructor(Documents:Documents){
        if (Documents){
            this.cv = Documents.cv
            this.HealthChecking = Documents.HealthChecking
            this.HoKhau = Documents.HoKhau
            this.socialInsurance = Documents.socialInsurance
            this.appliedDay = this.appliedDay
            this.candidate = Documents.candidate
        }
    }


    @Prop({required: true})
    cv: string

    @Prop({required: true})
    socialInsurance: string

    @Prop({required: true})
    HealthChecking: string

    @Prop()
    HoKhau: string

    @Prop({required: true, default: new Date()})
    appliedDay: Date

    @Prop({default: new Date()})
    lastUpdate: Date

    @Prop({required: true})
    candidate: ObjectId
}

export const Documentsschema = SchemaFactory.createForClass(Documents); 