import MatchComponent from '@/components/shared/student/MatchComponent'
import StudentNav from '@/components/shared/student/StudentNav'
import { getAllOrganization } from '@/lib/database/actions/organization.auth.action'
import { getOrgCategory } from '@/lib/database/actions/orgcategory.action'
import { getAllServiceCategory } from '@/lib/database/actions/service.action'
import React from 'react'

  

const page = async () => {
    const orgCategory = await getOrgCategory();
   const serviceCategory = await getAllServiceCategory();
   const allOrg = await getAllOrganization();
    
  return (
    <>
    <StudentNav/>
    <MatchComponent serviceCategory={serviceCategory} orgCategory={orgCategory} allOrg={allOrg} />
    
    </>
  )
}

export default page
