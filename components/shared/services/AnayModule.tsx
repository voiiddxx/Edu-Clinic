"use client"
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { getAllOrganizationModule } from '@/lib/database/actions/module.action';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
  

const AnayModule = () => {

    let userToken;

    const [modules, setmodules] = useState<any>([]);
    
    let usertoken = '';

    if (typeof window !== 'undefined') {
       const token = localStorage.getItem('x-auth-token');
        if(token){
            usertoken = token;
        }
      }
   


    useEffect(()=>{
        const getModuleWithId = async () => {

            
            try {
                const res = await getAllOrganizationModule({organizationId:usertoken});
                if(res){
                    setmodules(res);
                }
                
            } catch (error) {
                console.log(error);
                
            }
        }

        getModuleWithId();

    } , [])

    const router = useRouter();
  return (
    <div className='md:mx-52 md:mt-14' >
      <Table>
  <TableCaption>Most Liked Module by Students</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[280px]">Module Id</TableHead>
      <TableHead>Module Name</TableHead>
      <TableHead>Services   </TableHead>
      <TableHead className="text-right">Likes</TableHead>
      <TableHead className="text-right">Feedbacks</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

    {
        modules.map((curr : any)=>{
            return <TableRow onClick={()=>{
                router.push(`/serviceprovider/analytics/module/${curr._id}`)
            }} className='cursor-pointer' >
            <TableCell className="font-normal">{curr._id}</TableCell>
            <TableCell className='font-medium'  >{curr.name}</TableCell>
            <TableCell>{curr.isPaid}</TableCell>
            <TableCell className="text-right">{curr.likes.length}</TableCell>
            <TableCell className="text-right">{curr.review.length}</TableCell>
            
          </TableRow>

        })
    }
  </TableBody>
</Table>

    </div>
  )
}

export default AnayModule
