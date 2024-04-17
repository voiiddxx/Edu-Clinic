import OrgNav from '@/components/shared/services/OrgNav'
import { Button } from '@/components/ui/button'
import { getProjectWithId } from '@/lib/database/actions/project.action'
import { Building, Building2, DollarSign, IndianRupee, Loader, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {


    const data = await getProjectWithId({id:id}); 
    console.log("this is the value if project response" , data);
    
  return (
    <div>
      <OrgNav/>
      <div className='min-h-screen w-full md:px-28 px-3 pb-6' >
        <div className='md:h-28 h-24 w-full border-b flex flex-col justify-center    ' >
            <h1 className='text-xl font-semibold text-zinc-800' >{data.name}</h1>
            <p className='text-zinc-500' >Explore all the project detail about the project</p>
        </div>

        <div className='w-full h-full flex md:mt-10 mt-3 flex-wrap' >
            <div className='md:h-[400px] md:w-[500px] h-[200px] w-[300px] rounded-lg border-[1px] border-zinc-200 md:px-4 md:py-4 p-1' >
                <div className='bg-zinc-600 h-full w-full rounded-md'>
                        <Image className='h-full w-full object-cover' height={500} width={500} src={data.poster} alt='project poster image' />
                </div>
            </div>
            <div className='md:ml-16 mt-4 md:w-[600px]'>
                <h1 className='text-2xl font-semibold text-zinc-700' >{data.name}</h1>
                <p className='text-sm mt-4 text-zinc-500' >{data.detail}. </p>
                <div className='flex gap-2 mt-4 items-center' >
                    <div className='h-14 w-14 rounded-full bg-slate-100 flex justify-center items-center'><Building2 className='text-indigo-700' />
                    </div>
                    <p>{data.college}</p>
                    
                </div>
              <div className='flex gap-8' >
              <div className='flex mt-6 ml-4 items-center gap-2 ' >
                    <Loader className='text-indigo-600' size={17} />
                    <p className='text-indigo-600' >Patent Granted</p>
                </div>
                <div className='flex mt-6 ml-4 items-center gap-2 ' >
                    <Phone className='text-green-600' size={17} />
                    <p className='text-green-600' >91+ 8056958421</p>
                </div>
              </div>

              <div className='flex items-center gap-2 mt-10 ml-3' >
                <IndianRupee/>
                <h1 className='text-2xl font-semibold' >{data.ammount}</h1>
              </div>

              <div className='flex gap-2 mt-4 w-full'>
              <Link href={`mailto:${data.mail}`} >
              <Button  variant={'outline'} className='w-full' >Connect through mail</Button></Link>
              <Link href={`${data.ppt}`} >
              <Button   className='w-full bg-violet-700' >Download Project File</Button></Link>
              
                
              </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default page
