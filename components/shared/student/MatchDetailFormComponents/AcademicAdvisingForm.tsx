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
import AcademicAdvisingFilter from "../FilterModulesComponents/AcademicAdvisingFilter";

interface FormData {
  educationalLevel: string;
  advisor: string
}
interface orgId {
  id: string
}


function AcademicAdvisingForm({id}: orgId) {
  const [data, setData] = useState<FormData>({educationalLevel:"", advisor:""});
  const [module, setModule] = useState()
  const [catid, setCatId] = useState<any>()


  const formSchema = z.object({
    educationalLevel: z.string(),
    advisor: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      educationalLevel: "",
      advisor: ""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    setData(values)
  }
  useEffect(()=>{
    setCatId(id)
  }, [])
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className=" sm:grid grid-cols-2 gap-2">
           <FormField
              control={form.control}
              name="educationalLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highest qualification</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="High School/College/Graduate" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="highSchool">
                      High school
                      </SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="advisor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Find an Advisor for </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Admission/Subject/Abroad" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admission">
                      Admission
                      </SelectItem>
                      <SelectItem value="subject">Subject</SelectItem>
                      <SelectItem value="abroad">Abroad</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </Form>
      <div className="mt-2">
      <AcademicAdvisingFilter  items={data} _id={catid}/>
      </div>
    </div>
  );
}

export default AcademicAdvisingForm;
