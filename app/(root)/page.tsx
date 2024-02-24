import MainNav from "@/components/shared/MainNav";
import StartNav from "@/components/shared/start/StartNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <StartNav/>
     <div className="w-full min-h-screen bg-mainImage flex  items-center flex-col">
      <div className="flex gap-4 flex-col justify-center items-center mt-36" >
      <h1 className="text-4xl font-semibold text-zinc-900" >Unleash the Educationol </h1>
      <h1 className="text-4xl font-semibold text-zinc-900" > Sector with the platform <span>Educlinic</span> </h1>
      <h1 className="text-4xl font-semibold text-zinc-900" > <span className="text-blue-800" > and  Upskill YourSelf</span>  </h1>
      <p className="mx-96 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit reprehenderit culpa eligendi doloremque veritatis deleniti delectus. Consectetur autem delectus, similique tempore</p>
      </div>

      <div className="flex gap-2 mt-4" >
    <Link href={`/serviceprovider/register`} >
    <Button className="bg-zinc-900 hover:bg-white hover:text-zinc-900" >
      Signin as Organization
    </Button></Link>
    <Link href={`/student/auth/register`} >
    <Button className="bg-transparent text-zinc-950 border-[1px] border-zinc-900 hover:bg-zinc-900 hover:text-white" >
      Signin as Student
    </Button></Link>
      </div>

      
     </div>
    </main>
  );
}
