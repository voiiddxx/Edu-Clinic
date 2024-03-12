"use client"
import { Button } from '@/components/ui/button'
import { ApproveOrganizationasPerid } from '@/lib/database/actions/expert.action'
import { GitCompare, Link, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

        type orgCardProps = {
            orgData:any
        }
const OrgCard = ({orgData} : orgCardProps) => {


    const approveReq = async (organizationId : string)=>{
        const status = await ApproveOrganizationasPerid({orgId:organizationId});
        console.log(status);
        
    }
  return (
    <div className='min-h-[300px] w-full px-3 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md border-[1px] border-zinc-300 py-3 flex gap-5'  >
      <div className='h-full w-4/12 bg-yellow-400 rounded-md' >
        <Image className='h-full w-full rounded-md object-cover' src={orgData.orgImage} height={900} width={900} alt='orgImage'/>
      </div>
      <div className='w-8/12 px-4' >
        <h1 className='text-2xl font-semibold mt-1 text-zinc-700' >{orgData.orgName}</h1>
        <p className='text-sm font-normal mt-2 text-zinc-500' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quaerat ullam culpa! Sint, placeat ad voluptates illo iure suscipit incidunt natus officia nulla officiis iusto, eveniet voluptatum porro quis quisquam corrupti accusamus earum corporis nihil quasi deleniti. A cum molestias et ex esse eaque temporibus?</p>

        <div className=' flex gap-2 items-center mt-4' >
            <MapPin className=' text-violet-700' size={18} />
            <p className='text-sm font-medium' >New Delhi , India</p>
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

        <div className='flex justify-between mt-4 gap-4' >
        <Button onClick={()=>{
            approveReq(orgData._id);
        }} className='bg-indigo-700 w-full' >Approve Organization</Button>
        <Button variant={'outline'} className='w-full' >Decline Request</Button>
        </div>
      </div>
    </div>
  )
}

export default OrgCard