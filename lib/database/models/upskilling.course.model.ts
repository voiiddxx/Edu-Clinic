import { Schema, model, models } from "mongoose";


const upskillingSourseSchema = new Schema({
    name:{
        type:String,
    },
    detail:{
        tupe:String,
    },
    isFree:{
        type:String,
    },
    level:{
        type:String
    },
    pace:{
        type:String,
    },
    category:{
        type:String,
    },
    thumbnail:{
        type:String,
    },
    approvalStatus:{
        type:String
    },
    link:{
        type:String,
    },
    price:{
        type:String
    },
});

const Upskilling = models.Upskilling || model("Module" , upskillingSourseSchema);

export default Upskilling;
