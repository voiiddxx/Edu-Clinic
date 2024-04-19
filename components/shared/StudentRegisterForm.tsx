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
import { GraduationCap, Lock, Mail, PersonStanding, Phone, UserRound } from "lucide-react"
import { RegisterStudent } from "@/lib/database/actions/auth.action"
import Link from "next/link"



const StudentRegisteSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(10),
  instituion: z.string().min(3).max(50),
  mobile: z.string().min(10).max(10),
})


const StudentRegisterForm = () => {


    const form = useForm<z.infer<typeof StudentRegisteSchema>>({
        resolver: zodResolver(StudentRegisteSchema),
        defaultValues: {
          name: "",
          email:"",
          password:"",
          instituion:"",
          mobile:"",
        },
      });

     async function onSubmit(values: z.infer<typeof StudentRegisteSchema>) {
        const response = await RegisterStudent({student:{...values}});
        console.log("this is response " , response);
        
        // Do something with the form values.
        // ✅ This will be type-safe and validated.


        console.log(values)
      }
      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="md:w-[400px] w-[100%]" >
                  <FormLabel>Name</FormLabel>
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
              name="email"
              render={({ field }) => (
                <FormItem className="md:w-[400px] w-[100%]" >
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
              name="password"
              render={({ field }) => (
                <FormItem className="md:w-[400px] w-[100%]" >
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
              name="instituion"
              render={({ field }) => (
                <FormItem className="md:w-[400px] w-[100%]" >
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <div className="flex gap-2" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                        <GraduationCap className="text-blue-600" size={20}/>
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
              name="mobile"
              render={({ field }) => (
                <FormItem className="md:w-[400px] w-[100%] " >
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
            <Button className="w-full bg-blue-700 hover:bg-zinc-800 mt-2" type="submit">Submit</Button>
            <div className="mt-3 w-full flex justify-center items-center flex-col">
                <div className="w-2 h-2"></div>
                <Link href={`/student/auth/login`} >
                <p className="text-sm">Already Have an account? <span className="text-blue-700 font-normal" >Login Now</span> </p></Link>
            </div>
          </form>
        </Form>
      )
}

export default StudentRegisterForm
