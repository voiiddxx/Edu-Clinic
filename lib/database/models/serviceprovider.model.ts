import { Schema, model, models , Document } from "mongoose";

export interface IOrganization extends Document {
    _id: string,
    orgName:string,
    orgImage: string,
    orgEmail:string
    orgCategory:string
    orgPhone:string,
    orgHq:string
}




const organizationSchema = new Schema({
    orgName:{
        type: String,
    },
    orgEmail:{
        type: String,
    },
    orgPassword:{
        type:String
    },
    orgCategory:{
        type: Schema.Types.ObjectId, ref:'Orgcategory'
    },
    orgPhone:{
        type:String,
    },
    orgHq:{
        type:String,
    },
    orgImage:{
        type: String,
    }
});


const Organization = models.Organization || model("Organization" , organizationSchema);


export default Organization;