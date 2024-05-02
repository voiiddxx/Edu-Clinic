"use client";

import { IOrganization } from "@/lib/database/models/serviceprovider.model";
import { Flame } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type StudentOrgsParams = { 
  organization: any;
  filter: any
  // name: any
};

const StudentOrg = ({ organization, filter }: StudentOrgsParams) => {
  const router = useRouter();
  return (
    
    <div className="pb-10 px-4 sm:px-8 lg:px-20">
      <div className="flex items-center gap-2">
        <Flame />
        <h1 className="text-xl sm:text-2xl font-semibold text-zinc-800">
          Explore Organizations
        </h1>
      </div>
      <p className="text-zinc-500 text-sm mt-2">
        You can explore all organizations here and explore their services
      </p>
      {organization.length > 1 && (
        <div className="flex flex-wrap mt-8">
          {organization.filter((item: { orgName: string; })=>{return filter?.toLowerCase() === "" ? true : item.orgName.toLowerCase().includes(filter)}).map((curr: IOrganization) => (
            <div
            onClick={() => {
              router.push(`/student/home/organization/${curr._id}`);
            }}
            className="flex flex-col gap-2 items-center justify-center cursor-pointer my-3"
          >
            <div className="h-28 w-28 rounded-full bg-blue-900">
              <Image
                className="h-28 w-28 rounded-full object-cover"
                src={curr.orgImage}
                height={400}
                width={500}
                alt="orgImage"
              />
            </div>
            <div className="w-40">
              <p className="text-center">{curr.orgName}</p>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentOrg;
