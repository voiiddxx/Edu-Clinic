import { Schema, model, models } from "mongoose";


const ModuleSchema = new Schema({
    name:{
        type: String,
    },
    detail:{
        type: String,
    },
    serviceId:{
        type: Schema.Types.ObjectId , ref:''
    },
    isPaid:{
        type: Boolean,
    },
    fees:{
        type:Number,
    },
    url:{
        type: String
    },
    image:{
        type: String,
    },
    creatorId:{
        type:Schema.Types.ObjectId, ref:'',
    },

});

const Module = models.Module || model("Module" , ModuleSchema);

export default Module;