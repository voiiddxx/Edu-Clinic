"use server"

import { createModuleParams } from "@/types";
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