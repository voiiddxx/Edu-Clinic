import OrgNav from '@/components/shared/services/OrgNav'
import { Button } from '@/components/ui/button'
import { getProject } from '@/lib/database/actions/project.action'
import { IProject } from '@/lib/database/models/project.model'
import { ArrowRight, School } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {

    const projects = await getProject();
    

  return (
    <div>
        <OrgNav/>
        <div className='min-h-screen w-full px-36 bg-slate-100' >
            <div className='h-24 w-full border-b flex flex-col justify-center' >
                <h1 className='text-2xl font-semibold' >Projects</h1>
                <p className='text-zinc-600' >Explore all the projects for funding </p>
            </div>
            {
                projects.length < 1 ? <div></div> : <div className='flex flex-wrap gap-4 mt-8' >
                    {
                        projects.map((curr : IProject)=>{
                            return <Link href={`/serviceprovider/projects/${curr._id}`}>
                            <div className='h-[400px] w-[350px] bg-white rounded-md border-[1px] border-zinc-300' >
                                <div className='h-[250px]  m-2  rounded-sm' >
                            <Image className='h-full w-full object-cover rounded-sm' src={curr.poster} height={9000} width={9000}  alt='project image' />
                                </div>

                                {/* project data image */}

                                <div className='m-2' >
                                    <h1 className='font-semibold text-lg' >{curr.name}</h1>
                                    <p className='text-sm text-gray-600' >{curr.detail}</p>
                                    <div className='mt-4 flex gap-2 items-center'>
                                        <School className='text-violet-700' strokeWidth={1.5} size={17} />
                                        <p className='text-sm font-medium' >{curr.college}</p>
                                    </div>


                                    <div className='flex justify-between mt-5' >
                                        <p className='text-sm font-normal text-violet-700' >Patent: {curr.isGranted}</p>

                                        <ArrowRight className='text-violet-700' size={15} strokeWidth={1.5} />

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
