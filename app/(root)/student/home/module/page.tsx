import StudentModule from '@/components/shared/student/StudentModule'
import StudentNav from '@/components/shared/student/StudentNav'
import { Input } from '@/components/ui/input'
import { getAllModule } from '@/lib/database/actions/module.action'
import { IModule } from '@/lib/database/models/module.model'
import { Flame } from 'lucide-react'
import React from 'react'

const page =  async () => {

    const allModules = await getAllModule();
  return (
    <div>
      <div>
     <StudentNav/>

     <div className='h-[200px] ml-12 bg-no-repeat mx-8 my-8 rounded-md bg-headerImage object-cover flex justify-center items-center flex-col gap-2 ' >
        <div className='flex items-center' >
            <Flame/>
        <h1 className='text-3xl font-bold text-zinc-800' >Modules</h1>
        </div>
        <p className='text-zinc-600' >You can explore all the services out there</p>
     </div>

     <div className='mx-12 flex flex-col items-center'>
     <div className='flex gap-2 items-center mt-5' >
    <Input className='w-[400px] border-[1px] border-zinc-700' placeholder='Type any module keywords' />
    <div className='h-10 rounded-sm w-44 bg-zinc-900 flex justify-center items-center' >
        <p className='text-white' >Search Modules</p>
    </div>
    </div>

    <div className='flex  mt-10' >
    
    <StudentModule allModule={allModules}/>
    </div>
     </div>
    </div>
    </div>
  )
}

export default page
