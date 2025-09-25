import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";

@Schema()
export class InterviewReport {
    constructor(interviewReport:InterviewReport){
        if (interviewReport){
            this.interviewer = interviewReport.interviewer
            this.interviewee = interviewReport.interviewee
            this.date = interviewReport.date
            this.location = interviewReport.location
            this.content = interviewReport.content
            this.feedback = interviewReport.feedback
            this.rating = interviewReport.rating
        }
    }

    @Prop()
    location: string
    
    @Prop()
    date: Date
    
    @Prop()
    content: string
    
    @Prop()
    feedback: string
    
    @Prop()
    rating: number

    @Prop({ default: new Date() })
    lastUpdate: Date
    
    @Prop()
    interviewer: ObjectId    
    
    @Prop()
    interviewee: ObjectId
}

export const InterviewReportSchema = SchemaFactory.createForClass(InterviewReport);