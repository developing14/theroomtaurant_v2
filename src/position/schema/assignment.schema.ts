import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";

@Schema()
export class Assignment {
    constructor(payload?:Assignment){
        if(payload){
            this.startDate = payload.startDate
            this.endDate = payload.endDate
            this.position = payload.position
            this.employee = payload.employee
        }
    }

    @Prop({default: new Date()})
    startDate: Date 

    @Prop()
    endDate: Date

    @Prop()
    position: ObjectId 

    @Prop()
    employee: ObjectId
}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
