"use client"

import Link from "next/link"


const OrgMainnav = () => {
  return (
    <div className='flex gap-8' >
      <p>Overview</p>
      <Link href={`/serviceprovider/analytics`} ><p>Anaylytics</p></Link>
      <p>Orders</p>
      <p>Settings</p>
    </div>
  )
}

export default OrgMainnav
