"use server"

import { RegisterStudentParams } from "@/types";
import connectToDatabase from "..";
import Student from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const RegisterStudent =  async ({student} : RegisterStudentParams) => {
    try {
        await connectToDatabase();
        const existingUser = await Student.findOne({email:student.email});
        if(existingUser){
            return JSON.parse(JSON.stringify({message:"User Already Exists"}));
        }
        else{
            const hashedPassword = bcrypt.hash(student.password , 10);
            const createdStudent = await Student.create({name:student.name , email:student.email , password:hashedPassword , mobile:student.mobile});
            return JSON.parse(JSON.stringify(createdStudent));
        }

    } catch (error) {
        console.log(error);
        
        throw new Error(error as string);
    }
}

export const LoginStudent = async ({student} : RegisterStudentParams) => {
    try {
        await connectToDatabase();
        const existUser = await Student.findOne({email:student.email});
        if(!existUser){
            return JSON.parse(JSON.stringify({message:"User not exist"}));
        }
        else{
            const IsMatch = await bcrypt.compare(student.password , existUser.password);
            if(!IsMatch){
                return JSON.parse(JSON.stringify({message:"Invalid Password"}));
            }
            else{
                const token = jwt.sign({id:existUser._id} , `${process.env.AUTH_KEY}`);

                return JSON.parse(JSON.stringify({...existUser , token}));
            }
        }
    } catch (error) {
        console.log(error);
        
        throw new Error(error as string);
    }
}