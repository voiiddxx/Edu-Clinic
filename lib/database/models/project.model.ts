import { Schema, model, models , Document } from "mongoose";

export interface IProject extends Document {
    name:string
    detail:string
    isGranted:string 
    ammount:string
    ppt:string
    college:string
    phone:string
    poster:string
    mail:string
    student:string
}


const ProjectSchema = new Schema({
    name:{type:String},
    detail:{type:String},
    isGranted:{type:String},
    ammount:{type:String},
    ppt:{type:String},
    college:{type:String},
    phone:{type:String},
    poster:{type:String},
    mail:{type:String},
    student:{type:Schema.Types.ObjectId , ref:'Student'}
});

const Project = models.Project || model("Project" , ProjectSchema);

export default Project;
