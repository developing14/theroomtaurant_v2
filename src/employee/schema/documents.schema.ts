import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import  { ObjectId } from 'mongodb'

@Schema()
export class Documents{
    constructor(Documents:Documents){
        if (Documents){
            this.cv = Documents.cv
            this.HealthChecking = Documents.HealthChecking
            this.taxCode= Documents.taxCode
            this.appliedDay = this.appliedDay
            this.employee = Documents.employee
            this.contract= Documents.contract
            this.insuranceCode= Documents.insuranceCode
            this.leaveTime= Documents.leaveTime
        }
    }


    @Prop({required: true})
    cv: string

    @Prop({required: true})
    HealthChecking: string

    @Prop({required: true, default: new Date()})
    appliedDay: Date

    @Prop({required: true})
    taxCode: string

    @Prop({required: true})
    insuranceCode: string

    @Prop({required: true})
    contract: string
        
    @Prop()
    leaveTime: Date

    @Prop({default: new Date()})
    lastUpdate: Date

    @Prop({required: true})
    employee: ObjectId
}

export const DocumentsSchema = SchemaFactory.createForClass(Documents); 