"use server"

import { CreateServiceCategoryParams, createServiceParams } from "@/types";
import connectToDatabase from "..";
import Service from "../models/service.model";
import Servicecategory from "../models/service.category.model";


// service category action //

export const createServiceCategory = async ({category} : CreateServiceCategoryParams) => {
    try {
        await connectToDatabase();

        const createdCategory = await Servicecategory.create({...category});
        return JSON.parse(JSON.stringify(createdCategory));
    } catch (error) {
        console.log(error);
        
    }
}

// fetching all service category 

export const getAllServiceCategory = async () => {
    try {
        await connectToDatabase();
        const allServicecategory = await Servicecategory.find({});
        return JSON.parse(JSON.stringify(allServicecategory)); 
    } catch (error) {
        console.log(error);
        
    }
}

export const createService = async ({service} : createServiceParams) => {
    try {
        await connectToDatabase();
        const existService = await Service.findOne({serviceName:service.serviceName , serviceCategoryId:service.serviceCategory});
        if(existService){
           return JSON.parse(JSON.stringify({message:"Service Already Exist"})); 
        }
        else{
            const createdService = await Service.create({...service});
            return JSON.parse(JSON.stringify(createdService));
        }
    } catch (error) {
        console.log(error);
        
    }
}