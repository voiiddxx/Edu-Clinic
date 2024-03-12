import React from 'react'
import OrgCard from './OrgCard'


type expertCompanyProps = {
    orgs:any
}
const ExpertCompany = ({orgs} : expertCompanyProps) => {
  return (
    <div className='min-h-screen w-full' >
      <div className='h-16 w-full border-b flex flex-col justify-center' >
        <h1 className='text-xl font-semibold' >Organizations</h1>
        <p className='text-sm text-zinc-500 mt-1' >All the organization you have applied for approval</p>
      </div>

      <div className='w-full flex flex-wrap gap-4 mt-5' >
       {
        orgs.map((curr:any)=>{
            return <OrgCard orgData={curr} key={curr._id} />
        })
       }

      </div>
    </div>
  )
}

export default ExpertCompany
