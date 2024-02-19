"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
  import { z } from "zod"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
 
const ModuleFormSchema = z.object({
  name: z.string().min(2).max(50),
  detail:z.string().min(2).max(50),
  isPaid:z.enum['free' , 'paid'],
  fees:z.number(),
}).refine((data)=>{
    if(data.isPaid==true){
        return !!data.fees
    }
    return true
} , {
    message:'Please Provide Ammount',
    path:['fees']
})
  
const ModuleForm = () => {


    const form = useForm<z.infer<typeof ModuleFormSchema>>({
        resolver: zodResolver(ModuleFormSchema),
        defaultValues: {
          name: "",
          detail:'',
          fees:0

        },

      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof ModuleFormSchema>) {
        
        console.log(values)
      }

      const PaidOrNot = form.watch("isPaid");

  return (
    <div>
      <AlertDialog>
  <AlertDialogTrigger>Add Module</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Add New Module</AlertDialogTitle>
      <AlertDialogDescription>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
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
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem>Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

        {
            PaidOrNot == true && (
                <FormField
          control={form.control}
          name="name"
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
            )
        }
        <Button className="w-full bg-zinc-900 " type="submit">Submit</Button>
        <div className="w-full">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        </div>
      </form>
    </Form>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default ModuleForm
