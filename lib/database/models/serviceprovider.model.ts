import { Schema, model, models } from "mongoose";


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
});


const Organization = models.Organization || model("Organization" , organizationSchema);


export default Organization;