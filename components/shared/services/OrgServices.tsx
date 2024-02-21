"use client"
import { Button } from '@/components/ui/button'
import { getAllServicearPerOrgId, getUserServices } from '@/lib/database/actions/service.action'
import { Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const OrgServices = () => {

  
    const [services, setservices] = useState<any>(null);
    

    let usertoken = '';

    if (typeof window !== 'undefined') {
       const token = localStorage.getItem('x-auth-token');
        if(token){
            usertoken = token;
        }
      }

      console.log("this is user token ",usertoken);
      
   
    
    useEffect(()=>{

        const getUserServ = async ()=>{
          const res = await getUserServices(usertoken);
          setservices(res);
          console.log("this is user responses" , res);
          
        }
       getUserServ();
    } , [])


  return (  
    <div className=' px-32 py-8' >
      <div className='flex items-center justify-between border-b pb-4'>
      <div className='' >
      <h1 className='text-2xl text-zinc-900 font-semibold' >Your Services(4) </h1>
      <p className='text-zinc-700' >All of your services you have created</p>
      </div>
      <div>
        <Button className='flex gap-1 bg-zinc-900 hover:bg-blue-700 ' >
            <Plus/>
            Add Service
        </Button>
      </div>
      </div>

      {/* {
        services.map((curr : any)=>{
          return <h1>{curr.name}</h1>
        })
      } */}
    </div>
  )
}

export default OrgServices
