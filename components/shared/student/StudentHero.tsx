"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllServiceCategory } from "@/lib/database/actions/service.action";
import { Check, CheckCheck, Rocket } from "lucide-react";
import Link from "next/link";
import React from "react";

const StudentHero = () => {


  const getall = async()=>{
    const data = await getAllServiceCategory();
    console.log(data);
    
  }
  return (
    <div className="min-h-screen bg-studentImage bg-no-repeat w-full flex flex-col justify-start items-center overflow-x-hidden ">
      <div className="mt-32 flex flex-col justify-center items-center md:px-96 px-6">
        <div className="bg-slate-50 rounded-3xl px-6 py-1 mb-2 flex gap-3 items-center">
          <Rocket className="text-blue-600" size={18} />
          <p className="text-blue-600">Explore Services</p>
        </div>
        <h1 className="font-bold text-5xl text-zinc-900">
          Explore Your Educational{" "}
        </h1>
        <h1 className="font-bold text-5xl text-zinc-900 mt-3">
          {" "}
          <span className="text-blue-700 underline">Marketplace</span> At One
          Place
        </h1>
        <p className="text-center mt-4 text-zinc-400">
          Explore your all market place such as you can explore the service
          providers or the organizers who serve services for students growth and
          upskilling now its time to grow
        </p>
      </div>
      <div className="flex gap-2 items-center mt-5">
        {/* <Input className='w-[400px]' placeholder='Search for your services...' / > */}
        <Link href="/student/match">
          <div className="h-10 rounded-sm w-44 bg-blue-700 flex justify-center items-center">
            <p className="text-white">Tell us your Needs</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap sm:gap-9 gap-3 mt-16 justify-center">
        <div className="flex gap-2 items-center">
          <CheckCheck className="text-blue-700" size={15} />
          <p className="text-[14px] text-zinc-800">Counseling Services</p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckCheck className="text-blue-700" size={15} />
          <p className="text-[14px] text-zinc-800">Scholarship Programs</p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckCheck className="text-blue-700" size={15} />
          <p className="text-[14px] text-zinc-800">Academic Advising</p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckCheck className="text-blue-700" size={15} />
          <p className="text-[14px] text-zinc-800"> Funding and Support</p>
        </div>
        <div className="flex gap-2 items-center">
          <CheckCheck className="text-blue-700" size={15} />
          <p className="text-[14px] text-zinc-800">Internships</p>
        </div>

      </div>
    </div>
  );
};

export default StudentHero;
