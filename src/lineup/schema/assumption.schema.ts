import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";

@Schema()
export class Assumption {
    constructor(payload?:Assumption){
        if(payload){
            this.startDate = payload.startDate
            this.endDate = payload.endDate
            this.position = payload.position
            this.employee = payload.employee
        }
    }

    @Prop({default: new Date()})
    startDate: Date 

    @Prop({default: null})
    endDate: Date

    @Prop({required: true})
    position: ObjectId 

    @Prop()
    employee: ObjectId

    @Prop({default: new Date()})
    lastUpdate: Date
}

export const AssumptionSchema = SchemaFactory.createForClass(Assumption);
