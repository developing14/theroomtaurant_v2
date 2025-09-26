import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";

@Schema()
export class Position {

    constructor(payload?:Position){
        if (payload){
            this.name = payload.name
            this.jobType = payload.jobType
            this.salaryLevel = payload.salaryLevel
            this.department = payload.department
            this.isDelete = payload.isDelete
            this.lastUpdate = new Date()
        }
    }

    @Prop({required:true})
    name: string

    @Prop({required:true})
    jobType:string

    @Prop({required:true})
    salaryLevel:number

    @Prop({required: true})
    department: ObjectId

    @Prop({default: false})
    isDelete: boolean

    @Prop({default: new Date()})
    lastUpdate: Date

}

export const PositionSchema = SchemaFactory.createForClass(Position);