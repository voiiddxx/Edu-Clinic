"use client";
import React, { useState } from "react";
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
  qualification: string;
  category : string;
  purpose: string
}

function ScholorshioFinancialAidForm() {
  const [data, setData] = useState<FormData>({ qualification:"", category:"", purpose:""});
  const [module, setModule] = useState()

  const formSchema = z.object({
    qualification: z.string().min(2),
    category: z.string(),
    purpose: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qualification: "",
      category: "",
      purpose: ""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    setData(values)
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className=" sm:grid grid-cols-3 gap-2">
          <FormField
              control={form.control}
              name="qualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Education Quialification</FormLabel>
                  <FormControl>
                    <Input placeholder="B.Tech CSE" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="General/SC/ST/OBC" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general">
                      General
                      </SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Startup/Study" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="startup">
                      Startup
                      </SelectItem>
                      <SelectItem value="study">Study</SelectItem>
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
      {/* <FilteredModules items={data}/> */}
      </div>
    </div>
  );
}

export default ScholorshioFinancialAidForm;
