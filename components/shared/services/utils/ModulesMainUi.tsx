"use client"

import { getAllOrganizationModule } from "@/lib/database/actions/module.action";
import { IModule } from "@/lib/database/models/module.model";
import { Edit, Grid, IndianRupee, MoreVertical, Sparkle, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import ModuleForm from "./ModuleForm";
import Image from "next/image";
  


type ModuleMainUiProps = {
    serviceId: string
    moduleCategoryId:string
}






const ModulesMainUi = ({serviceId , moduleCategoryId} : ModuleMainUiProps) => {

    const [Modules, setModules] = useState<IModule[]>([]);

    
    let usertoken = '';

    if (typeof window !== 'undefined') {
       const token = localStorage.getItem('x-auth-token');
        if(token){
            usertoken = token;
        }
      }
  

      useEffect(()=>{
        const fetchModule = async () =>{
            try {
                const res = await getAllOrganizationModule({organizationId:usertoken , serviceId:serviceId});
                setModules(res as IModule[]);
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchModule();
      } , [])
      
  return (
    <div className="min-h-screen w-full">
      {
        Modules.length < 1 ? <div className="w-full md:mt-56 mt-3 flex justify-center items-center">
            <div className=" md:px-20 md:py-14 px-2 py-2 bg-slate-100 rounded-md flex flex-col justify-center items-center ">
            <p className="text-xl font-semibold" > No Module </p>
            <p>Please create new module</p>
            </div>
        </div> : <div className="min-h-screen w-full md:pl-36 p-2 pt-7" >
            <p className="text-zinc-800" >Your Modules are Shown below</p>
            <div className="mt-8 flex gap-4 flex-wrap">
                {
                    Modules.map((curr : IModule)=>{
                        return <div className="  border-[1px] border-zinc-300 rounded-lg" >
                            <div className="h-[250px] w-[280px]  mx-2 my-2 rounded-md">
                                <Image className="h-[250px] w-[280px] object-cover rounded-md" src={curr.image} height={600} width={700} alt="moduleimage"/>
                            </div>
                            <div className="mx-2 my-2 w-[280px]">
                            <p className="mt-4 font-semibold text-zinc-900" >{curr.name}</p>
                            <p className="text-[10px] mt-2 text-zinc-600" > {curr.detail}</p>
                            <div className="flex gap-1 items-center mt-2 w-full" >
                                <div className="bg-blue-50 rounded-sm flex items-center gap-1 px-2 py-1">
                                {
                                    curr.isPaid == 'paid' ? <div className="flex items-center" >
                                        <IndianRupee className="text-blue-800" size={15}/>
                                <p className="text-[14px] font-normal text-blue-700" >{curr.fees}</p>
                                    </div> : <div className="flex items-center gap-1" ><Sparkle className="text-blue-800" size={15}/>
                                    <p className="text-[14px] font-normal text-blue-700" >Free</p></div>
                                }
                                </div>
                               
                            </div>
                            <div className="h-6 w-full" ></div>
                            <div className="flex justify-between my-2">
                                <p  className="text-[13px] font-normal text-zinc-600"  > 
                                Created | {curr.creatorId}
                                </p>
                                
                                <Popover>
                                    <PopoverTrigger>
                                    <MoreVertical className="text-zinc-800" size={16} />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-44" >
                                        <ModuleForm categoryName=""  type="UPDATE" id={serviceId} moduleId={curr.id} moduleCategoryId={moduleCategoryId} />
                                        <div className="border-b mt-1 mb-1 "></div>
                                        <div className="flex gap-2 items-center mt-5 " >
                                    <Trash className="text-red-700" size={15}/>
                                    <p className="text-red-700" >Delete</p>
                                        </div>
                                    </PopoverContent>
                                    </Popover>

                            </div>
                            
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        
      }
      {/* {Modules.length} */}
    </div>
  )
}

export default ModulesMainUi
