import { Schema, model, models } from "mongoose";
import { stringify } from "querystring";



const expertSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    occupation:{
        type:String,
    },
    resume:{
        type:String,
    },
    workProof:{
        type:String,
    }

});

const Expert = models.Expert || model("Expert" , expertSchema);

export default Expert;
