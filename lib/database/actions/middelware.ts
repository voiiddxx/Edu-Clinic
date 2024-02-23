"use server"
import connectToDatabase from "..";
import jwt from "jsonwebtoken";
import Organization from "../models/serviceprovider.model";





export const userAvailableorNot = async (userToken: any) => {
    try {
        await connectToDatabase();
        
        if(!userToken){
            return JSON.parse(JSON.stringify({message:'Token not found'}));
        }
        const Valid = jwt.verify(userToken , `${process.env.AUTH_KEY}`);
     
        
        if(!Valid){
            return JSON.parse(JSON.stringify({message:"token not authorized"}));
        }
        else{
        return Valid;
        }

    } catch (error) {
        console.log(error);
        
    }
}