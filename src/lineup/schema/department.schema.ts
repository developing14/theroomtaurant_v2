import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Department {
    constructor (payload?:Department){
        if (payload){
            this.name = payload.name
            this.isDeletedd = payload.isDeletedd
        }
    }


    @Prop({required: true, unique: true})
    name:string

    @Prop({default: false})
    isDeletedd: boolean

    @Prop({default: new Date()})
    lastUpdate: Date
}

export const DepartmentSchema = SchemaFactory.createForClass(Department)    
