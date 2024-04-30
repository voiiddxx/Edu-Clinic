import LikeComponenet from "@/components/shared/student/LikeComponenet";
import ReviewComponent from "@/components/shared/student/ReviewComponent";
import StudentModule from "@/components/shared/student/StudentModule";
import StudentNav from "@/components/shared/student/StudentNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  getAllModule,
  getModuleWithId,
  studentGetOrgsModule,
} from "@/lib/database/actions/module.action";
import { Clock, Flame, Heart, IndianRupee, Sparkle, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const moduleDetails = await getModuleWithId({ id: id });
  console.log(moduleDetails);

  const allModules = await studentGetOrgsModule({
    serviceId: moduleDetails.serviceId,
  });

  return (
    <div className="md:w-[auto]">
      <StudentNav />
      <div className="px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="h-20 w-full border-b flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1">
              <Flame className="text-blue-600" />
              <h1 className="text-xl text-blue-700 font-bold">
                {moduleDetails.name}
              </h1>
            </div>
            {/* <p className='text-zinc-500'>Learn complete react js with just one training course</p> */}
          </div>
          {/* like part */}
          <LikeComponenet
            likeCount={moduleDetails.likes.length}
            moduleId={moduleDetails._id}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-16">
          <div className="border-[1px] border-zinc-500 flex items-center justify-center md:mt-12 mt-5 rounded-xl">
            <div className="md:mx-4 md:my-4 mx-1 my-1 bg-zinc-200 w-[300px] md:w-[500px] rounded-lg">
              <Image
                className="h-[200px] w-[300px] md:h-[400px] md:w-[500px] object-cover rounded-lg"
                src={moduleDetails.image}
                height={800}
                width={800}
                alt="moduleimage"
              />
            </div>
          </div>
          <div className="md:mt-20 md:pr-20 flex-1">
            <h1 className="text-lg font-semibold">{moduleDetails.name}</h1>
            <p className="text-sm mt-4 text-zinc-700">{moduleDetails.detail}</p>
            <div className="mt-4 flex gap-5">
              <div className="h-10 w-28 bg-slate-300 rounded-3xl">
                <div className="h-10 w-64 bg-orange-100 rounded-3xl flex gap-1 justify-center items-center">
                  <Zap className="text-orange-700" size={17} />
                  <p className="text-orange-800 font-normal">Web Development</p>
                </div>
              </div>
            </div>
            <div className="mt-5 h-10 w-28 bg-green-100 rounded-3xl flex gap-1 justify-center items-center">
              <Sparkle className="text-green-800" size={17} />
              <p className="text-green-800 font-normal">
                {moduleDetails.isPaid}
              </p>
            </div>
            <div className="flex items-center mt-7 gap-10">
              <div className="flex items-center gap-2">
                <Clock className="text-yellow-700" size={17} />
                <p className="font-semibold">5 January 2025</p>
              </div>
              {moduleDetails.isPaid === "paid" && (
                <div className="flex gap-2 items-center">
                  <IndianRupee className="text-yellow-700" size={17} />
                  <p className="font-semibold">{moduleDetails.fees}</p>
                </div>
              )}
            </div>
            <div>
              <Link href={`${moduleDetails.url}`}>
                <Button className="w-full md:mt-12 mt-5 bg-zinc-800 hover:bg-blue-700">
                  Visit for more info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-20 h-10"></div>
      <ReviewComponent
        moduleId={moduleDetails}
        reviewSize={moduleDetails.review.length}
        feedbackData={moduleDetails.review}
      />
      {/* <StudentModule allModule={allModules}/> */}
    </div>
  );
};

export default Page;
