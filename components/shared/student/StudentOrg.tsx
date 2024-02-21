"use client"

import { IOrganization } from '@/lib/database/models/serviceprovider.model'
import { Flame} from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'





type StudentOrgsParams = {
  organization:any
}
const StudentOrg = ({organization} : StudentOrgsParams) => {
  
  const router = useRouter();
  
  
  return (
    <div className='pb-20 w-full px-40' >
      <div className='flex gap-2 items-center' >
      <Flame/>
      <h1 className='text-xl font-semibold text-zinc-800' >  Explore Organizations</h1>
      </div>
      <p className='text-zinc-500 text-sm mt-2' >You Can explore all organization out here and explore their services</p>
      {
        organization.length > 1 && (
            <div className='flex gap-4 flex-wrap mt-8'>
                {
                    organization.map((curr:IOrganization)=>{
                        return <div onClick={()=>{
                          router.push(`/student/home/organization/${curr._id}`)
                        }} className='flex flex-col gap-2 items-center justify-center cursor-pointer' >
                            <div className='h-28 w-28 rounded-full bg-blue-900' >
                              <Image className='h-28 w-28 rounded-full object-cover' src={curr.orgImage} height={400} width={500} alt='orgImage' />
                            </div>
                            <div className='w-40'>
                            <p className='text-center' >{curr.orgName}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        )
      }
    </div>
    
  )
}

export default StudentOrg
