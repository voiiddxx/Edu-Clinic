"use client"

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
  import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
  import { z } from "zod"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { createModule, updateModule } from "@/lib/database/actions/module.action"
import { UploadOnCloudinary } from "@/lib/utils"
import { Divide, Edit } from "lucide-react"


const ModuleFormSchema = z.object({
    name: z.string().min(2).max(50),
    detail:z.string().min(2).max(800),
    isPaid:z.enum(['free' , 'paid']),
    url: z.string().min(5),
    fees:z.string().min(2).max(50),
    moduleCategory:z.string().min(2).max(50).optional(),
    purpose:z.string().min(5).max(200).optional(),
    material:z.string().min(5).max(200).optional(),
    deleivery:z.string().min(5).max(200).optional(),
    pace:z.string().min(5).max(200).optional(),
    elegibility:z.string().min(5).max(200).optional(),
    location:z.string().min(5).max(200).optional(),
    level:z.string().min(5).max(200).optional(),
    
    
  }).refine((data)=>{
      if(data.isPaid=="paid"){
          return !!data.fees
      }
      return true
  } , {
      message:'Please Provide Ammount',
      path:['fees']
  })
    
    
  
    type UpskillingModuleFormProps = {
        id: string
        type:'ADD' | 'UPDATE'
        moduleId?: any
        formType:string
      }

const UpskillingModuleForm = ({id , type , moduleId , formType} : UpskillingModuleFormProps) => {

    
  const [Image, setImage] = useState<any>(null);
  


  const form = useForm<z.infer<typeof ModuleFormSchema>>({
      resolver: zodResolver(ModuleFormSchema),
      defaultValues: {
        name: "",
        detail:'',
        url:'',

      },

    })
   
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof ModuleFormSchema>) {
        console.log(values);
        
      alert("this is working fine");
      

      if(type=="ADD"){
        
        try {
          const imageurl = await UploadOnCloudinary(Image);
          let userToken = '';
          const token = localStorage.getItem('x-auth-token');
          if(token){
            userToken = token
          }
          const res = await createModule({module:{...values , image:imageurl ,  } , creatorId:userToken , serviceId:id});
          alert(res)
          console.log(res);
          
          console.log(values)
        } catch (error) {
          console.log(error);
          
        }
      }
      else{
        if(Image){
          const ImageUrl = await UploadOnCloudinary(Image);
          const res = await updateModule({module:{...values , image:ImageUrl} , moduleId:moduleId});
          console.log(res);
        }else{
          const res = await updateModule({module:{...values} , moduleId:moduleId});
          console.log(res);
        }

      }
  }
        
    

    const PaidOrNot = form.watch("isPaid");

  return (
    <div>
      <AlertDialog   >
  <AlertDialogTrigger>
    {
      type == "UPDATE" ?  <div className="flex gap-2 items-center mb-5" >
      <Edit className="text-blue-800" size={18}/>
      <p className=" text-blue-700" >Update</p>
          </div> : 'Add Module'
    }
  </AlertDialogTrigger>
  <AlertDialogContent className="w-[900px]" >
    <AlertDialogHeader>
      <AlertDialogTitle>Upskilling Module Form</AlertDialogTitle>
      <AlertDialogDescription>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
             
              <FormControl>
                <Input placeholder="Module Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full">
        <Input onChange={(e)=>{
                  setImage(e.target.files);
                }} type="file" />
        </div>
        <FormField
          control={form.control}
          name="detail"
          render={({ field }) => (
            <FormItem>
            
              <FormControl>
                <Textarea {...field} placeholder="Describe your module here" />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isPaid"
          render={({ field }) => (
            <FormItem>
            
              <FormControl>
              <Select onValueChange={field.onChange} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Paid/Free" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free" >Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        

        {
            PaidOrNot == "paid" && (
                <FormField
          control={form.control}
          name="fees"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  placeholder="Your Module Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            )
        }

        {
          formType == "Placement opportunity" && (
            <div className="w-full flex gap-5" >
                <FormField
          control={form.control}
          name="moduleCategory"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormControl>
              <Select onValueChange={field.onChange} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Marketing" >Marketing</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="Video Editing">Video Editing</SelectItem>
                    <SelectItem value="VFX">VFX</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

            </div>
          )
        }

      <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     <div className=" flex gap-5" >
    {
      formType=="Upskilling" && (
        <div>
          <FormField
          control={form.control}
          name="pace"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormControl>
              <Select onValueChange={field.onChange} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Pace" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Self Placed" >Self Placed</SelectItem>
                    <SelectItem value="Instructor-paced ">Instructor-paced </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
      )
    }

    {
      formType == "Competetive" && (
        <div className="w-full" >
          <FormField
          control={form.control}
          name="material"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormControl>
              <Select onValueChange={field.onChange} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Material Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Notes" >Notes</SelectItem>
                    <SelectItem value="Videos lectures">Videos lectures</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
      )
    }
      {
        formType == "Upskilling" && (
          <div className="w-full">
            <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormControl>
              <Select onValueChange={field.onChange} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner" >Beginner</SelectItem>
                    <SelectItem value="Medium">Medium </SelectItem>
                    <SelectItem value="Advanced">Advanced </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
        )
      }

      {
        formType == "Competetive" && (
          <div className="w-full" >
            <FormField
          control={form.control}
          name="deleivery"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormControl>
              <Select onValueChange={field.onChange} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Delivery Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Live" >Live</SelectItem>
                    <SelectItem value="Videos Lectures">Videos Lectures</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
        )
      }

     </div>
{
  formType == "Placement opportunity" && (
    
    <div className="flex gap-5 w-full" >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="w-full" >
             
              <FormControl>
                <Input placeholder="Location" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="elegibility"
          render={({ field }) => (
            <FormItem className="w-full" >
             
              <FormControl>
                <Input placeholder="Eligibility" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
    </div>
  )
}
    
         <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="bg-zinc-900 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ): `Create Module`}</Button>
        <div className="w-full">
        <AlertDialogCancel className="w-full text-zinc-800" >Cancel</AlertDialogCancel>
        </div>
      </form>
    </Form>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default UpskillingModuleForm
