"use client"
import { Input } from '@/components/ui/input'
import { Flame } from 'lucide-react'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { UpdateAndApplyforApprovalAction } from '@/lib/database/actions/organization.auth.action'
import { UploadOnCloudinary } from '@/lib/utils'


// zod form validation start
const formSchema = z.object({
    orgDescription: z.string().min(2).max(800),
    orgHq: z.string().min(2).max(50),
    orgWebsite: z.string().min(2).max(50),
  })
// zod form validation start end


type ApprovalFormProps = {
  ordId:any
}

const ApprovalForm = ({ordId} : ApprovalFormProps) => {

    //  DEFINING THE STATES FOR STORING THE IMAGE DATA 

    const [OrgImage, setOrgImage] = useState<any>(null)
    


    //   DEFINING THE FORM 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orgDescription: "",
      orgHq: "",
      orgWebsite: "",
    },
  })



//   form submit sections === //
 async function onSubmit(values: z.infer<typeof formSchema>) {

      const imageData = await UploadOnCloudinary(OrgImage);
       const data = await UpdateAndApplyforApprovalAction({org:{orgHq:values.orgHq , orgDescription:values.orgDescription , orgId:ordId , OrgImage:imageData , orgWebsite:values.orgWebsite}});
       if(data){
        window.location.reload();
       }

        
  }



  return (
    <div className='w-full min-h-screen md:px-32 px-2 bg-zinc-100' >
        <div className='h-24 w-full border-b flex justify-center flex-col ' >
        <div className=' flex gap-2 items-center' >
            <Flame/>
            <h1 className='text-2xl font-semibold' >Approval Form</h1>
        </div>
        <p className='text-zinc-700 mt-1' >Please fill the required information</p>
        </div>


        {/* APPROVAL FORM  */}
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* first row */}
        <div className=' flex  gap-3 mt-6' >
            {/* first column */}
            <FormField
          control={form.control}
          name="orgWebsite"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Organization Website</FormLabel>
              <FormControl>
                <Input placeholder="Your website url" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        {/* second column */}
        <FormField
          control={form.control}
          name="orgHq"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Organization Location</FormLabel>
              <FormControl>
                <Input placeholder="Location of your organization" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>



        {/* second row  */}

        <div className=''  >
            {/* first col */}
            <div>
              <FormLabel>Your Organization Logo</FormLabel>
                <Input className='w-full'  onChange={(e)=>{
                    setOrgImage(e.target.files);
                }}  type='file'/>
            </div>
            {/* second col */}
            <div>
            <FormField
          control={form.control}
          name="orgDescription"
          render={({ field }) => (
            <FormItem className='w-full mt-10' >
              <FormLabel>Organization Description</FormLabel>
              <FormControl>
                <Textarea placeholder='please write your company details' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
        </div>
        {/* third row */}
        <Button  className='w-full bg-zinc-800'  type="submit">Submit</Button>
      </form>
    </Form>

    </div>
  )
}

export default ApprovalForm
