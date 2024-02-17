import { Schema, model, models } from "mongoose";


const StudentSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String
    },
    instituion:{
        type: String,
    },
    mobile:{
        type: String,
    }
});

const Student = models.Student || model("Student" , StudentSchema);

export default Student;

