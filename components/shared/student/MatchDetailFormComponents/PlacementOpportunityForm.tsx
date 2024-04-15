"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import PlacementFilter from "../FilterModulesComponents/PlacementFilter";

interface FormData {
  field: string;
  location: string;
  salary: string;
  qualification : string
}
interface orgId {
    id: string
}

function PlacementOpportunityForm({id}: orgId) {
  const [data, setData] = useState<FormData>({field:"", location:"", salary:"", qualification:""});
  const [module, setModule] = useState()
  const [catid, setCatId] = useState<any>()

  const formSchema = z.object({
    field: z.string().min(2, {
      message: "Institute must be at least 2 characters.",
    }),
    location: z.string().min(2),
    salary: z.string(),
    qualification: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      field: "",
      location: "",
      salary: "",
      qualification: ""
    },
  });
  useEffect(()=>{
    setCatId(id)
  }, [])
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    setData(values)
  }
    console.log(`id: ${id}`);
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className=" sm:grid grid-cols-4 gap-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Mohali" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <FormField
              control={form.control}
              name="field"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field</FormLabel>
                  <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose field" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="marketing">
                        Marketing
                      </SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="web3">Web3</SelectItem>
                      <SelectItem value="graphic design">Graphic Design</SelectItem>
                      <SelectItem value="video editting">Video Editting</SelectItem>
                      <SelectItem value="vfx">VFX</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="qualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qualificaion</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your qualification" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="Salary expectations" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </Form>
      <div className="mt-2">
      <PlacementFilter items={data} _id={catid}/>
      </div>
    </div>
  ); 
}

export default PlacementOpportunityForm;
