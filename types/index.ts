import { string } from "zod"


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

export type registerOrganizationParams = {
    organization:{
        orgName:string
        orgDesciption?:string
        orgWebsite?:string
        orgEmail:string
        orgPassword:string
        orgCategory:string
        orgPhone:string
        orgHq?:string
        orgImage?:string
        approvalStatus?:string
        
    }
}

export type LoginOrganizationParams = {
    organization:{
        orgEmail:string
        orgPassword:string
    }
}



export type OrgCategoryParams = {
    categoryName: string
}

export type createServiceParams = {
    userToken:any
    service:{
        serviceName:string,
         serviceCategory:string
    }
}


export type CreateServiceCategoryParams = {
    category:{
        name: string
    }
}


export type createModuleParams = {
    serviceId:string
    creatorId:string
    module:{
        name?: string,
        detail?:string,
        image?:string
        isPaid?: 'paid' | 'free'
        fees?: string
        likes?:[]
        review?:[],
        purpose?:string
        material?:string
        deleivery?:string
        pace?:string
        elegibility?:string
        location?:string
        moduleCategory?:string
        url?:string
        level?:string
    }
}


export type getOrgModuleParams = {
    organizationId?: string,
    serviceId?: string
}

export type UpdateModuleParams = {
    moduleId: string,
    module:{
        name?: string,
        detail?:string,
        image?:string
        isPaid?: 'paid' | 'free'
        fees?: string
    }

}
export type DeleteModuleParams = {
    moduleId: string,
}

export type  getModulewithid = {
    id: string
}

export type addTolikeParams = {
    userId: string
    moduleId: string
}




export type postReviewParams = {
    studentId:string
    moduleId:string
    message:string
}




export type CreateDiscussParams = {
    userToken: string,
    image?:string
    message: string,
    title:string
}


export type createReplyParams = {
    postId: string
    repliedUser: string
    message:string
} 


export type getDisucssIdParams = {
    id: string
}


export type createProjectParams = {
    name: string
    detail:string,
    isGranted:string
    amount:string
    ppt:string
    college:string
    phone:string
    poster:string
    mail:string
    student:string

}

export type getprojectWithIdParams = {
    id:string
}


export type registerExpertParams = {
    expert:{
    name:string,
    email:string
    password:string,
    occupation:string,
    workProof:string,
    resume:string,
    }
}


export type loginExpertParams = {
    email:string,
    password:string,
}


export type ApplyforApprovalParams = {
    org:{
        orgDescription:string
        orgHq:string
        orgWebsite: string
        OrgImage:string
        orgId:string
    }
}

export type ApproveParams = {
    orgId:string
}


export type rejectApprovalParams = {
    orgId : string,
    message:string,
}

