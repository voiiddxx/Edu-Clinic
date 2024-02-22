import OrgNav from '@/components/shared/services/OrgNav'
import { getModuleWithId } from '@/lib/database/actions/module.action'
import React from 'react'

const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {

    const data = ['5', '5', '5', '5', '5', '5', '5', '5',]

    const getModuleDetail = await getModuleWithId({id:id});

    
    
  return (
    <div>
      <OrgNav/>
      <div className='h-24 border-b  mx-40 flex  flex-col justify-center'>
        <h1 className='text-xl font-semibold' >Feedbacks(4) </h1>
        <p className='text-zinc-500' >All of the feedbacks related to react js training</p>
      </div>
      <div className=' min-h-screen mx-40 my-6' >
        {
            getModuleDetail.review.length < 1 ? <p>No Data Found</p> :
            <div>
                {
                                getModuleDetail.review.map((curr : any)=>{
                        return <div className='pb-4 w-full border-b  flex items-start gap-4' >
                        <div className='flex'>
                          <div className='h-12 w-12 border-[1px] border-zinc-700 mt-6 rounded-full flex justify-center items-center '>
                            <div className='bg-red-500 h-10 w-10 rounded-full  '></div>
                          </div>
                        </div>
                        <div className='mt-5'>
                          <p className='font-semibold text-zinc-800' >Nikhil Kumar</p>
                          <p className='mr-32 text-sm text-zinc-700' >{curr.message}</p>
                        </div>
                      </div>
                    })
                }
            </div>
        }
      </div>
    </div>
  )
}

export default page
