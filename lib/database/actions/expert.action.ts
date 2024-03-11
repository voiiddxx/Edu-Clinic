"use server"

import { loginExpertParams, registerExpertParams } from "@/types";
import Expert from "../models/expert.model";
import bcrypt from "bcrypt";
import connectToDatabase from "..";
import jwt from "jsonwebtoken";


// CREATING SERVER COMPONENT FOR REGISTERING THE EXPERT PANNEL

export const registerExpertAction = async ({expert}:registerExpertParams)=>{
    try {
        await connectToDatabase();
        const ExistExpert = await Expert.findOne({email:expert.email});

        if(ExistExpert){
            return JSON.parse(JSON.stringify({message:"User alrady present , try with another email address"}));
        }

        const hashPassword = await bcrypt.hash(expert.password , 10);
        const registerdExpert = await Expert.create({...expert , password:hashPassword});
        if(!registerdExpert){
            return JSON.parse(JSON.stringify({message:"Some error occured"}));
        }
        return JSON.parse(JSON.stringify(registerdExpert));

    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


//   CREATING SERVER COMPONENT FOR LOGIN THE EXPERT 


export const LoginExpertParams = async({email , password}: loginExpertParams)=>{
    try {
        await connectToDatabase();
        const ExistExpert = await Expert.findOne({email:email});

        if(!ExistExpert){
            return JSON.parse(JSON.stringify({message:"User not present , try with another email address"}));
        }

        const isMatch = await bcrypt.compare(password , ExistExpert.password);
        if(!isMatch){
            return JSON.parse(JSON.stringify({message:"Invald Password"}));
        }

        const token =  jwt.sign({id:ExistExpert._id} , "x-auth-token-secure-key");

        if(!token){
            return JSON.parse(JSON.stringify({message:"There is some error while creating the token"}));
        }
        return JSON.parse(JSON.stringify({...ExistExpert._doc , token}));

        


    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}
