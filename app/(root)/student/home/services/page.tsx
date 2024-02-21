import StudentNav from '@/components/shared/student/StudentNav'
import { Input } from '@/components/ui/input'
import { getAllServices } from '@/lib/database/actions/service.action'
import { IService } from '@/lib/database/models/service.model'
import { Flame } from 'lucide-react'
import React from 'react'

const page = async () => {

    const Services = await getAllServices();


  return (
    <div>
     <StudentNav/>

     <div className='h-[200px] ml-12 bg-no-repeat mx-8 my-8 rounded-md bg-headerImage object-cover flex justify-center items-center flex-col gap-2 ' >
        <div className='flex items-center' >
            <Flame/>
        <h1 className='text-3xl font-bold text-zinc-800' >Services</h1>
        </div>
        <p className='text-zinc-600' >You can explore all the services out there</p>
     </div>

     <div className='mx-12 flex flex-col items-center'>
     <div className='flex gap-2 items-center mt-5' >
    <Input className='w-[400px] border-[1px] border-zinc-700' placeholder='Type any Services or module' />
    <div className='h-10 rounded-sm w-44 bg-zinc-900 flex justify-center items-center' >
        <p className='text-white' >Search Services</p>
    </div>
    </div>

    <div className='flex gap-5 mt-10' >
    {
        Services.map((curr : IService)=> {
            return <div className=' bg-white flex justify-center items-center px-4 py-4 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ' >
                <h1 className='text-zinc-800 font-normal'>{curr.name}</h1>
            </div>
        })
    }
    </div>
     </div>
    </div>
  )
}

export default page
