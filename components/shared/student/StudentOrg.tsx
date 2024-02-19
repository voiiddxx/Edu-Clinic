import { Flame, TicketCheck } from 'lucide-react'
import React from 'react'


const orgs = [
    'd','d','d','d','d','d','d','d','d','d','d','d','d','d','d',
]

const StudentOrg = () => {
  return (
    <div className='pb-20 w-full px-40' >
      <div className='flex gap-2 items-center' >
      <Flame/>
      <h1 className='text-xl font-semibold text-zinc-800' >  Explore Organizations</h1>
      </div>
      <p className='text-zinc-500 text-sm mt-2' >You Can explore all organization out here and explore their services</p>
      {
        orgs.length > 1 && (
            <div className='flex gap-4 flex-wrap mt-8'>
                {
                    orgs.map((curr)=>{
                        return <div className='flex flex-col gap-2 items-center justify-center' >
                            <div className='h-28 w-28 rounded-full bg-blue-900' ></div>
                            <p>Intel</p>
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
