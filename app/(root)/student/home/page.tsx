import StudentHero from '@/components/shared/student/StudentHero'
import StudentModule from '@/components/shared/student/StudentModule'
import StudentNav from '@/components/shared/student/StudentNav'
import StudentOrg from '@/components/shared/student/StudentOrg'
import StudentServices from '@/components/shared/student/StudentServices'
import React from 'react'

const page = () => {
  return (
    <div>
      <StudentNav/>
      <StudentHero/>
      <StudentOrg/>
      <StudentServices/>
      <StudentModule/>
    </div>
  )
}

export default page
