import ExpertNav from '@/components/shared/expert/ExpertNav'
import OrgNav from '@/components/shared/services/OrgNav'
import { getAppliedApprovalOrganization } from '@/lib/database/actions/expert.action'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExpertCompany from '@/components/shared/expert/ExpertCompany'


const page = async () => {

  const orgs = await getAppliedApprovalOrganization();

  
  return (
    <div>
      <ExpertNav/>


      {/* EXPERT ORGANIZATION AND MODULE TRANSITION SECTIONS */}

      <div className='min-h-screen w-full px-32 py-10' >
      <Tabs defaultValue="org" className="w-full">
    <div className='h-16 border-b' >
    <TabsList>
    <TabsTrigger value="org">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
    </div>
  <TabsContent value="org">
    <ExpertCompany orgs={orgs} />
  </TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

      </div>
      {/* EXPERT ORGANIZATION AND MODULE TRANSITION SECTIONS END HERE */}

      
    </div>
  )
} 

export default page
