"use client"

import StartNav from "@/components/shared/start/StartNav";
import { Button } from "@/components/ui/button";
import connectToDatabase from "@/lib/database";
import Link from "next/link";

export default function Home() {
  
  const connect = async ()=>{
    await connectToDatabase();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <StartNav />
      <div className="w-full min-h-screen bg-cover bg-mainImage flex  items-center flex-col">
        <div className="md:flex gap-4 flex-col justify-center items-center md:mt-36 mt-6 hidden">
          <h1 className="md:text-4xl text-3xl font-semibold text-zinc-900 mx-3 text-center">
            Unleash the Educational{" "}
          </h1>
          <h1 className="md:text-4xl text-3xl font-semibold text-zinc-900 mx-3 text-center">
            {" "}
            Sector with the platform <span>Educlinic</span>{" "}
          </h1>
          <h1 className="text-4xl font-semibold text-zinc-900 mx-3">
            {" "}
            <h1 className="text-blue-800 text-center"> and Upskill YourSelf</h1>{" "}
          </h1>
          <p className="md:mx-96 mx-3 text-center">
          Welcome to 'Edu Clinic'! We're here to help make education
                  better for everyone. With our smart platform and experts,
                  we're fixing problems and making learning easier.
          </p>
        </div>
        <div className="md:hidden flex gap-4 flex-col justify-center items-center md:mt-36 mt-6">
          <h1 className="md:text-4xl text-3xl font-semibold text-zinc-900 mx-3 text-center">
            Unleash the Educational
            Sector with the platform <span>Educlinic</span><br/>
          <span className="text-4xl font-semibold mx-3 text-center text-blue-800">and Upskill YourSelf</span>
          </h1>
          
          <p className="md:mx-96 mx-3 text-center">
          Welcome to 'Edu Clinic'! We're here to help make education
                  better for everyone. With our smart platform and experts,
                  we're fixing problems and making learning easier.
          </p>
        </div>
        <div className="flex gap-2 mt-6">
          <Link href={`/serviceprovider/register`}>
            <Button className="bg-zinc-900 hover:bg-white hover:text-zinc-900">
              Signup as Organization
            </Button>
          </Link>
          <Link href={`/student/auth/register`}>
            <Button className="bg-transparent text-zinc-950 border-[1px] border-zinc-900 hover:bg-zinc-900 hover:text-white">
              Signup as Student
            </Button>
          </Link>
         
        </div>
      </div>
    </main>
  );
}
