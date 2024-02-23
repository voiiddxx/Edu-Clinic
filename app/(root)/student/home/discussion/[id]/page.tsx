import ReplyComponent from '@/components/shared/student/ReplyComponent';
import StudentNav from '@/components/shared/student/StudentNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getDiscussWithId } from '@/lib/database/actions/discussion.action';
import React from 'react'

const page =  async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {


    const discussDetail = await getDiscussWithId({id:id});


    
    console.log("this is id of dedicated discussion pannel" , id);
  return (
    <div  >
        <StudentNav/>
        <div className='px-40 min-h-screen flex flex-col justify-between' >
            <div>
            <div className='h-20 border-b flex items-center'>
                <h1 className='text-xl font-semibold' >{discussDetail.title}</h1>
            </div>
            <p className='text-indigo-500 mt-4'>Explainded</p>
            <p className='text-sm mt-4 text-zinc-700' >{discussDetail.message}.</p>
            </div>
        <ReplyComponent postId={discussDetail._id} />
           
        </div>
    </div>
  )
}

export default page
