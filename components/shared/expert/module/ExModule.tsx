"use client"
import React, { useState } from 'react'
import LikeComponenet from '../../student/LikeComponenet'
import StudentNav from '../../student/StudentNav'
import Image from 'next/image'
import { Clock, Flame, IndianRupee, Sparkle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { approveModuleReq, declineModuleReq } from '@/lib/database/actions/expert.action'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea'

    type ExModuleProps = {
        moduleDetails:any
    }
    
const ExModule = ({moduleDetails} : ExModuleProps) => {

    const [declineMessage, setdeclineMessage] = useState<string>('');
    

    const hanldeModuleReq = async (id:string)=>{
        const res = await approveModuleReq(id);
        alert(res);
    }

    const hanldeModuleDecline = async( id : string , message:string )=>{
        const res = await declineModuleReq(id , message);

    }
  return (
    <div>
        <StudentNav/>
        <div className='px-40'>
        <div className='h-20 w-full border-b flex  justify-between items-center' >
          <div>
          <div className='flex items-center gap-1'>
            <Flame className='text-blue-600' />
           <h1 className='text-xl text-blue-700 font-bold' >{moduleDetails.name}</h1>
           </div>
            <p className='text-zinc-500' >Learn complete react js with just one training course</p>
          </div>
          {/* like part */}
          <LikeComponenet likeCount={moduleDetails.likes.length} moduleId={moduleDetails._id}  />
           
        </div>
        <div className='flex justify-between items-start gap-12' >
        
        <div className='  border-[1px] border-zinc-500 flex items-center justify-center mt-12 rounded-xl ' > 
        <div className='mx-4 my-4 bg-zinc-200 h-[400px] w-[500px] rounded-lg' >
            <Image className='h-[400px] w-[500px] object-cover rounded-lg' src={moduleDetails.image} height={800} width={800} alt='moduleimage'/>
        </div>
        </div>
        <div className='mt-20 pr-20' >
            <h1 className='text-lg font-semibold' >{moduleDetails.name}</h1>
            <p className='text-sm mt-4 text-zinc-700' >
                {moduleDetails.detail} Cupiditate error provident iste veritatis officia a saepe aut cumque, odio ex facilis ab voluptatem pariatur eaque. Lorem ipsum dolor sitb8=9 -hyi0n amet consectetur adipisicing elit. Debitis, omnis? Reprehenderit neque quidem hic et est consectetur repellendus iure ad.
            </p>
            <div className='mt-4 flex gap-5' >
                <div className='h-10 w-28 bg-slate-300 rounded-3xl' >
                <div className='h-10 w-64 bg-orange-100 rounded-3xl flex gap-1 justify-center items-center' >
                    <Zap className='text-orange-700' size={17} />
                    <p className='text-orange-800 font-normal' >Web Development</p>
                </div>
                </div>
            </div>
            <div className='mt-5 h-10 w-28 bg-green-100 rounded-3xl flex gap-1 justify-center items-center' >
                    <Sparkle className='text-green-800' size={17} />
                    <p className='text-green-800 font-normal' >{moduleDetails.isPaid}</p>
                </div>
                <div className='flex items-center mt-7 gap-10'>
                    <div className='flex items-center gap-2'>
                    <Clock className='text-yellow-700' size={17}/>
                    <p className='font-semibold' >5 January 2025</p>
                    </div>
                    {
                        moduleDetails.isPaid == 'paid' && (
                            <div className='flex gap-2 items-center'>
                    <IndianRupee className='text-yellow-700' size={17}/>
                    <p className='font-semibold' >{moduleDetails.fees}</p>
                    </div>
                        )
                    }
                </div>
                <div className='w-full flex gap-1 mt-6' >
                   <Button onClick={()=>{
                    hanldeModuleReq(moduleDetails._id);
                   }} className='w-full bg-violet-700' >Approve</Button>
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
            hanldeModuleDecline(moduleDetails._id , declineMessage);
        }} className='w-full bg-red-500 mt-4' >Decline Request</Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
                </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ExModule
