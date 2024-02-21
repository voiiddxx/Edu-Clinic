import OrgNav from '@/components/shared/services/OrgNav'
import OrgServices from '@/components/shared/services/OrgServices'
import React from 'react'

const page = async () => {
  
  return (
    <div>
      <OrgNav/>
      <div>
    <OrgServices/>
      </div>
    </div>
  )
}

export default page
