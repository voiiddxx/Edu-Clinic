

import ModuleComponent from '@/components/shared/services/ModuleComponent'
import OrgNav from '@/components/shared/services/OrgNav'
import ModulesMainUi from '@/components/shared/services/utils/ModulesMainUi'
import { getServiceCategoryWithId } from '@/lib/database/actions/service.action'


const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {
   

    const data = await getServiceCategoryWithId(id);
    console.log(data.category + "nvbv" + data.category.name);
    
      
      
  return (
    <div> 
      <OrgNav/>
       <ModuleComponent serviceId={id} categoryName={data.category.name} />
      <ModulesMainUi  serviceId={id}/> 
    </div>
  )
}

export default page
