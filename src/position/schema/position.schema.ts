import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Position {

    constructor(payload?:Position){
        if (payload){
            this.name = payload.name
            this.jobType = payload.jobType
            this.salaryLevel = payload.salaryLevel
            this.lastUpdate = new Date()
        }
    }

    @Prop({required:true})
    name: string

    @Prop({required:true})
    jobType:string

    @Prop({required:true})
    salaryLevel:number

    @Prop({default: new Date()})
    lastUpdate: Date

}

export const PositionSchema = SchemaFactory.createForClass(Position);