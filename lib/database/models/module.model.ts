import { Schema, model, models  , Document} from "mongoose";
import { string } from "zod";


export interface IModule extends Document{
    _id:string,
    name:string,
    detail:string,
    serviceId:string,
    isPaid:string,
    fees: string,
    url: string,
    image: string,
    creatorId: string
}



const ModuleSchema = new Schema({
    name:{
        type: String,
    },
    detail:{
        type: String,
    },
    serviceId:{
        type: Schema.Types.ObjectId , ref:'ServiceStore'
    },
    isPaid:{
        type: String,
    },
    fees:{
        type: String,
    },
    url:{
        type: String
    },
    image:{
        type: String,
    },
    creatorId:{
        type:Schema.Types.ObjectId, ref:'Organization',
    },
    moduleCategory:{
        type:String,
    },
    location:{
        type:String
    },
    elegibility:{
        type:String
    },
    
    pace:{
        type:String,
        default:'Self Paced'
    },
    deleivery:{
        type:String,
    },
    material:{
        type:String,
    },
    purpose:{
        type:String,
    },
    likes:[
        {
            student:{
                type:Schema.Types.ObjectId , ref:'Student'
            }
        }
    ],
    review:[
        {
            student:{
                type:Schema.Types.ObjectId , ref:'Student'
            },
            message:{
                type:String,
            }
        }
    ],
    approvalStatus:{
        type:String,
        default:"Pending",
    },
    level:{
        type:String,
        default:'Medium'
    },
    categoryId:{
        type:Schema.Types.ObjectId , ref:'Servicecategory',
    }

});

const Module = models.Module || model("Module" , ModuleSchema);

export default Module;