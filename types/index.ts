

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
        orgEmail:string
        orgPassword:string
        orgCategory:string
        orgPhone:string
        orgHq:string
        orgImage:string
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
        name: string,
        detail:string,
        image:string
        isPaid: 'paid' | 'free'
        fees: string
        likes?:[]
        review?:[]
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

