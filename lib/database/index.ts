"use server"

import mongoose from "mongoose";



let cached = (global as any).mongoose || {conn:null , promise:null};
const MONGOURI = process.env.MONGODB_URI;

const connectToDatabase = async() => {
    try {
            if(cached.conn){
                return cached.conn;
            }
            if(!MONGOURI){
                throw new Error("No mongodb uri found");
            }
            cached.promise = cached.promise || mongoose.connect(MONGOURI , {
                dbName:'EduClinic',
                bufferCommands:true
            }).then((res)=>{
                console.log('Databse get connected');
            }).catch((e)=>{
                console.log(e as string);
            })
            cached.conn = await cached.promise;
            return cached.conn;
    } catch (error) {
        console.log(error);
        throw new Error("Some database error cached");
    }
}


export default connectToDatabase;