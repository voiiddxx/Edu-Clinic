import OrgNav from '@/components/shared/services/OrgNav'
import { Button } from '@/components/ui/button'
import { getProject } from '@/lib/database/actions/project.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {

    const projects = await getProject();
    

  return (
    <div>
        <OrgNav/>
        <div className='min-h-screen w-full px-36' >
            <div className='h-24 w-full border-b flex flex-col justify-center' >
                <h1 className='text-2xl font-semibold' >Projects</h1>
                <p className='text-zinc-600' >Explore all the projects for funding </p>
            </div>
            {
                projects.length < 1 ? <div></div> : <div className='flex flex-wrap gap-4 mt-8' >
                    {
                        projects.map((curr : any)=>{
                            return <Link href={`/serviceprovider/projects/${curr._id}`}>
                            <div className='min-h-[250px] w-[500px] border-[1px] border-zinc-200 rounded-md flex px-2 py-2 gap-4' >
                            <div className='bg-red-200 h-full w-[200px] rounded-sm' >
                                <Image className='h-full w-[200px] object-cover' src={curr.poster} height={600} width={600} alt='projects' />
                            </div>
                           <div className='flex flex-col w-[400px] justify-between' >
                           <div className='h-full ' >
                            <h1 className='mt-3 font-semibold' >Project Metal Detector</h1>
                            <p className='text-[12px] mr-1 mt-2' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam repellat fugiat impedit doloribus, velit saepe?</p>
                            <div className='h-7 mt-2 w-36 bg-indigo-100 rounded-full flex justify-center items-center' >
                                <p className='text-sm text-indigo-900' >Patent Granted</p>
                            </div>
                            </div>
                            <div>
                        <Button className='w-full bg-indigo-300 h-9 text-zinc-800' >Explore More</Button>
                            </div>
                           </div>
                            
                        </div>
                            </Link>
                        })
                    }
                </div>
            }

        </div>
    </div>
  )
}

export default page
