"use client"
import { Button } from '@/components/ui/button'
import { createService, createServiceCategory, getAllServiceCategory, getAllServicearPerOrgId, getUserServices } from '@/lib/database/actions/service.action'
import { IService } from '@/lib/database/models/service.model'
import { Plus } from 'lucide-react'
import React, { startTransition, useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { IServicecategory } from '@/lib/database/models/service.category.model'
import { useRouter } from 'next/navigation'
import { getOrganizationasPerId } from '@/lib/database/actions/organization.auth.action'
import ApprovalForm from './ApprovalForm'
import Image from 'next/image'

const OrgServices = () => {


  const router = useRouter();

  const [ServiceCategoryName, setServiceCategoryName] = useState('');
  const [ServiceCategory, setServiceCategory] = useState('')
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [Approved , setApproved] = React.useState("");

  
    const [services, setservices] = useState<any>([]);
    
    const [category, setcategory] = React.useState<IServicecategory[]>([])
    
    const [newcategory, setnewcategory] = React.useState('');

    let usertoken = '';
    
   const handleService = () => {
    createService({
        service:{serviceName:ServiceCategoryName , serviceCategory:ServiceCategory} , userToken:usertoken
    }).then((res)=> {
  
        
    })
    }

    if (typeof window !== 'undefined') {
       const token = localStorage.getItem('x-auth-token');
        if(token){
            usertoken = token;
        }
      }

      const handleAddCategory =  () => {
        createServiceCategory({
            category:{name:newcategory},
        }).then((res)=>{
            setcategory((prevState) => [...prevState , res]);
        })
    }
      
   
    
    useEffect(()=>{
      const getAllcategoryList = async () =>{
        const res = await getAllServiceCategory();
        res && setcategory(res as IServicecategory[]);
    }

        const getUserServ = async ()=>{
          const res = await getUserServices(usertoken);
          setservices(res);
        }
        const getMyorg = async  ()=>{
        const myOrganization =   await getOrganizationasPerId(usertoken);

        if(myOrganization){
          setApproved(myOrganization.approvalStatus);
        }
        
        }
        getAllcategoryList();
        getMyorg();
       getUserServ();
    } , [])
 

    if(Approved == "Applied"){
      return <div className='min-h-screen w-full px-52 flex justify-center items-center' >
        <Image src={`/loading.gif`} height={500} width={500} alt='pending image' />
        <div>
        <h1 className='text-3xl font-semibold text-zinc-900 text-center' >Your Approval Status is Pending</h1>
        <p className='text-center mt-2 text-lg font-medium text-zinc-500' >We are in the process of verification of your profile , please wait for a while , you will get verification status on your mail</p>
        </div>
      </div>
    }


  return (  
      <div>

        

        {
          Approved == "Pending " ? <div>
            <ApprovalForm  ordId={usertoken} />
          </div>:  <div className=' px-32 py-8' >
          <div className='flex items-center justify-between border-b pb-4'>
          <div className='' >
          <h1 className='text-2xl text-zinc-900 font-semibold' >Your Services({services.length} {Approved} )  </h1>
          <p className='text-zinc-700' >All of your services you have created</p>
          </div>
          <div>
            {/* <Button className='flex gap-1 bg-zinc-900 hover:bg-blue-700 ' >
                <Plus/>
                
            </Button> */}
             <AlertDialog>
      <AlertDialogTrigger className="pt-2 pb-2 pl-2 text-sm" ><div className="flex items-center gap-2 ml-2 " >
                <Plus size={16} />
                <p>Add Service</p>
            </div></AlertDialogTrigger>
      <AlertDialogContent className='w-full' >
        <AlertDialogHeader>
          <AlertDialogTitle>Add Service</AlertDialogTitle>
          <AlertDialogDescription>
            <Input type="text" onChange={(e)=>{
                setServiceCategoryName(e.target.value)
            }} placeholder="New category"/>
             <div className="h-3 w-full"></div>
           {/* service category  */}
    
           <Select onValueChange={(value) => {
            setServiceCategory(value)
           }} defaultValue={value} >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            {
                category.length < 1 ? <div></div> : category.map((curr ) => {
                    return <SelectItem key={curr._id} value={curr._id}> {curr.name}</SelectItem>
                })
            }
            <AlertDialog>
      <AlertDialogTrigger className="pt-2 pb-2 pl-7 text-sm" >Add New Category</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Custom category</AlertDialogTitle>
          <AlertDialogDescription>
            <Input type="text" onChange={(e)=>{
                setnewcategory(e.target.value);
            }} placeholder="New category"/>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=> startTransition(handleAddCategory)} >Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </SelectContent>
      </Select>
           {/* service category end  */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>{
            startTransition(handleService)
          }}  >Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
          </div>
          </div>
    
          {
            services.length < 1 ? <div className='w-full min-h-screen flex justify-center items-center '>
              <div className='px-20 py-12 rounded-md mb-24 bg-zinc-200 flex justify-center items-center flex-col'>
            <h1>Sorry, No Data Found</h1>
            <p>Please try again later or create new service</p>
              </div>
            </div> : <div className='flex gap-4 mt-10 flex-wrap' >
              {
                services.map((curr : IService)=>{
                  return <div onClick={()=>{
                    router.push(`/serviceprovider/dashboard/${curr._id}`)
                  }} className='h-[250px] w-[400px] bg-zinc-400 rounded-md flex justify-center items-center bg-serviceBg cursor-pointer' >
                    <h1 className='flex text-2xl text-white font-semibold' >{curr.name}</h1>
                  </div>
                })
              }
            </div>
          }
    
          {/* {
            services.map((curr : any)=>{
              return <h1>{curr.name}</h1>
            })
          } */}
        </div>
        }
      </div>
  )
}

export default OrgServices
