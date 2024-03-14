"use client"
  import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

  import { z } from "zod"

import { useState } from "react"
import { createModule, updateModule } from "@/lib/database/actions/module.action"
import { UploadOnCloudinary } from "@/lib/utils"
import UpskillingModuleForm from "../UpskillingModuleForm"
  
 
// const ModuleFormSchema = z.object({
//   name: z.string().min(2).max(50),
//   detail:z.string().min(2).max(800),
//   isPaid:z.enum(['free' , 'paid']),
//   url: z.string().min(7),
//   fees:z.string().min(2).max(20),
//   moduleCategory:z.string().min(2).max(10).optional(),
//   purpose:z.string().min(5).max(200).optional(),
//   material:z.string().min(5).max(200).optional(),
//   deleivery:z.string().min(5).max(200).optional(),
//   pace:z.string().min(5).max(200).optional(),
//   elegibility:z.string().min(5).max(200).optional(),
//   location:z.string().min(5).max(200).optional(),
  
  
// }).refine((data)=>{
//     if(data.isPaid=="paid"){
//         return !!data.fees
//     }
//     return true
// } , {
//     message:'Please Provide Ammount',
//     path:['fees']
// })
  
  type ModuleFormProps = {
    id: string
    type:'ADD' | 'UPDATE'
    moduleId?: any
    categoryName:string
  }

const ModuleForm = ({id , type , moduleId , categoryName} : ModuleFormProps) => {
  alert(categoryName)

    // const form = useForm<z.infer<typeof ModuleFormSchema>>({
    //     resolver: zodResolver(ModuleFormSchema),
    //     defaultValues: {
    //       name: "",
    //       detail:'',
    //       url:'',

    //     },
    //   })
     
      // 2. Define a submit handler.
    //   async function onSubmit(values: z.infer<typeof ModuleFormSchema>) {
       
    //     alert("this is working fine");
        

    //     if(type=="ADD"){
          
    //       try {
    //         // const imageurl = await UploadOnCloudinary(Image);
    //       let userToken = '';
    //         const token = localStorage.getItem('x-auth-token');
    //         if(token){
    //           userToken = token
    //         }
    //         const res = await createModule({module:{...values , image:'41515' ,  } , creatorId:userToken , serviceId:id ,});
    //         alert(res)
    //         console.log(res);
            
    //         console.log(values)
    //       } catch (error) {
    //         console.log(error);
            
    //       }
    //     }
    //     else{
    //       if(Image){
    //         const ImageUrl = await UploadOnCloudinary(Image);
    //         const res = await updateModule({module:{...values , image:ImageUrl} , moduleId:moduleId});
    //         console.log(res);
    //       }else{
    //         const res = await updateModule({module:{...values} , moduleId:moduleId});
    //         console.log(res);
    //       }

    //     }
    // }
          
      


  return (
    <div>

      {
        categoryName=='Upskilling Courses' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Upskilling" />
          </div>
        )
      }
      {
        categoryName=='Competitive Exam Resources' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Competetive" />
          </div>
        )
      }
      {
        categoryName=='Placement opportunity' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Placement opportunity"  />
          </div>
        )
      }
   
    </div>
  )
}

export default ModuleForm
