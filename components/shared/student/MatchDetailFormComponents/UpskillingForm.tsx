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
import UpskillingFilter from "../FilterModulesComponents/UpskillingFilter";
import { getModulewithserviceCategoryId } from "@/lib/database/actions/module.action";

interface FormData {
  name: string;
  type: string;
  level: string;
  pace: string
}
interface orgId {
    id: string
}

interface Module {
  // Define module properties here
  name: string;
  isPaid: string;
  level: string;
  creatorId: string,
  pace: string
}

function UpskillingForm({id}: orgId) {
  const [data, setData] = useState<FormData>({name:"", type:"", level:"", pace:""});
  const [module, setModule] = useState()
  const [catid, setCatId] = useState<any>()
  const [moduleById, setModuleById] = useState<Module[]>([])
  const [name, setName] = useState<any>("")
  const [recom, setRecom] = useState<any>("")

  useEffect(() => {
    async function fetchModuleByCat(serviceId: string, organizationId?: string) {
      try {
        const modules: Module[] = await getModulewithserviceCategoryId({ categoryId: id });
        // console.log(JSON.stringify(modules));
        setModuleById(modules);
      } catch (error) {
        console.log("Error fetching modules by id:", error);
      }
    }
    if (id) { // Check if _id exists before fetching module by id
      fetchModuleByCat(id);
    }
  }, [id]);

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "Cant be empty",
    }),
    type: z.string().min(2),
    level: z.string(),
    pace: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      level: "",
      pace: ""
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
          <div className="grid grid-cols-4 gap-2">
            <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="MERN stack" {...field} value={field.value}
          onChange={(e) => {
            field.onChange(e);
            setName(e.target.value); // Call your custom onChange handler
          }}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col bg-slate-50">
            {name!=""? (moduleById.filter((curr)=>{return name.toLowerCase() === "" ? true : curr.name.toLowerCase().includes(name.toLowerCase())}).map((curr)=>(
             <div className="p-2" onClick={()=>setName(curr.name)}>{curr.name}</div>
            ))):<></>}
            </div>
            </div>

           <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Free / Paid" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="free">
                        Free
                      </SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="beginner / Medium / Advance" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">
                        beginner
                      </SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="advance">Advance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pace</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Self-Paced / Instructor-Paced" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="self paced">
                        Self Paced
                      </SelectItem>
                      <SelectItem value="instructor paced">Instructor Paced</SelectItem>
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
      <UpskillingFilter items={data} _id={catid}/>
      </div>
    </div>
  ); 
}

export default UpskillingForm;
