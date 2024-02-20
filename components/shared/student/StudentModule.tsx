import { IModule } from '@/lib/database/models/module.model'
import { Flame, IndianRupee, Sparkle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

    type StudentModuleProps = {
        allModule: any
        type?: "ALL" | "ORGS"
        serviceId?: string
        orgsId?: string
    }
const StudentModule = ({allModule }: StudentModuleProps) => {
    
  return (
    <div className='min-h-screen w-full px-40' >
    <div className='flex gap-2 items-center' >
    <Flame/>
    <h1 className='text-xl font-semibold text-zinc-800' >  Explore Modules</h1>
    </div>
    <p className='text-zinc-500 text-sm mt-2' >You Can explore all the modules enlist with the services</p>
    {
      allModule.length > 1 && (
          <div className='flex gap-4 flex-wrap mt-8'>
              {
                  allModule.map((curr: IModule)=>{
                      return <Link href={`/student/home/module/${curr._id}`} >
                      <div className="  border-[1px] border-zinc-300 rounded-lg" >
                      <div className="h-[250px] w-[280px] bg-blue-600 mx-2 my-2 rounded-md">
                        <Image className='h-[250px] w-[280px] object-cover rounded-sm' src={curr.image} height={800} width={800} alt='imagethatismentioned' />
                      </div>
                      <div className="mx-2 my-2 w-[280px]">
                      <p className="mt-4 font-semibold text-zinc-900" >{curr.name}</p>
                      <p className="text-[10px] mt-2 text-zinc-600" >  {curr.detail} consectetur adipisicing elit. Sit, in. Learn AI/ML and grab the most demanding and paying </p>
                      <div className="flex gap-1 items-center mt-2 w-full" >
                          <div className="bg-blue-50 rounded-sm flex items-center gap-1 px-2 py-1">
                          {
                              curr.isPaid == 'paid' ? <div className="flex items-center" >
                                  <IndianRupee className="text-blue-800" size={15}/>
                          <p className="text-[14px] font-normal text-blue-700" >{curr.fees}</p>
                              </div> : <div className="flex items-center gap-1" ><Sparkle className="text-blue-800" size={15}/>
                              <p className="text-[14px] font-normal text-blue-700" >Free</p></div>
                          }
                          </div>
                         
                      </div>
                      <div className="h-6 w-full" ></div>
                      <div className="flex justify-between my-2">
                          <p  className="text-[13px] font-normal text-zinc-600"  > 
                          Created | Intel
                          </p>
                          
                          

                      </div>
                      
                      </div>
                  </div>
                      </Link>
                  })
              }
          </div>
      )
    }
  </div>
  )
}

export default StudentModule
