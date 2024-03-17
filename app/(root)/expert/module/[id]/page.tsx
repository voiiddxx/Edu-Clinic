
import ExModule from '@/components/shared/expert/module/ExModule';
import LikeComponenet from '@/components/shared/student/LikeComponenet';
import StudentNav from '@/components/shared/student/StudentNav';
import { Button } from '@/components/ui/button';
import { approveModuleReq } from '@/lib/database/actions/expert.action';
import { getModuleWithId } from '@/lib/database/actions/module.action';
import { Clock, Flame, IndianRupee, Sparkle, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {


    const moduleDetails = await getModuleWithId({id:id});

    const hanldeApprove = async  ( id : string)=>{
      const res = await approveModuleReq(id);
    }

  return (
    <div>
      <ExModule moduleDetails={moduleDetails} />
    </div>
  )
}

export default page
