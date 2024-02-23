"use server"

import { CreateDiscussParams, createReplyParams, getDisucssIdParams } from "@/types";
import connectToDatabase from "..";
import { userAvailableorNot } from "./middelware";
import Discussion from "../models/discussion.model";


export const createDiscuss = async ({message , userToken , image , title} : CreateDiscussParams) => {
    try {
        await connectToDatabase();

        const user = await userAvailableorNot(userToken);
        const userId = user.id;



        if(!userId){
            return JSON.parse(JSON.stringify({message:"Authorization Blocked"}));
        }

        const createdDiscuss = await Discussion.create({
            title:title,
            message:message,
            user:userId,
            image:image,
            reply:[]
        });
        console.log(createdDiscuss);
        return JSON.parse(JSON.stringify(createDiscuss));

        
    } catch (error) {
        console.log(error);
        
    }
}


export const getDiscuss = async ()=>{
    try {
        await connectToDatabase();
        const getDiscussion = await Discussion.find({});
        return JSON.parse(JSON.stringify(getDiscussion));
        
    } catch (error) {
        console.log(error);
        
    }
}


export const getDiscussWithId =  async ({id} : getDisucssIdParams) =>{
    try {
        const discussed = await Discussion.findById(id);
        console.log(discussed);
        return JSON.parse(JSON.stringify(discussed));
        
    } catch (error) {
        console.log(error);
        
    }
}


export const CreateReplyAction = async ({message , repliedUser  , postId}: createReplyParams)=>{
    try {
        await connectToDatabase();
        const user = await userAvailableorNot(repliedUser);
        const repliedUserId = user.id;
        const discuss = await Discussion.findById(postId);
        await discuss.reply.push({
            message:message,
            repliedUser:repliedUserId
        });
        await discuss.save();
        return JSON.parse(JSON.stringify(discuss));
        

    } catch (error) {
        console.log(error);
        
    }
}