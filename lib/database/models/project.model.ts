import { Schema, model, models } from "mongoose";


const ProjectSchema = new Schema({
    name:{type:String},
    detail:{type:String},
    isGranted:{type:true},
    ammount:{type:String},
    ppt:{type:String},
    college:{type:String},
    phone:{type:String},
    poster:{type:String},
    student:{type:Schema.Types.ObjectId , ref:'Student'}
});

const Project = models.Project || model("Project" , ProjectSchema);

export default Project;
