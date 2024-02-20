"use server"

import { CreateServiceCategoryParams, createServiceParams } from "@/types";
import connectToDatabase from "..";
import Servicecategory from "../models/service.category.model";
import { userAvailableorNot } from "./middelware";
import ServiceStore from "../models/service.model";


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

export const createService = async ({service , userToken} : createServiceParams) => {
    try {
        await connectToDatabase();
        const userId = await userAvailableorNot(userToken);
        const organizationID = userId.id;
        console.log(organizationID);
        const createdService = await ServiceStore.create({name:service.serviceName , category:service.serviceCategory , owner:organizationID});
        console.log(createdService);
        return JSON.parse(JSON.stringify(createdService));   
    } catch (error) {
        console.log(error);
        
    }
}


export const getAllServices = async () => {
    try {
        const allServ = await ServiceStore.find({});
        return JSON.parse(JSON.stringify(allServ));
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getAllServicearPerOrgId = async ( orgId:any) => {
    try {
        await connectToDatabase();
        const conditions = {
            owner:orgId
        }
        
        const orgService = await ServiceStore.find(conditions);
        if(!orgService){
            return JSON.parse(JSON.stringify({message:"No Services"}))
        }
        return JSON.parse(JSON.stringify(orgService));
        
    } catch (error) {
        console.log(error);
        
    }
}