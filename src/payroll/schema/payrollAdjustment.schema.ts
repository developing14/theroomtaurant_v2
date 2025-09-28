import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ObjectId } from "mongodb"

@Schema()
export class PayrollAdjustment {

    constructor(adjustment:PayrollAdjustment){
        if(adjustment) {
            this.payrollId = adjustment.payrollId
            this.name = adjustment.name
            this.type = adjustment.type
            this.amount = adjustment.amount
        }
    }

    @Prop({required: true})
    payrollId: ObjectId

    @Prop({required: true})
    name: string

    @Prop({required: true})
    type: string

    @Prop({required: true})
    amount: number
    
    @Prop({default: new Date()})
    lastUpdaTe: Date
}

export const PayrollAdjustmentSchema = SchemaFactory.createForClass(PayrollAdjustment); 