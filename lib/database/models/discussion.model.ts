import { Schema, model, models } from "mongoose";


const discussionSchema = new Schema({
        title:{type:String},
        message:{type:String},
        user:{type:Schema.Types.ObjectId , ref:'Student'},
        image:{type:String},
        reply:[
            {
               repliedUser:{ type:Schema.Types.ObjectId , ref:'Student'},
                message:{
                    type: String,
                }
            }
        ]
});

const Discussion = models.Discussion || model('Discussion' , discussionSchema);

export default Discussion;
