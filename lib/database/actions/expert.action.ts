"use server"

import { ApproveParams, loginExpertParams, registerExpertParams, rejectApprovalParams } from "@/types";
import Expert from "../models/expert.model";
import bcrypt from "bcrypt";
import connectToDatabase from "..";
import jwt from "jsonwebtoken";
import Organization from "../models/serviceprovider.model";
import { sendMail } from "@/lib/mail";
import { userAvailableorNot } from "./middelware";
import Module from "../models/module.model";
import { ReceiptEuro } from "lucide-react";
import { send } from "process";


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



//  SERVER ACTION FOR GETTING ALL THE ORGANIZATION WHICH HAVE APPILED FOR APPROVAL

export const getAppliedApprovalOrganization = async ()=>{
    try {
        await connectToDatabase();
        const conditions = {
            approvalStatus:"Applied"
        }
        const appliedorg = await Organization.find(conditions);

        if(!appliedorg){
            return JSON.parse(JSON.stringify({message:"No Data Found"}));
        }
        return JSON.parse(JSON.stringify(appliedorg));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// SERVER ACTION FOR APPROVING THE ORGANIZATIONS

export const ApproveOrganizationasPerid = async ({orgId} : ApproveParams)=>{
    try {
        await connectToDatabase();
        const org = await Organization.findByIdAndUpdate(orgId , {
            approvalStatus:'Approved'
        });
        if(!org){
            return JSON.parse(JSON.stringify({message:"Some error found"}));
        }

        await sendMail({
            to:org.orgEmail,
            name:org.orgName,
            subject:"Approval Status 🎉",
            body:`<div classname="bg-white px-4 py-10" >
            <Image src="/loading.gif" height={500} width={500} alt="emailImage" />
            <h1>Congratulation</h1>
            <p> Your Organization has been approved , Now you can create your service and list your modules </p>
            </div>`
        });
        
        return JSON.parse(JSON.stringify({message:"OK"}));
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}


export const rejectOrganization = async  ({message ,orgId} : rejectApprovalParams)=>{
    try {
        await connectToDatabase();
        const ExistOrg = await Organization.findByIdAndUpdate(orgId , {
            approvalStatus:"Declined"
        });
        if(!ExistOrg){
            return JSON.parse(JSON.stringify({message:"Some error occured"}));
        }
        await sendMail({
            to:ExistOrg.orgEmail,
            name:ExistOrg.orgName,
            subject:'Approval Status',
            body:`<div classname="bg-white px-4 py-10" >
            <Image src="/loading.gif" height={500} width={500} alt="emailImage" />
            <h1>Approval Declined</h1>
            <p> ${message}</p>
            </div>`
        })
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// SERVER ACTION FOR GETTING ALL THE MODULES WHOSE APPROVAL ARE PENDINGS

export const getunApprovedModules = async ()=>{
    try {
        
        await connectToDatabase();
        const conditions = {
            approvalStatus:'Pending'
        }
        const modules = await Module.find(conditions);
        if(!modules){
            return JSON.parse(JSON.stringify({message:"No modules founds"}));
        }
        console.log(modules);
        
        return JSON.parse(JSON.stringify(modules));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// SERVER ACTION FOR APPROVING THE MODULE FROM EXPERT

export const approveModuleReq = async  ( id : string)=>{
    try {
        await connectToDatabase();
        const module = await Module.findByIdAndUpdate(id , {
            approvalStatus:'Approved',
        });
        if(!module){
            return JSON.parse(JSON.stringify({message:"Some error occured"}));
        }
        await sendMail({
            to:'nikhildesign00@gmail.com',
            name:'Nikhil',
            subject:'Module Status',
            body:`<> 
            <h1> Your Module has been approved </h1></>`
        });

        return JSON.parse(JSON.stringify({module}));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}