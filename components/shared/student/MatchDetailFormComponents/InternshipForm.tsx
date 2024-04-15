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

interface FormData {
  place: string;
  field: string;
  stipend: string;
  duration: string
}
interface orgId {
    id: string
}

function InternshipForm({id}: orgId) {
  const [data, setData] = useState<FormData>({place:"", field:"", stipend:"", duration:""});
  const [module, setModule] = useState()
  const [catid, setCatId] = useState<any>()

  const formSchema = z.object({
    place: z.string().min(2, {
      message: "Institute must be at least 2 characters.",
    }),
    field: z.string().min(2),
    stipend: z.string(),
    duration: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      place: "",
      field: "",
      stipend: "",
      duration: ""
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
              name="place"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Place</FormLabel>
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
                  <FormLabel>Type</FormLabel>
                  <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="choose field" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="technical">
                      technical
                      </SelectItem>
                      <SelectItem value="non-technical">non-technical</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stipend"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="stipend / without stipend" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="stipend">
                      stipend
                      </SelectItem>
                      <SelectItem value="without stipend">without stipend</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="number of months" {...field} />
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
      {/* <FilteredModules items={data} _id={catid}/> */}
      </div>
    </div>
  ); 
}

export default InternshipForm;
