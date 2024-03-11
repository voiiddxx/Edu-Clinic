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


// zod form validation start
const formSchema = z.object({
    orgDescription: z.string().min(2).max(50),
    orgHq: z.string().min(2).max(50),
    orgWebsite: z.string().min(2).max(50),
  })
// zod form validation start end

const ApprovalForm = () => {

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
 function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values , OrgImage)
  }



  return (
    <div className='w-full min-h-screen px-32' >
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
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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

        <div className='flex gap-8'  >
            {/* first col */}
            <div>
                <Input onChange={(e)=>{
                    setOrgImage(e.target.files);
                }}  type='file'/>
            </div>
            {/* second col */}
            <div>
            <FormField
          control={form.control}
          name="orgDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
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
        <Button className='w-full bg-zinc-800'  type="submit">Submit</Button>
      </form>
    </Form>

    </div>
  )
}

export default ApprovalForm
