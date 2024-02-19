import ModuleComponent from '@/components/shared/services/ModuleComponent'
import OrgNav from '@/components/shared/services/OrgNav'
import React from 'react'

const page = ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {
    
  return (
    <div>
      <OrgNav/>
      <ModuleComponent/>
    </div>
  )
}

export default page
