import { Schema, model, models } from "mongoose";



const serviceSchema = new Schema({
    serviceName:{
        type: String,
    },
    serviceCategory:{
        type: Schema.Types.ObjectId , ref:'Servicecategory'
    },
    owner:{
        type: Schema.Types.ObjectId , ref:'Organization'
    }
});


const Service = models.Service || model('Service' , serviceSchema);

export default Service;