"use client"

import Link from "next/link"


const OrgMainnav = () => {
  return (
    <div className='flex gap-8' >
      <Link href={`/serviceprovider/dashboard`} >
      <p>Overview</p></Link>
      <Link href={`/serviceprovider/analytics`} ><p>Anaylytics</p></Link>
      <p>Modules</p>
      
    </div>
  )
}

export default OrgMainnav
