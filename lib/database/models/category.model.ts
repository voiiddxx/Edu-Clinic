import { Schema, model, models , Document } from "mongoose";


export interface IOrgcategory extends Document {
    _id:string
    name:string
}


const OrganizationcategorySchema = new Schema({
    name:{type : String}
});

const Organizationcategory = models.Organizationcategory || model("Organizationcategory" , OrganizationcategorySchema);


export default Organizationcategory;
