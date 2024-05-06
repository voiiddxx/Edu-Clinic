"use client";
import { Input } from "@/components/ui/input";
import { postFeedBack } from "@/lib/database/actions/module.action";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getStudentDataById } from "@/lib/database/actions/auth.action";
import { UpdateStudentParams } from "@/types";

type reviewParams = {
  moduleId: string;
  reviewSize: any;
  feedbackData: any;
};

const ReviewComponent = ({
  moduleId,
  reviewSize,
  feedbackData,
}: reviewParams) => {
  const [feedback, setfeedback] = useState<any>([]);

  useEffect(() => {
    if (feedbackData) {
      setfeedback(feedbackData as any);
    }
  }, []);

  const [feedBackmessage, setfeedBackmessage] = useState<string>("");

  let usertoken = "";

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("x-auth-token");
    if (token) {
      usertoken = token;
    }
  }

  const handeReview = async () => {
    alert("working");
    const res = await postFeedBack({
      moduleId: moduleId,
      studentId: usertoken,
      message: feedBackmessage,
    });
    setfeedback(res.review as any);
    console.log(res);
  };

  const fetchUserData = async (studentId: UpdateStudentParams) => {
    return await getStudentDataById(studentId);
  };

  return (
    <div className="md:px-40 md:mb-20 px-5">
      <h1 className="text-xl font-semibold">Feedbacks ({reviewSize}) </h1>
      <p>All the feedbacks out there for this module</p>
      <div>
        <div className="flex gap-2 items-center mt-5">
          <Input
            onChange={(e) => {
              setfeedBackmessage(e.target.value);
            }}
            className="w-[400px] border-[1px] border-zinc-700"
            placeholder="Type your review"
          />
          <div
            onClick={() => {
              handeReview();
            }}
            className="h-10 rounded-sm w-44 bg-zinc-900 flex justify-center items-center cursor-pointer"
          >
            <p className="text-white">Submit Review</p>
          </div>
        </div>
        <div className="flex gap-2 flex-col mt-10">
          {feedback.map(async (curr: any) => {
            const userData = await fetchUserData(curr.student);
            console.log(curr);
            return (
              <div className="pb-4 w-full border-b  flex items-start gap-4">
                <div className="flex">
                  <div className="h-12 w-12 border-[1px] border-zinc-700 mt-6 rounded-full flex justify-center items-center ">
                    <div className=" h-10 w-10 rounded-full border-1[px] border-zinc-600 flex justify-center items-center">
                      <User />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-zinc-800">{userData.name}</p>
                  <p className="mr-32 text-sm text-zinc-700">{curr.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
