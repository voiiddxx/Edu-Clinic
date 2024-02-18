"use server"

import { LoginOrganizationParams, StudentLoginParams, registerOrganizationParams } from "@/types";
import connectToDatabase from "..";
import Organization from "../models/serviceprovider.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerOrganization = async ({organization} : registerOrganizationParams) => {
    try {
        await connectToDatabase();
        const orgExist = await Organization.findOne({email:organization.orgEmail});
        if(orgExist){
            return JSON.parse(JSON.stringify({message:"Organization email already assigned"}));
        }
        else{
            const hashedPass = await bcrypt.hash(organization.orgPassword , 10);
            const createdOrg = await Organization.create({orgName:organization.orgName , orgEmail:organization.orgEmail , orgPassword:hashedPass , orgCategory:organization.orgCategory , orgPhone:organization.orgPhone , orgHq:organization.orgHq});
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
            return JSON.parse(JSON.stringify({message:"Organization Not Found"}));
        }
        else{
            const isMatch = await bcrypt.compare(existOrg.orgPassword , organization.orgPassword);
            if(!isMatch){
                return JSON.parse(JSON.stringify({message:"Wrong Password"}));
            }
            else{
                const token = jwt.sign({id:existOrg._id} , `${process.env.AUTH_KEY}`);
                return JSON.parse(JSON.stringify({...existOrg._doc , token}));
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}