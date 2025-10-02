import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ObjectId } from "mongodb"

@Schema()
export class Attendance{
    constructor (payload?:Attendance){
        if(payload){
            this.timeIn = payload.timeIn
            this.timeOut = payload.timeOut
            this.workType = payload.workType
            this.shiftLength = payload.shiftLength
            this.payrollId = payload.payrollId
            this.employee = payload.employee
        }
    }
    
    @Prop({required:true})
    workType:string

    @Prop()
    timeIn:Date

    @Prop()
    timeOut:Date

    @Prop({default: 0})
    shiftLength: number

    @Prop({required:true})
    employee:ObjectId

    @Prop({default: null})
    payrollId: ObjectId

    @Prop({default: new Date()})
    lastUpdate: Date
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);    