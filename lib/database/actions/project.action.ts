"use server"

import { createProjectParams, getprojectWithIdParams } from "@/types";
import connectToDatabase from "..";
import { userAvailableorNot } from "./middelware";
import Project from "../models/project.model";


export const createProject = async ({name , detail , amount, college , isGranted , phone , poster , ppt , student } : createProjectParams) =>{
    try {
        await connectToDatabase();

        const user = await userAvailableorNot(student);
        const createdProject = await Project.create({
            name:name,
            detail:detail,
            ammount:amount,
            college:college,
            isGranted:isGranted,
            ppy:ppt,
            phone:phone,
            poster:poster,
            student:user.id
        });
        console.log(createdProject);
        return JSON.parse(JSON.stringify(createdProject));
    } catch (error) {
        console.log(error);
        
    }
}


export const getProject = async ()=>{
    try {
        await connectToDatabase();
        const projects = await Project.find({});
        return JSON.parse(JSON.stringify(projects));

    } catch (error) {
        console.log(error);
        
    }

}

export const getProjectWithId = async ({ id } : getprojectWithIdParams) =>{
    try {
        await connectToDatabase();
        const projectDetail = await Project.findById(id);
        return JSON.parse(JSON.stringify(projectDetail));
        
    } catch (error) {
        console.log(error);
        
    }

}