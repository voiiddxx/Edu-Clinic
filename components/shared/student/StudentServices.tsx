import { IService } from '@/lib/database/models/service.model'
import { Flame } from 'lucide-react'
import React from 'react'

  type studentServiceParams = {
    services:any

  }
const StudentServices = ({services}:studentServiceParams) => {

  console.log("this is all services" , services);
  

  return (
    <div className='pb-20 w-full px-40' >
    <div className='flex gap-2 items-center' >
    <Flame/>
    <h1 className='text-xl font-semibold text-zinc-800' >  Explore Services</h1>
    </div>
    <p className='text-zinc-500 text-sm mt-2' >You can explore all the services run by organizations and connect</p>
    {
      services.length > 1 && (
          <div className='flex gap-4 flex-wrap mt-8'>
              {
                  services.map((curr : IService)=>{
                      return <div className='flex flex-col gap-2 items-center justify-center' >
                          <div className=' rounded-md px-4 py-4 bg-slate-100 flex justify-center items-center hover:bg-blue-700 hover:text-white cursor-pointer ' >
                        <p>{curr.name}</p>
                          </div>
                         
                      </div>
                  })
              }
          </div>
      )
    }
  </div>
  )
}

export default StudentServices
