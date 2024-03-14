"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { IService } from '@/lib/database/models/service.model'

type seviceCategoryProps = {
    type?: "SERVICE" | "DOMAIN"
    selectValues: any

}


const ServiceCategory = ({selectValues , type} : seviceCategoryProps) => {

    const [serviceValue, setserviceValue] = useState('');
    
  return (
    <div>
            <Select onValueChange={(e)=>{
                console.log(e);
                setserviceValue(e);
            }} >
        <SelectTrigger className="w-[680px]">
          <SelectValue placeholder="Select Service" />
        </SelectTrigger>
        <SelectContent >
          
          {
            selectValues.map((curr : IService)=> {
              return <SelectItem  value={curr._id}>{curr.name}</SelectItem>
            })
          }
          <p>{selectValues.name}</p>
        </SelectContent>
      </Select>
      </div>
  )
}

export default ServiceCategory
