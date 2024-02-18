

export type RegisterStudentParams = {
    student:{
    name: string,
    email:string,
    password:string,
    instituion:string
    mobile:string
    }
}

export type StudentLoginParams = {
    student:{
    email:string,
    password:string,
    }
}

