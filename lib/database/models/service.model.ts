// import { Schema, model, models } from "mongoose";

import { Schema, model, models , Document } from "mongoose";


export interface IService extends Document {
    _id:string
    name:string
    category:{
        _id:string,
        name:string
    }
    owner:{
        _id:string
        orgName:string

    }
}


const ServiceStoreSchema = new Schema({
    name:{
        type: String
    },
    category:{
        type:Schema.Types.ObjectId , ref:'Servicecategory'
    },
    owner:{
        type:Schema.Types.ObjectId , ref:'Organization'
    }
});

const ServiceStore = models.ServiceStore || model('ServiceStore' , ServiceStoreSchema);

export default ServiceStore;