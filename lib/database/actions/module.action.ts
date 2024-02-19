"use server"

import { createModuleParams } from "@/types";
import connectToDatabase from "..";
import Module from "../models/module.model";
import { model } from "mongoose";


export const createModule = async ({serviceId , creatorId , module} : createModuleParams) => {
    try {
        await connectToDatabase();
        const createdModule = await Module.create({...module , serviceId:serviceId , creatorId:creatorId});
        return JSON.parse(JSON.stringify(createdModule));
    } catch (error) {
        console.log(error);
        
    }
}