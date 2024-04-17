"use client"

import React from 'react'
import { ComboBox } from './utils/ComboBox'
import OrgMainnav from './utils/OrgMainnav'
import { LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const OrgNav = () => {

  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const LogoutNow = ()=>{
    
    localStorage.removeItem('x-auth-token');
    router.push('/');
  }

  return (
    <div className='h-20 border-b flex items-center justify-between md:px-32 px-2'>
       {/* Mobile Navigation Button */}
       <button
        className="md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg className="w-6 h-6 fill-current text-gray-700" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
        {/* combobox navbar for creating service  */}
        <div>
            <ComboBox/>
        </div>

        {/* Navbar for routes of particular services  */}
        <div className={`md:flex gap-8 p-5 md:relative absolute md:top-0 top-16 bg-white z-50 left-0  space-x-4 rounded-r-lg shadow-lg md:shadow-none  ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}>
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
