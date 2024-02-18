"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Grip, Plus, Store } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"
import ServiceCategory from "./ServiceCategory"
import { IOrgcategory } from "@/lib/database/models/category.model"
import { addOrgCategory, getOrgCategory } from "@/lib/database/actions/orgcategory.action"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { startTransition, useEffect, useState } from "react"
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
import { IServicecategory } from "@/lib/database/models/service.category.model"
import { createService, createServiceCategory, getAllServiceCategory } from "@/lib/database/actions/service.action"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function ComboBox() {

    const token = localStorage.getItem('x-auth-token');


    const [category, setcategory] = React.useState<IServicecategory[]>([])

    const [newcategory, setnewcategory] = React.useState('');

    const [ServiceCategory , setServiceCategory ] = React.useState('');
    const [ServiceCategoryName , setServiceCategoryName ] = React.useState('');
    

   const handleService = () => {
    createService({
        service:{serviceName:ServiceCategoryName , serviceCategory:ServiceCategory} , userToken:token
    }).then((res)=> {
        console.log(res);
        
    })
    }


    const handleAddCategory =  () => {
        createServiceCategory({
            category:{name:newcategory},
        }).then((res)=>{
            setcategory((prevState) => [...prevState , res]);
        })
    }

    React.useEffect(()=>{
        const getAllcategoryList = async () =>{
            const res = await getAllServiceCategory();
            res && setcategory(res as IServicecategory[]);
        }

        getAllcategoryList();
        
    } , [])
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            :  <div  className="flex gap-2 items-center" >
                <Grip size={16} />
                <p className="text-[13px]" >Current service</p>
            </div> }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue: React.SetStateAction<string>) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}

              </CommandItem>
              
            ))}
                  <AlertDialog>
  <AlertDialogTrigger className="pt-2 pb-2 pl-2 text-sm" ><div className="flex items-center gap-2 ml-2 " >
            <Plus size={16} />
            <p>Add Service</p>
        </div></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Add Service</AlertDialogTitle>
      <AlertDialogDescription>
        <Input type="text" onChange={(e)=>{
            setServiceCategoryName(e.target.value)
        }} placeholder="New category"/>
         <div className="h-3 w-full "></div>
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
          </CommandGroup>
        </Command>
      </PopoverContent> 
    </Popover>
  )
}
