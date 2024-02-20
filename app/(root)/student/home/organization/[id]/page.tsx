
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
import { getAllServices } from '@/lib/database/actions/service.action'
import { IService } from '@/lib/database/models/service.model'
import { getAllModule } from '@/lib/database/actions/module.action'


const page = async () => {


  const allServices = await getAllServices();
  const allModules = await getAllModule();
  
  return (
    <div className='min-h-screen w-full ' >
      <StudentNav/>
      <div className='h-[400px]  mx-8 my-4 bg-black rounded-lg bg-serviceBg flex justify-center items-center'>
        <h1 className='text-white font-semibold text-[50px]'>Explore The Intel Services</h1>
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
            <Select >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Service" />
        </SelectTrigger>
        <SelectContent >
          
          {
            allServices.map((curr : IService)=> {
              return <SelectItem  value="light">{curr.name}</SelectItem>
            })
          }
        </SelectContent>
      </Select>
      </div>

      </div>


          <StudentModule allModule={allModules} />



      
    </div>
  )
}

export default page
