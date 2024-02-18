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
import { Building, Building2, GraduationCap, GripVertical, Lock, Mail, PersonStanding, Phone, UserRound } from "lucide-react"
import OrgDropDown from "./OrgDropDown"
import { LoginOrganizatio } from "@/lib/database/actions/organization.auth.action"
import { useRouter } from "next/navigation"



const OrgRegisterSchema = z.object({

  orgEmail: z.string().email(),
  orgPassword: z.string().min(4).max(10),
  
  
})


const OrgLogin = () => {

  const router = useRouter();
    const form = useForm<z.infer<typeof OrgRegisterSchema>>({
        resolver: zodResolver(OrgRegisterSchema),
        defaultValues: {
        
          orgEmail:"",
          orgPassword:"",
          
        },
      });

     async function onSubmit(values: z.infer<typeof OrgRegisterSchema>) {
        const response = await LoginOrganizatio({organization:{...values}});
        const token = localStorage.setItem('x-auth-token' , response.token);
        if(response){
          router.push(`serviceprovider/dashboard`)
        }
      
        
        
      }


   
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
         
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
         
          
         
          <Button className="w-full bg-blue-700 hover:bg-zinc-800 mt-2" type="submit">Submit</Button>
          <div className="mt-3 w-full flex justify-center items-center flex-col">
              <div className="w-2 h-2"></div>
              <p className="text-sm">Already Have an account? <span className="text-blue-700 font-normal" >Login Now</span> </p>
          </div>
        </form>
      </Form>
    )


}

export default OrgLogin
