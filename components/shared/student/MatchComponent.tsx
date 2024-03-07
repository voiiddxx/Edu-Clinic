"use client"

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { IndianRupee } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useFormState } from 'react-dom'

  type detailProps = {
    serviceCategory:any
    orgCategory:any
    allOrg:any
  }
const MatchComponent = ({serviceCategory , orgCategory , allOrg} : detailProps) => {

    const [orgCategoryValue, setorgCategoryValue] = useState<any>(null)
    const [ModuleCateValue, setModuleCateValue] = useState<any>(null)
    const [AmmountRange, setAmmountRange] = useState<any>(null)
    const [isFree, setisFree] = useState<any>(null)
    const [additniolDetail, setadditniolDetail] = useState<any>(null)
    const [orgName, setorgName] = useState<any>(null)


    const handleRes = ()=>{
        alert("wrokig" + orgCategoryValue)
        console.log(orgCategoryValue);
        console.log(ModuleCateValue);
        console.log(isFree);
        console.log(AmmountRange);
        console.log(additniolDetail);
        console.log(orgName);
        
        
        
        
        
    }
    
    
  return (
    <div className='min-h-screen w-full px-32' >
        <div className='min-h-screen mt-6 w-full  rounded border-[1px] border-zinc-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]' >
            <div className='px-10 pt-8' >
                {/* Heading section */}
           <div>
           <h1 className='font-semibold text-xl' >Match Your Service</h1>
            <p className='text-sm mt-1 text-zinc-600' >Please fill this form to get the better match</p>
           </div>

           {/* FORM FOR THE MATCHING SECTION */}
           <div>
            {/* ROW 1 */}
            <div className='flex mt-8 justify-between' >
                <div>
                <Label >Select Category</Label>
            <Select onValueChange={(e)=>{
                setorgCategoryValue(e);
            }} >
                    <SelectTrigger className="w-[570px]">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
            <SelectContent>
                {
                    orgCategory.map((curr:any)=>{
                        return <SelectItem value={curr._id}>{curr.name}</SelectItem>
                    })
                }
                
            </SelectContent>
            </Select>
                </div>
                <div>
                <Label>Select Module Category</Label>
            <Select onValueChange={(e)=>{
                setModuleCateValue(e);
            }} >
                    <SelectTrigger className="w-[570px]">
                        <SelectValue placeholder="Module Category" />
                    </SelectTrigger>
            <SelectContent>
            {
                    serviceCategory.map((curr:any)=>{
                        return <SelectItem value={curr._id}>{curr.name}</SelectItem>
                    })
                }
            </SelectContent>
            </Select>
                </div>
              


            </div>
                {/* ROW 2 */}
                <div className='mt-6 flex justify-between' >
                   <div> <Label>Ammount Range</Label>
                    <div className='mt-3 flex gap-2' >
                        <div className='h-10 w-10 bg-zinc-100 rounded-sm flex justify-center items-center' >
                            <IndianRupee strokeWidth={1.5} color='blue' size={20} />
                        </div>
                        <Input onChange={(e)=>{
                            setAmmountRange(e.target.value)
                        }} className='w-[700px]'  placeholder='Your Ammount Limit'  />
                        <div className='flex items-center gap-2' >
                        <div onClick={()=>{
                            if(isFree=="Free"){
                                setisFree("paid")
                            }
                            setisFree("free")
                        }} >
                        <Checkbox   className="h-8 w-8"  />
                        </div>
                        <p className='text-zinc-700 font-medium' >Free Modules </p>
                        </div>

                    </div>
                    
                    </div>
                </div>


                {/* ROW 3 */}
                <div className='mt-8 flex flex-col gap-2'    >
                <Label>Select Organizations</Label>
                <Select onValueChange={(e)=>{
                    setorgName(e);
                }} >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Any Organization" />
                    </SelectTrigger>
            <SelectContent>
            {
                    allOrg.map((curr:any)=>{
                        return <SelectItem value={curr._id}>{curr.orgName}</SelectItem>
                    })
                }
            </SelectContent>
            </Select>
                </div>


                {/* ROW 4 */}
                <div className='mt-8' >
                    <Label>Additinols Details</Label>
                    <Textarea onChange={(e)=>{
                        setadditniolDetail(e.target.value);
                    }} className='mt-2' placeholder='Enter Detail Here...' />
                </div>


                {/* Button */}
                <Button onClick={handleRes} className='w-full mt-8 bg-zinc-800 hover:bg-zinc-600' >Match Your Service</Button>
                <Button variant={'outline'} className='w-full mt-2 hover:bg-zinc-600' >All Service</Button>
           </div>
            </div>
        </div>

    </div>
  )
}

export default MatchComponent
