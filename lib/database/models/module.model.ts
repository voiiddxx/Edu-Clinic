import { Schema, model, models } from "mongoose";


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

});

const Module = models.Module || model("Module" , ModuleSchema);

export default Module;