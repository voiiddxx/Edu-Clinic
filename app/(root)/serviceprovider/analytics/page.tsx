import AnayModule from '@/components/shared/services/AnayModule'
import OrgNav from '@/components/shared/services/OrgNav'
import { BarChart } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <OrgNav/>
      <div className='h-28 w-full border-b flex flex-col  justify-center px-32' >
    <div className='flex items-center gap-2'>
    <BarChart size={25}/>
        <div>
        <h1 className='text-2xl font-semibold' >Anaylytics</h1>
        <p className='text-sm text-zinc-700' >Explore your analytics and know your booming service</p>
        </div>
    </div>

    
      </div>
      <AnayModule/>
    </div>
  )
}

export default page
