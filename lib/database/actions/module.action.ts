"use server"

import { DeleteModuleParams, UpdateModuleParams, addTolikeParams, createModuleParams, getModulewithid, getOrgModuleParams, postReviewParams } from "@/types";
import connectToDatabase from "..";
import Module from "../models/module.model";
import { userAvailableorNot } from "./middelware";
import Student from "../models/user.model";





const populateModuleDetails = async ( query: any) => {
    return query
    .populate({ path: 'review.student', model: Student, select: '_id email' })

}






export const createModule = async ({serviceId , creatorId , module} : createModuleParams) => {
    try {
        await connectToDatabase();

        console.log(module);
        const user = await userAvailableorNot(creatorId);
        const Ownerid = user.id;
        const createdModule = await Module.create({...module , serviceId:serviceId , creatorId:Ownerid , image:module.image , likes:[] , review:[]});
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
        console.log("here we got user id or token" , organizationId , user.id);
        
        console.log(user.id);
        let condition = {}

        if(serviceId && organizationId){
            condition = {
                serviceId:serviceId,
                creatorId:user.id
             }
            
        }
        else if(serviceId){
            condition = {
                serviceId:serviceId
            }
            
        }   
        else{
            condition = {
                creatorId:user.id
            }
            
        }
        const ServiceModules = await Module.find(condition);
        console.log(ServiceModules);
        return JSON.parse(JSON.stringify(ServiceModules));
        

    } catch (error) {
        console.log(error);
        
    }
}

export const studentGetOrgsModule = async ({ organizationId , serviceId}:getOrgModuleParams) => {
    try {
        await connectToDatabase();
        let condition = {}

        if(serviceId && organizationId){
            condition = {
                serviceId:serviceId,
                creatorId:organizationId  
             }
            
        }
        else if(serviceId){
            condition = {
                serviceId:serviceId
            }
        }   
        else{
            condition = {
                creatorId:organizationId
            }
           
            
        }
        const ServiceModules = await Module.find(condition);
        return JSON.parse(JSON.stringify(ServiceModules));
        

    } catch (error) {
        console.log(error);
        
    }
}


export const updateModule = async({ moduleId , module}: UpdateModuleParams) => {
    try {
        await connectToDatabase();
        const updatedModule = await Module.findByIdAndUpdate(moduleId , {...module} , {new:true});
  
        
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

export const getModuleWithId = async ({id} : getModulewithid) => {
    try {
        await connectToDatabase();
        const moduleDetail = await Module.findById(id) ;
        if(!moduleDetail){
            return JSON.parse(JSON.stringify({message:"Not Found"}));
        }
        return JSON.parse(JSON.stringify(moduleDetail));
    } catch (error) {
        console.log(error);
        
    }
}


export const AddLiketoModule = async ({userId , moduleId} : addTolikeParams) => {
    try {
        await connectToDatabase();
        const user = await userAvailableorNot(userId);
        const idofUser = user.id;
        const module = await Module.findById(moduleId);
        let liked = false;
        for(let i =0; i<module.likes.length;i++){
            if(module.likes[i].student == idofUser){
                liked = true;
                
                
            }
        }

        if(liked){
            await module.likes.remove({
                student:idofUser
            });
        }
        else{

            await module.likes.push({
                student:idofUser
            });
        }

        await module.save();
        


    } catch (error) {
        console.log(error);
        
    }
}



export const postFeedBack =async  ( {message , moduleId , studentId} : postReviewParams) => {
    try {
        await connectToDatabase();
        const user = await userAvailableorNot(studentId);
        const userId = user.id;
        const module = await Module.findById(moduleId);
        await module.review.push({
            student:userId,
            message:message
        });
        await module.save();
        return JSON.parse(JSON.stringify(module));

    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


