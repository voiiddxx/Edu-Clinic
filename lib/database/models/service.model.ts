// import { Schema, model, models } from "mongoose";

import { Schema, model, models } from "mongoose";



// const serviceSchema = new Schema({
//     serviceName:{
//         type: String,
//     },
//     serviceCategoryId:{
//         type: Schema.Types.ObjectId , ref:'Organization'
//     },
//     organizationID:{
//         type:Schema.Types.ObjectId , ref:'Organization'
//     },
   
// });


// const Service = models.Service || model('Service' , serviceSchema);

// export default Service;


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