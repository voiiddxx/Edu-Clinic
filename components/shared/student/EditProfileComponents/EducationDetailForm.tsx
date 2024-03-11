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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

function EducationDetailForm() {
    
  const formSchema = z.object({
    institute: z.string().min(2, {
      message: "Institute must be at least 2 characters.",
    }),
    location: z.string().min(2),
    degree: z.string(),
    passout: z.string().min(4).max(4).refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received a string"
      }),
    speed: z.string()
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institute: "",
      location:""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
       <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 grid">
              <FormField
                control={form.control}
                name="institute"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your institute name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your degree" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passout"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pass out year</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your passout year" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="speed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Learning speed</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your learning speed" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Update</Button>
            </form>
          </Form>
    </div>
  )
}

export default EducationDetailForm
