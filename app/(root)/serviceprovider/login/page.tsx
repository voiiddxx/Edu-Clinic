import OrgLogin from '@/components/shared/services/OrgLogin'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex justify-center'>
      <div className='md:w-1/2 md:h-full md:bg-yellow-400'>
      <div className='md:h-full w-full md:bg-loginImage mx-0 my-0'></div>
      </div>
      <div className='md:w-1/2 md:h-full flex flex-col justify-center items-center'>
        <p className='font-semibold text-xl text-blue-700'>EduClinic</p>
        <p className='font-semibold text-2xl mt-2 text-zinc-800'>Welcome Back!</p>
        <p className='text-sm mt-2 text-zinc-500'>Please Enter Your Details</p>
        <div className='m-2'>
          <OrgLogin/>
        </div>

      </div>
    </div>
  )
}

export default page
