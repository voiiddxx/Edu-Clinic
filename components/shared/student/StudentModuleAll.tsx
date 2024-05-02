import { IModule } from "@/lib/database/models/module.model";
import { Flame, IndianRupee, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import avatar1 from "@/public/avatars/boy.png";
import avatar2 from "@/public/avatars/man (1).png";
import avatar3 from "@/public/avatars/panda.png";
import avatar4 from "@/public/avatars/woman.png";
import avatar5 from "@/public/avatars/man.png";

type StudentModuleProps = {
  allModule: any;
  type?: "ALL" | "ORGS";
  serviceId?: string;
  orgsId?: string;
};

const StudentModuleAll = ({ allModule }: StudentModuleProps) => {
  return (
    <div className="min-h-screen w-full mt-5">
      <div className="flex gap-2 items-center">
        <Flame />
        <h1 className="text-xl font-semibold text-zinc-800">
          {" "}
          Explore Modules
        </h1>
      </div>
      <p className="text-zinc-500 text-sm mt-2 md:mb-4">
        You Can explore all the modules enlist with the services
      </p>
      {!allModule || allModule.length === 0 ? (
        <>
          {/* <div className="flex items-center justify-center mt-16"> */}
          {/* Add a rotating loading icon */}
          {/* <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zinc-500"></div> */}
          {/* </div> */}
          <div className="flex gap-4 flex-wrap mt-8 real">
            <div className={`border-[1px] border-zinc-100 rounded-lg relative`}>
              <div className="h-[250px] w-[280px] mx-2 my-2 rounded-md">
                <Skeleton className="rounded-lg h-[250px] w-[280px] bg-slate-200" />
              </div>
              <div className="mx-2 my-2 w-[280px]">
                <Skeleton className="mt-4 font-semibold h-6 w-60" />
                <Skeleton className="h-[10px] mt-2 w-100" />
                <Skeleton className="h-[10px] mt-1 w-100" />
                <Skeleton className="h-[10px] mt-1 w-100" />
                <div className="flex gap-1 items-center mt-2 w-full">
                  <div className="bg-blue-50 rounded-sm flex items-center gap-1 px-2 py-1">
                    {
                      <div className="flex items-center">
                        <Skeleton className="h-5 w-12" />
                      </div>
                    }
                  </div>
                </div>
                <div className="h-6 w-full"></div>
                <div className="flex my-2 md:grid grid-cols-12">
                  <Skeleton className="h-5 w-20 col-span-4" />

                  <Skeleton className="h-5 w-40 col-span-6" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex gap-5 flex-wrap mt-2 real">
          {allModule.map((curr: IModule, index: number) => (
            <div
              className={`rounded-xl w-[296px] h-[428px] shadow-lg  relative`}
            >
             
              <div className="h-[179px] w-[295px] bg-blue-600 rounded-t-xl relative flex justify-center">
                <Image
                  className="h-[180px] w-[295px] object-cover rounded-t-xl"
                  src={curr.image}
                  height={800}
                  width={800}
                  alt="imagethatismentioned"
                />
                <div className="w-[225px] h-[41px] bg-[#FAFAFA] absolute top-0 translate-y-[162px] rounded-3xl flex px-[7px] align-middle items-center">
                  <div className="w-[108px] h-[32px] flex overflow-hidden relative">
                    <Image
                      className="h-[30] w-[30px] object-cover rounded-t-xl absolute left-0 z-50"
                      src={avatar1}
                      height={200}
                      width={200}
                      alt="image 1"
                    />
                    <Image
                      className="h-[30] w-[30px] object-cover rounded-t-xl absolute left-5 z-40"
                      src={avatar2}
                      height={200}
                      width={200}
                      alt="image 1"
                    />
                    <Image
                      className="h-[30] w-[30px] object-cover rounded-t-xl absolute left-10 z-30"
                      src={avatar3}
                      height={200}
                      width={200}
                      alt="image 1"
                    />
                    <Image
                      className="h-[30] w-[30px] object-cover rounded-t-xl absolute left-14 z-20"
                      src={avatar4}
                      height={200}
                      width={200}
                      alt="image 1"
                    />
                    <Image
                      className="h-[30] w-[30px] object-cover rounded-t-xl absolute right-1 z-10"
                      src={avatar5}
                      height={200}
                      width={200}
                      alt="image 1"
                    />
                  </div>
                  <p>+{Math.floor(Math.random() * (30 - 10) + 10)} Reviews</p>
                </div>
              </div>
              <div className="px-3 mt-10 w-[280px] h-[154px] ">
                <p className="mt-4 text-[12px] text-blue-600">
                  Provider: {curr.creatorId}
                </p>
                <div className="h-[50px]">
                  <p className="mt-2 font-bold text-[16px] text-blue-600">
                    {curr.name}
                  </p>
                </div>
                <p className="text-[11px] h-[60px] text-zinc-600 overflow-hidden hover:overflow-y-scroll">
                  {" "}
                  {curr.detail}{" "}
                </p>
              </div>
              <div className="flex gap-1 items-center h-[34px] mx-3 w-full">
                <div className=" rounded-sm flex items-center gap-1 py-1">
                  {curr.isPaid === "paid" ? (
                    <div className="flex items-center">
                      <IndianRupee className="text-[#FD661F]" size={14} />
                      <p className="text-[16px] font-semibold text-[#FD661F]">
                        {" "}
                        {curr.fees}
                      </p>
                      <div className="flex items-center mx-1">
                        <IndianRupee
                          className="text-zinc-600 line-through"
                          size={10}
                        />
                        <p className="text-[12px] font-normal line-through text-zinc-600">
                          {" "}
                          {parseInt(curr.fees) +
                            (parseInt(curr.fees) * 30) / 100}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <Sparkle className="text-blue-800" size={15} />
                      <p className="text-[14px] font-normal text-blue-700">
                        Free
                      </p>
                    </div>
                  )}
                  <Link
                    className="bg-blue-600 rounded-sm absolute end-2"
                    href={`/student/home/module/${curr._id}`}
                    key={curr._id}
                  >
                    <p className="text-[12px] text-white mx-[12px] my-[5px]">
                      Learn More
                    </p>
                  </Link>
                </div>
              </div>
              <div className="h-6 w-full"></div>
              <div className="flex justify-between my-2">
                {/* <p className="text-[13px] font-normal text-zinc-600">
                      Created | {curr.creatorId}
                    </p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentModuleAll;
