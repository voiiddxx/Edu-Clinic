import StudentModule from '@/components/shared/student/StudentModule'
import StudentNav from '@/components/shared/student/StudentNav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAllModule, getModuleWithId, studentGetOrgsModule } from '@/lib/database/actions/module.action'
import { Clock, Flame, Heart, IndianRupee, Sparkle, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {

    const moduleDetails = await getModuleWithId({id:id});
    console.log(moduleDetails);

    const allModules = await studentGetOrgsModule({serviceId:moduleDetails.serviceId});
    

    const res = ['gg','kj' , 'gg','kj' ]

  return (
    <div>
      <StudentNav/>
      <div className='px-40'>
        <div className='h-20 w-full border-b flex  justify-between items-center' >
          <div>
          <div className='flex items-center gap-1'>
            <Flame className='text-blue-600' />
           <h1 className='text-xl text-blue-700 font-bold' >{moduleDetails.name}</h1>
           </div>
            <p className='text-zinc-500' >Learn complete react js with just one training course</p>
          </div>
          <div className='flex items-center gap-2' >
          <div className='h-10 w-10 border-[1px]  rounded-full flex justify-center items-center hover:bg-red-500 text-red-600 hover:text-white' >
            <Heart className='' size={17}/>
          </div>
          <p>50 Peoples liked</p>
          </div>
           
        </div>
        <div className='flex justify-between items-start gap-12' >
        
        <div className='  border-[1px] border-zinc-500 flex items-center justify-center mt-12 rounded-xl ' > 
        <div className='mx-4 my-4 bg-zinc-200 h-[400px] w-[500px] rounded-lg' >
            <Image className='h-[400px] w-[500px] object-cover rounded-lg' src={moduleDetails.image} height={800} width={800} alt='moduleimage'/>
        </div>
        </div>
        <div className='mt-20 pr-20' >
            <h1 className='text-lg font-semibold' >{moduleDetails.name}</h1>
            <p className='text-sm mt-4 text-zinc-700' >
                {moduleDetails.detail} Cupiditate error provident iste veritatis officia a saepe aut cumque, odio ex facilis ab voluptatem pariatur eaque. Lorem ipsum dolor sitb8=9 -hyi0n amet consectetur adipisicing elit. Debitis, omnis? Reprehenderit neque quidem hic et est consectetur repellendus iure ad.
            </p>
            <div className='mt-4 flex gap-5' >
                <div className='h-10 w-28 bg-slate-300 rounded-3xl' >
                <div className='h-10 w-64 bg-orange-100 rounded-3xl flex gap-1 justify-center items-center' >
                    <Zap className='text-orange-700' size={17} />
                    <p className='text-orange-800 font-normal' >Web Development</p>
                </div>
                </div>
            </div>
            <div className='mt-5 h-10 w-28 bg-green-100 rounded-3xl flex gap-1 justify-center items-center' >
                    <Sparkle className='text-green-800' size={17} />
                    <p className='text-green-800 font-normal' >{moduleDetails.isPaid}</p>
                </div>
                <div className='flex items-center mt-7 gap-10'>
                    <div className='flex items-center gap-2'>
                    <Clock className='text-yellow-700' size={17}/>
                    <p className='font-semibold' >5 January 2025</p>
                    </div>
                    {
                        moduleDetails.isPaid == 'paid' && (
                            <div className='flex gap-2 items-center'>
                    <IndianRupee className='text-yellow-700' size={17}/>
                    <p className='font-semibold' >{moduleDetails.fees}</p>
                    </div>
                        )
                    }
                </div>
                <div>
                   <Link href={`/${moduleDetails.url}`} >
                   <Button className='w-full mt-12 bg-zinc-800 hover:bg-blue-700'>
                        Visit   for more info
                    </Button></Link>
                </div>
        </div>
        </div>
      </div>
      <div className='h-20'>
      </div>
      <div className='px-40 mb-20' >
        <h1 className='text-xl font-semibold' >Feedbacks (5) </h1>
        <p>All the feedbacks out there for this module</p>
        <div>
        <div className='flex gap-2 items-center mt-5' >
    <Input className='w-[400px] border-[1px] border-zinc-700' placeholder='Type your review' />
    <div className='h-10 rounded-sm w-44 bg-zinc-900 flex justify-center items-center' >
        <p className='text-white' >Submit Review</p>
    </div>    
    </div>
    <div className='flex gap-2 flex-col mt-10' >
      {
        res.map((curr)=>{
          return <div className='pb-4 w-full border-b  flex items-start gap-4' >
            <div className='flex'>
              <div className='h-12 w-12 border-[1px] border-zinc-700 mt-6 rounded-full flex justify-center items-center '>
                <div className='bg-red-500 h-10 w-10 rounded-full  '></div>
              </div>
            </div>
            <div className='mt-5'>
              <p className='font-semibold text-zinc-800' >Nikhil Kumar</p>
              <p className='mr-32 text-sm text-zinc-700' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis reiciendis fugit commodi alias autem. Lorem ipsum dolor, sit amet consectetur  </p>
            </div>
          </div>
        })
      }
    </div>
        </div>

      </div>
      <StudentModule allModule={allModules}/>
      
    </div>
  )
}

export default page
