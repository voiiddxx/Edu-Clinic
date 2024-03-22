"use client"

import { Button } from '@/components/ui/button'
import { ApproveOrganizationasPerid, rejectOrganization } from '@/lib/database/actions/expert.action'
import { GitCompare, Link, MapPin } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea'


        type orgCardProps = {
            orgData:any
        }
const OrgCard = ({orgData} : orgCardProps) => {


  const [declineMessage, setdeclineMessage] = useState<string>("");
  


    const approveReq = async (organizationId : string)=>{
        const status = await ApproveOrganizationasPerid({orgId:organizationId});
        window.location.reload();
        console.log(status);
        
    }

    const declineReq = async (message : string , id:string)=>{
      await rejectOrganization({message:message , orgId:id});
      window.location.reload();
    }
  return (
    <div className='min-h-[300px] w-full px-3 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md border-[1px] border-zinc-300 py-3 flex gap-5'  >
      <div className='h-full w-4/12 bg-slate-200 rounded-md' >
        <Image className='h-[320px] w-full rounded-md object-cover' src={orgData.orgImage} height={900} width={900} alt='orgImage'/>
      </div>
      <div className='w-8/12 px-4' >
        <h1 className='text-2xl font-semibold mt-1 text-zinc-700' >{orgData.orgName}</h1>
        <div className=' flex gap-2 items-center mt-4' >
            <MapPin className=' text-violet-700' size={18} />
            <p className='text-sm font-medium' >{orgData.orgHq}</p>
        </div>
        <div className=' flex gap-2 items-center mt-3' >
            <GitCompare className=' text-green-700' size={18} />
            <p className='text-sm font-medium' >Internship and Placement Service</p>
        </div>
        <div className=' flex gap-2 items-center mt-3' >
            <GitCompare className=' text-green-700' size={18} />
            <p className='text-sm font-medium' >(any other custom field)</p>
        </div>
        <div className=' flex gap-2 items-center mt-3' >
            <Link className=' text-indigo-700' size={18} />
            <p className='text-sm font-medium text-indigo-700' >www.infowiz.com</p>
        </div>
        <p className='text-[12px] font-normal mt-4 text-zinc-500' >{orgData.orgDescription}</p>

        <div className='flex justify-between mt-4 gap-4' >
        <Button onClick={()=>{
            approveReq(orgData._id);
        }} className='bg-indigo-700 w-full' >Approve Organization</Button>
        <Dialog>
  <DialogTrigger className='w-full font-medium text-zinc-800 border-[1px] border-zinc-400 text-sm rounded-md' >Decline Approval</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
       
        <Textarea onChange={(e)=>{
          setdeclineMessage(e.target.value);
        }} className='mt-4'  placeholder='Please describe the reason for declination...' />
        <Button onClick={()=>{
          declineReq(declineMessage , orgData._id)
        }} className='w-full bg-red-500 mt-4' >Decline Request</Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

        </div>
      </div>
    </div>
  )
}

export default OrgCard
