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
        <div className='md:px-40 px-2 min-h-screen flex flex-col justify-between' >
            <div>
            <div className='h-20 border-b flex items-center'>
                <h1 className='text-xl font-semibold' >{discussDetail.title}</h1>
            </div>
            <p className='text-indigo-500 mt-4'>Explainded</p>
            <p className='text-sm mt-4 text-zinc-700' >{discussDetail.message}.</p>

            <p className='text-indigo-600 mt-10'>Replies</p>
            <div>
            {
                discussDetail.reply.map((curr : any)=>{
                    return <div className=' pb-5 w-full border-b hover:bg-slate-100 cursor-pointer'>
                  
                    <div className='mt-3 flex items-center' >
                      <div className='h-12 w-12 rounded-full bg-red-400'></div>
                      <p className='mx-2'> {curr.message} </p>
                    </div>
                      
  
                  </div>
                })
            }
            </div>
            </div>
        <ReplyComponent postId={discussDetail._id} />
           
        </div>
    </div>
  )
}

export default page
