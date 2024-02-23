import StudentNav from '@/components/shared/student/StudentNav'
import { Plus } from 'lucide-react'
import React from 'react'

const page = () => {

    const res = [2,6,5,54,4,54,51,51,1];
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
            <p className='text-zinc-100'>Post Discussion</p>
                </div>
            </div>

        <div>
        {
            res.map((curr)=>{
                return <div className=' pb-5 w-full border-b hover:bg-slate-100 cursor-pointer'>
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
                    

                </div>
            })
        }
        </div>

        </div>
    </div>
  )
}

export default page
