import StudentModule from '@/components/shared/student/StudentModule'
import StudentNav from '@/components/shared/student/StudentNav'
import { studentGetOrgsModule } from '@/lib/database/actions/module.action'
import React from 'react'

const page =  async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {

    const allModuleforservice = await studentGetOrgsModule(({serviceId:id}));
    console.log("this is trhe value do moduke" , allModuleforservice);
    

  return (
    <div>
        <StudentNav/>
        <div className='min-h-screen' >
            <div className='h-20 border-b flex items-center gap-2 px-40 mb-10' >
                <h1 className='text-2xl font-bold text-zinc-800' >Internship Training ({allModuleforservice.length}) </h1>
            </div>
            <StudentModule allModule={allModuleforservice}  />
        </div>
    </div>
  )
}

export default page
