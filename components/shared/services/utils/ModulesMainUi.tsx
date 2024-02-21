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
  


type ModuleMainUiProps = {
    serviceId: string
}






const ModulesMainUi = ({serviceId} : ModuleMainUiProps) => {

    const [Modules, setModules] = useState<IModule[]>([]);

    
    let usertoken = '';

    if (typeof window !== 'undefined') {
       const token = localStorage.getItem('x-auth-token');
        if(token){
            usertoken = token;
        }
      }
  
      console.log("this is usertokn" , usertoken);

      useEffect(()=>{
        const fetchModule = async () =>{
            try {
                const res = await getAllOrganizationModule({organizationId:usertoken , serviceId:serviceId});
                setModules(res as IModule[]);
                console.log("this is service id" , res);
                
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchModule();
      } , [])
      
  return (
    <div className="min-h-screen w-full">
      {
        Modules.length < 1 ? <div className="w-full mt-56 flex justify-center items-center">
            <div className=" px-20 py-14 bg-slate-100 rounded-md flex flex-col justify-center items-center ">
            <p className="text-xl font-semibold" > No Module </p>
            <p>Please create new module</p>
            </div>
        </div> : <div className="min-h-screen w-full pl-36 pt-7" >
            <p className="text-zinc-800" >Your Modules are Shown below</p>
            <div className="mt-8 flex gap-4 flex-wrap">
                {
                    Modules.map((curr : IModule)=>{
                        return <div className="  border-[1px] border-zinc-300 rounded-lg" >
                            <div className="h-[250px] w-[280px] bg-blue-600 mx-2 my-2 rounded-md">
                            </div>
                            <div className="mx-2 my-2 w-[280px]">
                            <p className="mt-4 font-semibold text-zinc-900" >{curr.name}</p>
                            <p className="text-[10px] mt-2 text-zinc-600" > {curr.detail}Learn AI/ML and grab the most demanding and paying </p>
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
                                Created | Intel
                                </p>
                                
                                <Popover>
                                    <PopoverTrigger>
                                    <MoreVertical className="text-zinc-800" size={16} />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-44" >
                                        <ModuleForm type="UPDATE" id={serviceId} moduleId={curr.id} />
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
