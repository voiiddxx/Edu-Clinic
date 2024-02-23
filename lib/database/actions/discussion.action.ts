"use server"

import { CreateDiscussParams, createReplyParams } from "@/types";
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


export const getDuscuss = async ()=>{
    try {
        await connectToDatabase();
        const getDiscussion = await Discussion.find({});
        return JSON.parse(JSON.stringify(getDiscussion));
        
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
            repliedUser:repliedUser
        });
        await discuss.save();
        return JSON.parse(JSON.stringify(discuss));
        

    } catch (error) {
        console.log(error);
        
    }
}