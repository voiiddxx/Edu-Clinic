import ProjectForm from '@/components/shared/student/ProjectForm'
import StudentNav from '@/components/shared/student/StudentNav'
import React from 'react'

const page = () => {
  return (
    <div>
      <StudentNav/>
      <div className='min-h-screen w-full px-32'>
        <div className='h-24 w-full border-b flex flex-col justify-center'>
          <h1 className='text-zinc-900 text-2xl font-semibold' >Fundraising for projects</h1>
          <p className='text-zinc-500' >Please fill the required information for fundraising for your project</p>
        </div>
        <div>
          <div>
    <ProjectForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
