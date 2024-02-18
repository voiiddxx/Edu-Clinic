import { Schema, model, models , Document } from "mongoose";


export interface IServicecategory extends Document {
    _id: string
    name:string
} 

const ServiceCategorySchema = new Schema({
    name:{
        type: String,
    }
});

const Servicecategory = models.Servicecategory || model('Servicecategory' , ServiceCategorySchema);

export default Servicecategory;