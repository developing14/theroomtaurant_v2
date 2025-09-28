import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";

@Schema()
export class Payroll {

    constructor(payroll:Payroll){
        if(payroll) {
            this.emloyeeDoc = payroll.emloyeeDoc
            this.position = payroll.position
            this.isDeleted = payroll.isDeleted
        }
    }

    @Prop({required: true})
    emloyeeDoc: ObjectId

    @Prop({required: true})
    position: ObjectId

    @Prop({default: false})
    isDeleted: boolean

    @Prop({default: new Date()})
    lastUpdate: Date
    
}

export const PayrollSchema = SchemaFactory.createForClass(Payroll);
