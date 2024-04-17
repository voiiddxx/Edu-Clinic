"use client"

import Link from "next/link"


const OrgMainnav = () => {
  return (
    <div className='md:flex gap-8 space-x-4' >
      <Link href={`/serviceprovider/dashboard`} >
      <p>Overview</p></Link>
      <Link href={`/serviceprovider/analytics`} ><p>Anaylytics</p></Link>
      <Link href={`/serviceprovider/projects`} ><p>Projects</p></Link>
      <Link href={`/serviceprovider/projects`} ><p>Approved Modules</p></Link>
      <Link href={`/serviceprovider/projects`} ><p>Want to be an Expert?</p></Link>
      
    </div>
  )
}

export default OrgMainnav
