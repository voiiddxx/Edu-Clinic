import { Building2, LogIn, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartNav = () => {
  return (
    <div className='w-full border-b h-24 items-center flex justify-between px-32 ' >
    {/* Logo Div */}
    <div  >
        <Image className='h-[150px] w-[150px]' src={`/mainlogo.svg`} height={500} width={500} alt='/mailLogo' />
    </div>


    {/* /All Of the middle nav are going to place here */}
    


    {/* UserImage and Logout Button */}
    <div className='flex gap-6 items-center' >
        
        <Link href={`/serviceprovider/login`}>
        <div className='h-12 gap-2   border-[1px] border-blue-700 rounded-sm flex items-center px-4' >
        <Building2 className='text-blue-700' size={17} />
        <p className='text-sm font-normal text-blue-700' >Login as organization</p>
        </div></Link>
        <Link href={`/student/auth/login`} >
        <div className='h-12 gap-2   bg-blue-700 rounded-sm flex items-center px-4' >
        <User className='text-white' size={17} />
        <p className='text-sm font-normal text-white' >Login as student</p>
        </div>
        </Link>
         </div>



</div>
  )
}

export default StartNav
