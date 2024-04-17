import ProjectForm from "@/components/shared/student/ProjectForm";
import StudentNav from "@/components/shared/student/StudentNav";
import React from "react";

const Page = () => {
  return (
    <div>
      <StudentNav />
      <div className="min-h-screen w-full px-4 sm:px-8 lg:px-12 xl:px-32">
        <div className="h-24 w-full border-b flex flex-col justify-center">
          <h1 className="text-zinc-900 text-2xl sm:text-3xl font-semibold">
            Fundraising for Projects
          </h1>
          <p className="text-zinc-500">
            Please fill in the required information for fundraising for your project
          </p>
        </div>
        <div className="mt-8">
          <ProjectForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
