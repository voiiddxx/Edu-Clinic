import ExpertNav from '@/components/shared/expert/ExpertNav'
import OrgNav from '@/components/shared/services/OrgNav'
import { getAppliedApprovalOrganization } from '@/lib/database/actions/expert.action'
import React from 'react'

const page = async () => {

  await getAppliedApprovalOrganization();

  
  return (
    <div>
      <ExpertNav/>
    </div>
  )
} 

export default page
