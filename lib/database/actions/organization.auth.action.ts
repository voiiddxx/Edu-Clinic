"use server"

import { ApplyforApprovalParams, LoginOrganizationParams, StudentLoginParams, registerOrganizationParams } from "@/types";
import connectToDatabase from "..";
import Organization from "../models/serviceprovider.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/user.model";
import { userAvailableorNot } from "./middelware";


export const registerOrganization = async ({organization} : registerOrganizationParams) => {
    try {
        await connectToDatabase();
        console.log(organization.orgImage);
        
        const orgExist = await Organization.findOne({email:organization.orgEmail});
        if(orgExist){
            return JSON.parse(JSON.stringify({message:"Organization email already assigned"}));
        }
        else{
            const hashedPass = await bcrypt.hash(organization.orgPassword , 10);
            const createdOrg = await Organization.create({orgName:organization.orgName , orgEmail:organization.orgEmail , orgPassword:hashedPass , orgCategory:organization.orgCategory , orgPhone:organization.orgPhone , orgHq:organization.orgHq , orgImage:organization.orgImage});
            return JSON.parse(JSON.stringify(createdOrg));
        }
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}

export const LoginOrganizatio = async ({organization} :LoginOrganizationParams) => {
    try {
        await connectToDatabase();
        const existOrg = await Organization.findOne({orgEmail:organization.orgEmail})
        if(!existOrg){
            return JSON.parse(JSON.stringify({message:"Organization Not Found" , status:401}));
        }
        else{
            console.log(organization.orgPassword);
            console.log(existOrg.orgPassword);
            
            
            const isMatch = await bcrypt.compare(organization.orgPassword , existOrg.orgPassword);
            if(!isMatch){
                return JSON.parse(JSON.stringify({message:"Wrong Password", status:400}));
            }
            else{
                const token = jwt.sign({id:existOrg._id} , 'x-auth-token-secure-key');
                return JSON.parse(JSON.stringify({...existOrg._doc , token , status:200}));
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


export const getAllOrganization = async () =>{
    try {
        await connectToDatabase();
        const allOrgs = await Organization.find({});
        if(!allOrgs){
            return JSON.parse(JSON.stringify({message:"No Organization found"}));
        }
        return JSON.parse(JSON.stringify(allOrgs));

    } catch (error) {
        console.log(error);
        
    }
}


export const getOrganizationasPerId = async  (userId : string)=>{
    try {
        await connectToDatabase();
        const user = await userAvailableorNot(userId);
        const myOrg = await Organization.findById(user.id);
        if(!myOrg){
            return JSON.parse(JSON.stringify({message:"Some error occured"}));
        }
        return JSON.parse(JSON.stringify(myOrg));
    } catch (error) {
        console.log(error);
        
    }
}



// SERVER ACTION FOR UPDATING THE ORGANIZATION AND SENDING THEM FOR APPROVAL

export const UpdateAndApplyforApprovalAction =  async ({org} : ApplyforApprovalParams)=>{
    try {
        const organizationId = await userAvailableorNot(org.orgId);

        const organizationData = await Organization.findByIdAndUpdate(organizationId.id ,{
            orgDescription:org.orgDescription,
            orgHq:org.orgHq,
            orgImage:org.OrgImage,  
            orgWebsite:org.orgWebsite,
            approvalStatus:'Applied',
        });

        if(!organizationData){
            return JSON.parse(JSON.stringify({message:"Data Not Updated , Some error occured"}));
        }
        return JSON.parse(JSON.stringify(organizationData));
    } catch (error) {
        console.log(error);
        throw new Error(error as string)
        
    }
}