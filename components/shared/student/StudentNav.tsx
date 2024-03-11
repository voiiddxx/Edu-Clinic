import { LogOut, Router, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const StudentNav = () => {

  
  return (
    <div className='w-full border-b h-20 items-center flex justify-between px-32 ' >
        {/* Logo Div */}
        <div>
            <h1>EduClinic</h1>
        </div>


        {/* /All Of the middle nav are going to place here */}
        <div className='flex gap-8' >
            <Link href={`/student/home`}>  <p>Home</p></Link>
            <Link href={`/student/home/services`}>  <p>Services</p></Link>
            <Link href={`/student/home/module`}>  <p>Modules</p></Link>
            <Link href={`/student/home/organization`}>  <p>Organizations</p></Link>
            <Link href={`/student/home/discussion`}>  <p>Discussion</p></Link>
            <Link href={`/student/project`}>  <p>Project fundraising</p></Link>
            
        </div>


        {/* UserImage and Logout Button */}
        <div className='flex gap-6 items-center' >
            <div className='h-12 w-12 border-[1px] border-zinc-600 rounded-full flex justify-center items-center' >
            <Link href={`/student/profile`}>  <User className='text-blue-700' size={20} /></Link>
            </div>
            <div className='h-12 gap-2   bg-blue-700 rounded-sm flex items-center px-4' >
            <LogOut color='white' size={17} />
            <p className='text-sm font-normal text-white' >Logout</p>
                
                
            </div>
             </div>



    </div>
  )
}

export default StudentNav
