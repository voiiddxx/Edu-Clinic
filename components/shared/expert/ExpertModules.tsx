import { IndianRupee, Sparkle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type expertModuleProps = {
    modules:any
}

const ExpertModules = ({modules} : expertModuleProps) => {

    
    return (
        
        <div className='min-h-screen w-full' >
          <div className='h-16 w-full border-b flex flex-col justify-center' >
            <h1 className='text-xl font-semibold' >Organizations</h1>
            <p className='text-sm text-zinc-500 mt-1' >All the organization you have applied for approval</p>
          </div>
    
          <div className='w-full flex flex-wrap gap-4 mt-5' >
           {
            modules.map((curr:any)=>{
                return <Link href={`/expert/module/${curr._id}`} >
                <div className={`border-[1px] border-zinc-300 rounded-lg relative `}>
                
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
                   Created | {curr.creatorId}
                   </p>
                   
               </div>
               
               </div>
           </div>
               </Link>
            })
           }
    
          </div>
        </div>
      )
}

export default ExpertModules
