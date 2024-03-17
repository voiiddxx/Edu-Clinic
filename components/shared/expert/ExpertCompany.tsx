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
        orgs.length < 1 ? <div className='min-h-screen w-full flex  justify-center items-start pt-36' >
          <div className='h-40 w-96 bg-slate-200 rounded flex flex-col justify-center items-center' >
            <h1 className='text-xl font-semibold text-zinc-800' >No Data Found</h1>
            <p className='text-zinc-600 text-sm mt-1' >Sorry No Data found, Please try again later</p>

          </div>
        </div> : <div>
          {
        orgs.map((curr:any)=>{
            return <OrgCard orgData={curr} key={curr._id} />
        })
       }
        </div>
       }

      </div>
    </div>
  )
}

export default ExpertCompany
