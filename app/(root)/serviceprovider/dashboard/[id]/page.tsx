

import ModuleComponent from '@/components/shared/services/ModuleComponent'
import OrgNav from '@/components/shared/services/OrgNav'
import ModulesMainUi from '@/components/shared/services/utils/ModulesMainUi'


const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {
    // let usertoken = '';

    // if (typeof window !== 'undefined') {
    //    const token = localStorage.getItem('x-auth-token');
    //     if(token){
    //         usertoken = token;
    //     }
    //   }
  

    //   useEffect(()=>{
    //     const FetchModule = async ()=>{
    //       const res = await getAllOrganizationModule({organizationId:usertoken , serviceId:id});
    //     }
    //     FetchModule();
    //   } , [])
      
      
  return (
    <div>
      <OrgNav/>
      <ModuleComponent serviceId={id} />
      <ModulesMainUi  serviceId={id}/>


    </div>
  )
}

export default page
