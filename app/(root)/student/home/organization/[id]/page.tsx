
import StudentNav from '@/components/shared/student/StudentNav'
import { Flame } from 'lucide-react'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import StudentModule from '@/components/shared/student/StudentModule'
import { getAllServicearPerOrgId, getAllServices } from '@/lib/database/actions/service.action'
import { IService } from '@/lib/database/models/service.model'
import { getAllModule, studentGetOrgsModule } from '@/lib/database/actions/module.action'


const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {


  const allServices = await getAllServicearPerOrgId(id);
  const allModules = await studentGetOrgsModule({organizationId:id});




  
  return (
    <div className='min-h-screen w-full ' >
      <StudentNav/>
      <div className='h-[400px]  mx-8 my-4 bg-black rounded-lg bg-serviceBg flex justify-center items-center'>
        <h1 className='text-white font-semibold text-[50px]'>Explore The Intel Services</h1>
      </div>

      <div className='px-36 mt-10 text-zinc-900' >
        <div className='flex items-center gap-2' >
          <Flame/>
        <h1 className='text-2xl font-semibold' >Services</h1>
        </div>
        <p className='text-zinc-500 text-sm mt-2' >You Can explore all the services offered by them</p>
        <div className='flex mt-6 gap-6' >
       {
        allServices.map((curr : IService)=>{
          return  <div className='h-28 w-28 bg-blue-600 rounded-full flex justify-center items-center cursor-pointer' >
          <p className='text-white text-center' >{curr.name}</p>
        </div>
        })
       }
        </div>
      </div>

      <div className='flex justify-end px-8 py-16 items-center '>
      {/* <div className='px-8 py-4' >
      <div className='flex gap-2 items-center ' >
      <Flame/>
      <h1 className='text-xl font-semibold text-zinc-800' >  Explore Modules</h1>
      </div>
      <p className='text-zinc-500 text-sm mt-2' >You Can explore all organization out here and explore their services</p>
      </div> */}
      <div>
            <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Service" />
        </SelectTrigger>
        <SelectContent >
          
          {
            allServices.map((curr : IService)=> {
              return <SelectItem  value={curr._id}>{curr.name}</SelectItem>
            })
          }
        </SelectContent>
      </Select>
      </div>

      </div>


          <StudentModule allModule={allModules} type='ORGS' />



      
    </div>
  )
}

export default page
