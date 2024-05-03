import AddDiscuss from "@/components/shared/student/AddDiscuss";
import StudentNav from "@/components/shared/student/StudentNav";
import { getStudentDataById } from "@/lib/database/actions/auth.action";
import { getDiscuss } from "@/lib/database/actions/discussion.action";
import { UpdateStudentParams } from "@/types";
import { Plus, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const page = async () => {
  const discussReponse = await getDiscuss();

  const fetchUserData = async (studentId: UpdateStudentParams) => {
    return await getStudentDataById(studentId);
  };
  
  return (
    <div>
      <StudentNav />
      <div className="w-full min-h-screen md:px-28 px-2">
        <div className="h-24 w-full border-b flex  justify-between items-center">
          <div className="flex flex-col justify-center mb-5">
            <h1 className="text-zinc-900 font-semibold text-2xl">
              Discussion Pannel
            </h1>
            <p >You can discuss whatever query you have</p>
          </div>
          <div className="h-10  py-2 px-2 bg-zinc-900 rounded-md flex justify-center items-center gap-1">
            <Plus className="text-zinc-200" />
            <AddDiscuss />
          </div>
        </div>

        <div>
          {discussReponse.map(async(curr: any) => {
            const userData = await fetchUserData(curr.user._id)
            return (
              <Link href={`/student/home/discussion/${curr._id}`}>
                <div className=" pb-5 w-full border-b hover:bg-slate-100 cursor-pointer">
                  <div className="flex  gap-2 mt-4">
                    <div className="h-10 w-10 rounded-full mt- border-[1px] border-zinc-500 flex justify-center items-center">
                      <User />
                    </div>
                    <div>
                      <h1 className="font-medium mt-1">{curr.title}</h1>
                    </div>
                  </div>
                  <div className="text-sm text-zinc-700 ml-12 md:mr-20 mr-2">
                    {curr.message}
                  </div>
                  <div className="flex justify-end md:mr-14">
                    <p className="text-sm text-indigo-400">
                      {userData.name}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
