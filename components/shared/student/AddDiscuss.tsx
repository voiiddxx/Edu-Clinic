"use client"
import React, { useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createDiscuss } from '@/lib/database/actions/discussion.action'
import { UploadOnCloudinary } from '@/lib/utils'
  
const AddDiscuss = () => {

    const [title, settitle] = useState<string>('');
    const [message, setmessage] = useState<string>('');
    const [image, setimage] = useState<any>('')
    

    let usertoken = '';

    if (typeof window !== 'undefined') {
       const token = localStorage.getItem('x-auth-token');
        if(token){
            usertoken = token;
        }
      }

      const handleDiscuss = async ()=>{
        try {
            console.log("this func is working");
            
            const imageUrl = await UploadOnCloudinary(image);
            const res = await createDiscuss({title:title , message:message , userToken:usertoken , image:imageUrl});
        console.log(res);
        } catch (error) {
            console.log(error);
            
        }
        
      }

   

  return (
    <div>
      <Drawer>
  <DrawerTrigger className='text-white' >Post Discussion</DrawerTrigger>
  <DrawerContent className='px-28' >
    <DrawerHeader>
      <DrawerTitle>Discussion</DrawerTitle>
      <DrawerDescription>Post Your Question/Queries/Tpoics you want to duscuss
        <div className='mt-4' >
        <Input  onChange={(e)=>{
            settitle(e.target.value);
        }} placeholder='Discussion Topic Title'/>
        <Textarea className='mt-4' onChange={(e)=>{
            setmessage(e.target.value)
        }} placeholder='Elaborate your topics to give clarity' />
        <Input onChange={(e)=>{
            setimage(e.target.files)
        }} className='mt-4'  type='file' />
        </div>
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button onClick={handleDiscuss} className='bg-zinc-900 hover:bg-indigo-600' >Post your discussion</Button>
      <DrawerClose>
        <Button className='w-full' variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </div>
  )
}

export default AddDiscuss
