"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import ModuleForm from './utils/ModuleForm'

  type moduleComponentProps = {
    serviceId:string
  }
const ModuleComponent = ({serviceId} : moduleComponentProps) => {
  return (
    <div className='w-full min-h-screen pl-36  pr-36'>
      <div className='mt-5 flex justify-between'>
        <h1 className='text-xl text-zinc-900 font-bold' >Your Modules(5)</h1>
        <Button className='bg-zinc-800 hover:bg-blue-700 font-normal' >
            <Plus className='mr-2' size={15}/> 
             <ModuleForm id={serviceId} />

        </Button>
      </div>
      <div className='border-b w-full mt-3' ></div>
    </div>
  )
}

export default ModuleComponent
