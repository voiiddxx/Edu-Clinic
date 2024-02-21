

import ModuleComponent from '@/components/shared/services/ModuleComponent'
import OrgNav from '@/components/shared/services/OrgNav'
import ModulesMainUi from '@/components/shared/services/utils/ModulesMainUi'


const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {
   
      
      
  return (
    <div>
      <OrgNav/>
       <ModuleComponent serviceId={id} />
      <ModulesMainUi  serviceId={id}/> 
    </div>
  )
}

export default page
