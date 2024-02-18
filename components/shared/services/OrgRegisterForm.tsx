"use client"


import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Building, Building2, GraduationCap, Lock, Mail, PersonStanding, Phone, UserRound } from "lucide-react"
import { RegisterStudent } from "@/lib/database/actions/auth.action"
import OrgDropDown from "./OrgDropDown"



const OrgRegisterSchema = z.object({
  orgName: z.string().min(2).max(50),
  orgEmail: z.string().email(),
  orgPassword: z.string().min(6).max(10),
  orgPhone: z.string().min(3).max(50),
  orgHq: z.string().min(10).max(10),
  orgCategory: z.string().min(10).max(10),
  
})


const OrgRegisterForm = () => {

    
    const form = useForm<z.infer<typeof OrgRegisterSchema>>({
        resolver: zodResolver(OrgRegisterSchema),
        defaultValues: {
          orgName: "",
          orgEmail:"",
          orgPassword:"",
          orgPhone:"",
          orgHq:"",
          orgCategory:""
        },
      });

     async function onSubmit(values: z.infer<typeof OrgRegisterSchema>) {
       

        console.log(values)
      }



    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="orgName"
              render={({ field }) => (
                <FormItem className="w-[400px]" >
                  <FormLabel>Organization Name</FormLabel>
                  <FormControl>
                    <div className="flex gap-2" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                        <UserRound className="text-red-400" size={20}/>
                </div>
                    <Input  placeholder="Your Complete Name" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="orgEmail"
              render={({ field }) => (
                <FormItem className="w-[400px]" >
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="flex gap-2" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                        <Mail className="text-yellow-400" size={20}/>
                </div>
                    <Input type="email" placeholder="Your email addrerss" {...field} />
                    </div>
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orgPassword"
              render={({ field }) => (
                <FormItem className="w-[400px]" >
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex gap-2" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                        <Lock className="text-zinc-800" size={20}/>
                </div>
                    <Input type="password" placeholder="Password" {...field} />
                    </div>
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orgHq"
              render={({ field }) => (
                <FormItem className="w-[400px]" >
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <div className="flex gap-2" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                        <Building2 className="text-blue-600" size={20}/>
                </div>
                    <Input  placeholder="Your Institution Name" {...field} />
                    </div>
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orgPhone"
              render={({ field }) => (
                <FormItem className="w-[400px] " >
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <div className="flex gap-2" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                        <Phone className="text-teal-600" size={20}/>
                </div>
                    <Input  placeholder="91+ 8545XXXXXX" {...field} />
                    </div>
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orgPhone"
              render={({ field }) => (
                <FormItem className="w-[400px] " >
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <div className="flex gap-2" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                        <Phone className="text-teal-600" size={20}/>
                </div>
                    <OrgDropDown/>
                    </div>
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full bg-blue-700 hover:bg-zinc-800 mt-2" type="submit">Submit</Button>
            <div className="mt-3 w-full flex justify-center items-center flex-col">
                <div className="w-2 h-2"></div>
                <p className="text-sm">Already Have an account? <span className="text-blue-700 font-normal" >Login Now</span> </p>
            </div>
          </form>
        </Form>
      )
  
}

export default OrgRegisterForm
