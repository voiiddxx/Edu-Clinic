import { Input } from '@/components/ui/input'
import { Check, CheckCheck, Rocket } from 'lucide-react'
import React from 'react'

const StudentHero = () => {
  return (
    <div className='min-h-screen bg-studentImage bg-no-repeat w-full flex flex-col justify-start items-center ' > 
    <div className='mt-32 flex flex-col justify-center items-center px-96'>
        <div className='bg-slate-50 rounded-3xl px-6 py-1 mb-2 flex gap-3 items-center' >
            <Rocket className='text-blue-600'  size={18}/>
            <p className='text-blue-600'>Explore Services</p>
        </div>
    <h1 className='font-bold text-5xl text-zinc-900' >Explore Your Educatinol </h1>
    <h1 className='font-bold text-5xl text-zinc-900 mt-3' >  <span className='text-blue-700 underline' >Marketplace</span> At One Place</h1>
    <p className='text-center mt-4 text-zinc-400' >
        Explore your all market place such as you can explore the service providers or the organizers who serve services for students growth and upskilling now its time to grow
    </p>
    </div>
    <div className='flex gap-2 items-center mt-5' >
        <Input className='w-[400px]' placeholder='Search for your services...' / >
    <div className='h-10 rounded-sm w-44 bg-blue-700 flex justify-center items-center' >
        <p className='text-white' >Search Services</p>
    </div>
    </div>
    <div className='flex gap-9 mt-16' >
        <div className='flex gap-2 items-center'>
            <CheckCheck className='text-blue-700' size={15}/>
            <p className='text-[14px] text-zinc-800' >Artificial Intelligenece</p>
        </div>
        <div className='flex gap-2 items-center'>
            <CheckCheck className='text-blue-700' size={15}/>
            <p className='text-[14px] text-zinc-800' >Web Development</p>
        </div>
        <div className='flex gap-2 items-center'>
            <CheckCheck className='text-blue-700' size={15}/>
            <p className='text-[14px] text-zinc-800' >Internships</p>
        </div>
        <div className='flex gap-2 items-center'>
            <CheckCheck className='text-blue-700' size={15}/>
            <p className='text-[14px] text-zinc-800' > Courses</p>
        </div>
        <div className='flex gap-2 items-center'>
            <CheckCheck className='text-blue-700' size={15}/>
            <p className='text-[14px] text-zinc-800' >Trainings</p>
        </div>
    </div>
  </div>
  )
}

export default StudentHero
