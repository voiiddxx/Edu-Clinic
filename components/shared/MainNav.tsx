import { LogIn, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MainNav = () => {
  return (
    <div className='w-full border-b h-24 items-center flex justify-between px-32 ' >
    {/* Logo Div */}
    <div  >
        <Image className='h-[150px] w-[150px]' src={`/mainlogo.svg`} height={500} width={500} alt='/mailLogo' />
    </div>


    {/* /All Of the middle nav are going to place here */}
    <div className='flex gap-8' >
        <p>Home</p>
        <p>Services</p>
        <p>Modules</p>
        <p>Organizations</p>
    </div>


    {/* UserImage and Logout Button */}
    <div className='flex gap-6 items-center' >
        <div className='h-12 w-12 border-[1px] border-zinc-600 rounded-full flex justify-center items-center' >
        <User className='text-blue-700' size={20} />
        </div>
        <div className='h-12 gap-2   bg-blue-700 rounded-sm flex items-center px-4' >
        <LogIn color='white' size={17} />
        <p className='text-sm font-normal text-white' >Logout</p>
            
            
        </div>
         </div>



</div>
  )
}

export default MainNav
