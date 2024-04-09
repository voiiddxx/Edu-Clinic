"use server"

import { RegisterStudentParams, StudentLoginParams, UpdateStudentParams } from "@/types";
import connectToDatabase from "..";
import Student from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const RegisterStudent = async ({ student }: RegisterStudentParams) => {
    try {
        await connectToDatabase();
        const existingUser = await Student.findOne({ email: student.email });
        if (existingUser) {
            return JSON.parse(JSON.stringify({ message: "User Already Exists" }));
        }
        else {
            const hashedPassword = await bcrypt.hash(student.password, 10);
            const createdStudent = await Student.create({ name: student.name, email: student.email, password: hashedPassword, instituion: student.instituion, mobile: student.mobile });
            console.log(createdStudent);
            return JSON.parse(JSON.stringify(createdStudent));
        }

    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}

export const LoginStudent = async ({ student }: StudentLoginParams) => {
    try {
        await connectToDatabase();
        const existUser = await Student.findOne({ email: student.email });
        if (!existUser) {
            return JSON.parse(JSON.stringify({ message: "User not exist" }));
        }
        else {
            const IsMatch = await bcrypt.compare(student.password, existUser.password);
            if (!IsMatch) {
                return JSON.parse(JSON.stringify({ message: "Invalid Password" }));
            }
            else {
                const token = jwt.sign({ id: existUser._id }, "x-auth-token-secure-key");
                console.log("this is existing user", existUser);
                console.log("this is token of existing user", token);



                return JSON.parse(JSON.stringify({ ...existUser._doc, token }));
            }
        }
    } catch (error) {
        console.log(error);

        throw new Error(error as string);
    }
}



//  server action for updating the student data

export const UpdateStudentData = async ({ student, studentId }: UpdateStudentParams) => {
    await connectToDatabase();
    try {

        const StudentUpdated = await Student.findByIdAndUpdate(studentId, {
            ...student
        },
            {
                new: true
            },
        );


        if (!StudentUpdated) {
            return JSON.parse(JSON.stringify({ message: "Some issue occured" }));
        }
        return JSON.parse(JSON.stringify({ message: "OK" }));
    } catch (error) {
        console.log(error);
        return JSON.parse(JSON.stringify({error:error}));

    }
}