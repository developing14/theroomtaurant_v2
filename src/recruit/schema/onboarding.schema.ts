import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ObjectId } from "mongodb"

@Schema()
export class Onboarding {
    constructor (payload: Onboarding){
        this.startTime = payload.startTime
        this.endTime = payload.endTime
        this.trainee = payload.trainee
        this.trainer = payload.trainer
    }

    @Prop({required: true})
    startTime: Date

    @Prop()
    endTime: Date
    
    @Prop({required: true})
    trainer: ObjectId
    
    @Prop({required: true})
    trainee: ObjectId
    
    @Prop({default: new Date()})
    lastUpdate: Date

}

export const OnboardingSchema = SchemaFactory.createForClass(Onboarding)