"use client"
import { AddLiketoModule } from '@/lib/database/actions/module.action'
import { Flag, Heart } from 'lucide-react'
import React, { useState } from 'react'


type LikeComponentProps = {
    moduleId: any,
    likeCount:any
}

const LikeComponenet = ({moduleId , likeCount } : LikeComponentProps) => {

    const [postLiked, setpostLiked] = useState<boolean>(false);
    

    let usertoken = '';

    if (typeof window !== 'undefined') {
       const token = localStorage.getItem('x-auth-token');
        if(token){
            usertoken = token;
        }
      }

      const handleLike = async () =>{
        await AddLiketoModule({moduleId:moduleId , userId:usertoken});
      }

      
  return (
    <div>
      

<div className='flex items-center gap-2' >
          <div onClick={()=>{
            handleLike();
            setpostLiked(true);
          }} className='h-10 w-10 border-[1px]  rounded-full flex justify-center items-center hover:bg-red-500 text-red-600 hover:text-white' >
            {
                postLiked == true ? <Flag className='' size={17}/> : <Heart className='' size={17}/>
            }
          </div>
          <p>{likeCount} Peoples liked</p>
          </div>
    </div>
  )
}

export default LikeComponenet

