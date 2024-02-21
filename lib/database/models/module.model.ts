import { Schema, model, models  , Document} from "mongoose";


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
    ]

});

const Module = models.Module || model("Module" , ModuleSchema);

export default Module;