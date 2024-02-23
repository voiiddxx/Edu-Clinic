import AddDiscuss from '@/components/shared/student/AddDiscuss';
import StudentNav from '@/components/shared/student/StudentNav'
import { getDiscuss } from '@/lib/database/actions/discussion.action';
import { Plus } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const page = async () => {

    const res = [2,6,5,54,4,54,51,51,1];

    const discussReponse = await getDiscuss();
    console.log("this is discuss reponses",discussReponse);
    


  return (
    <div>
        <StudentNav/>
        <div className='w-full min-h-screen px-28'>
            <div className='h-24 w-full border-b flex  justify-between items-center'>
                <div className='flex flex-col justify-center'>
                <h1 className='text-zinc-900 font-semibold text-2xl' >Discussion Pannel</h1>
                <p>You can discuss whatever query you have</p>
                </div>
                <div className='h-10  py-2 px-2 bg-zinc-900 rounded-md flex justify-center items-center gap-1'>
            <Plus className='text-zinc-200' />
            <AddDiscuss/>
                </div>
            </div>

        <div>
        {
            discussReponse.map((curr : any)=>{
                return <Link href={`/student/home/discussion/${curr._id}`} >
                <div className=' pb-5 w-full border-b hover:bg-slate-100 cursor-pointer'>
                    <div className='flex  gap-2 mt-4'>
                        <div className='h-10 w-10 rounded-full bg-yellow-500'></div>
                        <div>
                            <h1 className='font-medium mt-1'>Want to buy course</h1>
                        </div>
                    </div>
                    <div className='text-sm text-zinc-700 ml-12 mr-20' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellat commodi temporibus libero inventore at corrupti et facere velit porro magnam repudiandae nemo excepturi blanditiis autem quam illo debitis fugiat dolore mollitia itaque amet. Minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus pariatur repellat rem labore dignissimos.
                    </div>
                    <div className='flex justify-end mr-14'>
                    <p className='text-sm text-indigo-400'>Created by | Nikhil Kumar</p>
                    </div>
                    

                </div></Link>
            })
        }
        </div>

        </div>
    </div>
  )
}

export default page
