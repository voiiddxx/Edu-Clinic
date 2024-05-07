import StudentNav from "@/components/shared/student/StudentNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getDiscussWithId } from "@/lib/database/actions/discussion.action";
import React from "react";
import { getStudentDataById } from "@/lib/database/actions/auth.action";
import { UpdateStudentParams } from "@/types";
import ReplyComponent from "@/components/shared/student/ReplyComponent";

const page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const discussDetail = await getDiscussWithId({ id: id });
  console.log(discussDetail);

  const fetchUserData = async (studentId: UpdateStudentParams) => {
    return await getStudentDataById(studentId);
  };

  console.log("this is id of dedicated discussion pannel", id);
  return (
    <div>
      <StudentNav />
      <div className="md:px-40 px-2 min-h-screen flex flex-col justify-between">
        <div>
          <div className="h-20 border-b flex items-center sticky top-0 bg-white">
            <h1 className="text-xl font-semibold">{discussDetail.title}</h1>
          </div>
          <p className="text-indigo-500 mt-4 ">Explained</p>
          <p className="text-sm mt-4 text-zinc-700">{discussDetail.message}.</p>

          <p className="text-indigo-600 mt-5 mb-5 text-lg">Replies</p>
          <div>
            <React.Suspense fallback={<>Loading Replies...</>}>
              {
                (React.lazy = discussDetail.reply.map(async (curr: any) => {
                  const userData = await fetchUserData(curr.repliedUser);
                  return (
                    <div className=" pb-5 w-full border-b hover:bg-slate-100 cursor-pointer my-4">
                      <div className=" flex items-center ">
                        <div className="h-12 w-12 rounded-full bg-red-400"></div>
                        <div>
                          <h1 className="mx-3 text-sm font-semibold">
                            {userData?.name}
                          </h1>
                          <h1 className="text-xs mx-3 font-light  border-b">
                            {userData?.instituion}
                          </h1>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center h-auto overflow-hidden  py-2">
                        <article className="text-wrap ...">
                          <p className="ml-16 text-sm mr-2 ">{curr.message}</p>
                        </article>
                      </div>
                    </div>
                  );
                }))
              }
            </React.Suspense>
          </div>
        </div>
        <ReplyComponent postId={discussDetail._id} />
      </div>
    </div>
  );
};

export default page;
