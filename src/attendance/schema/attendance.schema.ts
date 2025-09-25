import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ObjectId } from "mongodb"

@Schema()
export class Attendance{
    constructor (payload?:Attendance){
        if(payload){
            this.assignedTimeIn = payload.assignedTimeIn
            this.assignedTimeOut = payload.assignedTimeOut
            this.timeIn = payload.timeIn
            this.timeOut = payload.timeOut
            this.shiftType = payload.shiftType
            this.employee = payload.employee
            this.lastUpdate = new Date()
        }
    }


    @Prop()
    assignedTimeIn: Date
    
    @Prop()
    assignedTimeOut: Date
    
    @Prop({required:true})
    shiftType:string

    @Prop()
    timeIn:Date

    @Prop()
    timeOut:Date

    @Prop()
    employee:ObjectId

    @Prop()
    lastUpdate: Date
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);    