"use server"

import { DeleteModuleParams, UpdateModuleParams, createModuleParams, getOrgModuleParams } from "@/types";
import connectToDatabase from "..";
import Module from "../models/module.model";
import { model } from "mongoose";
import { userAvailableorNot } from "./middelware";


export const createModule = async ({serviceId , creatorId , module} : createModuleParams) => {
    try {
        await connectToDatabase();
        const user = await userAvailableorNot(creatorId);
        const Ownerid = user.id;

        const createdModule = await Module.create({...module , serviceId:serviceId , creatorId:Ownerid , image:module.image});
        console.log(createdModule);

        return JSON.parse(JSON.stringify(createdModule));
    } catch (error) {
        console.log(error);
        
    }
}


export const getAllOrganizationModule = async ({ organizationId , serviceId } : getOrgModuleParams) => {
    try {
        
        
        await connectToDatabase();
        const user = await userAvailableorNot(organizationId);
        console.log(user.id);
        
        const conditions = {
           serviceId:serviceId,
           creatorId:user.id
           
        }
        const ServiceModules = await Module.find(conditions);
        console.log(ServiceModules);
        return JSON.parse(JSON.stringify(ServiceModules));
        

    } catch (error) {
        console.log(error);
        
    }
}


export const updateModule = async({ moduleId , module}: UpdateModuleParams) => {
    try {
        await connectToDatabase();
        const updatedModule = await Module.findByIdAndUpdate(moduleId , {...module} , {new:true});
        console.log("this is working");
        
        return JSON.parse(JSON.stringify({message:"Module Updated"}));

    } catch (error) {
        console.log(error);
        
    }
}

export const deleteModule = async ({moduleId} : DeleteModuleParams)=>{
    try {
        await connectToDatabase();
        const deleted = await Module.findByIdAndDelete(moduleId);
        return JSON.parse(JSON.stringify({message:"Module Deleted"}));

    } catch (error) {
        
    }
}


export const getAllModule = async () => {
    try {
        await connectToDatabase();
        const AllModule = await Module.find({});
        if(!AllModule){
            return JSON.parse(JSON.stringify({message:"No Module found"}));
        }
        return JSON.parse(JSON.stringify(AllModule));
    } catch (error) {
        console.log(error);
        
    }
}