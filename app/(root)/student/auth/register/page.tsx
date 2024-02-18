import StudentRegisterForm from '@/components/shared/StudentRegisterForm'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex'>
      <div className='w-1/2 h-full bg-yellow-400'>
      </div>
      <div className='w-1/2 h-full flex flex-col justify-center items-center'>
        <p className='font-semibold text-xl text-blue-700'>EduClinic</p>
        <p className='font-semibold text-2xl mt-2 text-zinc-800'>Welcome Back!</p>
        <p className='text-sm mt-2 text-zinc-500'>Please Enter Your Details</p>
        <div>
          <StudentRegisterForm/>
        </div>

      </div>
    </div>
  )
}

export default page
