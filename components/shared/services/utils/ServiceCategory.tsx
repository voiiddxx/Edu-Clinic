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
import { Input } from "@/components/ui/input"
import { addOrgCategory, getOrgCategory } from "@/lib/database/actions/orgcategory.action"
import { IOrgcategory } from "@/lib/database/models/category.model"
  

type serviceCategoryProps = {
    value?: string,
    onChange?: () => void
  }

const ServiceCategory = ({value , onChange} : serviceCategoryProps) => {
    const [category, setcategory] = useState<IOrgcategory[]>([])

    const [newcategory, setnewcategory] = useState('');

    const handleAddCategory =  () => {
        addOrgCategory({
            categoryName:newcategory.trim(),
        }).then((res)=>{
            setcategory((prevState) => [...prevState , res]);
        })
    }

    useEffect(()=>{
        const getAllcategoryList = async () =>{
            const res = await getOrgCategory();
            res && setcategory(res as IOrgcategory[]);
        }

        getAllcategoryList();
        
    } , [])
  return (
    <Select onValueChange={onChange} defaultValue={value} >
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
  <AlertDialogTrigger className="pt-2 pb-2 pl-2 text-sm" >Add New Category</AlertDialogTrigger>
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
  
  )
}

export default ServiceCategory
