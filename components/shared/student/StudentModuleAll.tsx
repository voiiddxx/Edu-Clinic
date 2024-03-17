import { IModule } from "@/lib/database/models/module.model";
import { Flame, IndianRupee, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
      <p className="text-zinc-500 text-sm mt-2">
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
        <div className="flex gap-4 flex-wrap mt-8 real">
          {allModule.map((curr: IModule, index: number) => (
            <Link href={`/student/home/module/${curr._id}`} key={curr._id}>
              <div
                className={`border-[1px] border-zinc-300 rounded-lg relative `}
              >
                <div className="h-[250px] w-[280px] bg-blue-600 mx-2 my-2 rounded-md">
                  <Image
                    className="h-[250px] w-[280px] object-cover rounded-sm"
                    src={curr.image}
                    height={800}
                    width={800}
                    alt="imagethatismentioned"
                  />
                </div>
                <div className="mx-2 my-2 w-[280px]">
                  <p className="mt-4 font-semibold text-zinc-900">
                    {curr.name}
                  </p>
                  <p className="text-[10px] mt-2 text-zinc-600">
                    {" "}
                    {curr.detail} consectetur adipisicing elit. Sit, in. Learn
                    AI/ML and grab the most demanding and paying{" "}
                  </p>
                  <div className="flex gap-1 items-center mt-2 w-full">
                    <div className="bg-blue-50 rounded-sm flex items-center gap-1 px-2 py-1">
                      {curr.isPaid === "paid" ? (
                        <div className="flex items-center">
                          <IndianRupee className="text-blue-800" size={15} />
                          <p className="text-[14px] font-normal text-blue-700">
                            {curr.fees}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <Sparkle className="text-blue-800" size={15} />
                          <p className="text-[14px] font-normal text-blue-700">
                            Free
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-6 w-full"></div>
                  <div className="flex justify-between my-2">
                    <p className="text-[13px] font-normal text-zinc-600">
                      Created | {curr.creatorId}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentModuleAll;
