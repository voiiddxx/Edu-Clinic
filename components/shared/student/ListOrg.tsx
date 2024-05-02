"use client";
import React, { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { Input } from "@/components/ui/input";
import StudentOrg from "./StudentOrg";
import { Button } from "@/components/ui/button";

interface Organization {
  orgName: string;
}

type OrganizationProps = {
  organization: Organization[];
};

export default function ListOrg({ organization }: OrganizationProps) {
  const [searchName, setSearchName] = useState<any>("");
  const [filterationValue, setFilterationValue] = useState<any>()

  useEffect(()=>{
    console.log(searchName)
  },[])

  const filterOrganization = () => {
    console.log(searchName)
    console.log(organization)
    return organization.filter((org) =>
      org.orgName?.toLowerCase().trim().includes(searchName.toLowerCase().trim())
    );
  };

  return (
    <div>
      <div className="bg-headerImage object-cover rounded-md flex justify-center items-center flex-col gap-2 h-[200px]">
        <div className="flex items-center">
          <Flame />
          <h1 className="text-3xl font-bold text-zinc-800">Organizations</h1>
        </div>
        <p className="text-zinc-600">
          You can explore all the services out there
        </p>
      </div>

      <div className="flex flex-col items-center px-4">
        <div className="flex gap-2 items-center mt-5">
          <Input
            className="w-full border-[1px] border-zinc-700 placeholder-gray-400"
            placeholder="Type any organizations name"
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
          />
          <Button
            className="h-10 rounded-sm bg-zinc-900 flex justify-center items-center w-44"
            onClick={()=>{setFilterationValue(filterOrganization())}}
          >
            <p className="text-white">Search Organization</p>
          </Button>
        </div>

        <div className="flex gap-5 mt-10"></div>
      </div>
      {/* Pass the filtered organizations and searchName to StudentOrg component */}
      <StudentOrg organization={organization} filter={searchName} />
    </div>
  );
}
