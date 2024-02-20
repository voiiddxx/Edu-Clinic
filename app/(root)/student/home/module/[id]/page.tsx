import StudentNav from '@/components/shared/student/StudentNav'
import { Button } from '@/components/ui/button'
import { Clock, Flame, IndianRupee, Sparkle, Zap } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <StudentNav/>
      <div className='px-40'>
        <div className='h-20 w-full border-b flex flex-col justify-center' >
           <div className='flex items-center gap-1'>
            <Flame className='text-blue-600' />
           <h1 className='text-xl text-blue-700 font-bold' >React Js Training</h1>
           </div>
            <p className='text-zinc-500' >Learn complete react js with just one training course</p>
        </div>
        <div className='flex justify-between items-start gap-12' >
        
        <div className='  border-[1px] border-zinc-500 flex items-center justify-center mt-12 rounded-xl ' > 
        <div className='mx-4 my-4 bg-zinc-200 h-[400px] w-[500px] rounded-lg' ></div>
        </div>
        <div className='mt-20 pr-20' >
            <h1 className='text-lg font-semibold' >ReactJs Trainign and Course</h1>
            <p className='text-sm mt-4 text-zinc-700' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error provident iste veritatis officia a saepe aut cumque, odio ex facilis ab voluptatem pariatur eaque. Lorem ipsum dolor sitb8=9 -hyi0n amet consectetur adipisicing elit. Debitis, omnis? Reprehenderit neque quidem hic et est consectetur repellendus iure ad.
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
                    <p className='text-green-800 font-normal' >Free</p>
                </div>
                <div className='flex items-center mt-7 gap-10'>
                    <div className='flex items-center gap-2'>
                    <Clock className='text-yellow-700' size={17}/>
                    <p className='font-semibold' >5 January 2025</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <IndianRupee className='text-yellow-700' size={17}/>
                    <p className='font-semibold' >2999</p>
                    </div>
                </div>
                <div>
                    <Button className='w-full mt-12 bg-zinc-800 hover:bg-blue-700'>
                        Visit for more info
                    </Button>
                </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default page
