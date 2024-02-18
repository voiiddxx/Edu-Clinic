"use server"

import { OrgCategoryParams } from "@/types";
import connectToDatabase from "..";
import Organizationcategory from "../models/category.model";

export const addOrgCategory = async ({categoryName} : OrgCategoryParams) => {
    try {
        await connectToDatabase();

        const createdcategory = await Organizationcategory.create({name:categoryName});
        console.log(createdcategory);
        
        return JSON.parse(JSON.stringify(createdcategory));
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}

export const getOrgCategory =  async () => {
    try {
        await connectToDatabase();
        const categoreis = await Organizationcategory.find({});
        return JSON.parse(JSON.stringify(categoreis));
    } catch (error) {
        console.log(error);
        
    }
}