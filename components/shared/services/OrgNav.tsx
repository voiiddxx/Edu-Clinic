"use client"

import React from 'react'
import { ComboBox } from './utils/ComboBox'
import OrgMainnav from './utils/OrgMainnav'
import { LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

const OrgNav = () => {

  const router = useRouter();


  const LogoutNow = ()=>{
    
    localStorage.removeItem('x-auth-token');
    router.push('/');
  }

  return (
    <div className='h-20 border-b flex items-center justify-between px-32'>
        {/* combobox navbar for creating service  */}
        <div>
            <ComboBox/>
        </div>

        {/* Navbar for routes of particular services  */}
        <div>
            <OrgMainnav/>
        </div>


        {/* //useavartar and logout button  */}
        <div className='flex gap-4' >
          <div onClick={LogoutNow} className='h-12 w-12 border-[1px] border-zinc-300 rounded-md flex justify-center items-center'>
            <LogOut size={17}/>
          </div>
          <div className='h-12 w-12 border-[1px] border-zinc-300 rounded-full flex justify-center items-center'>
            <User className='text-blue-700' size={17}/>
          </div>
          

        </div>
    </div>
  )
}

export default OrgNav
