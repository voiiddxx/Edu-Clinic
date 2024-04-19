"use client";
import React, { useState, useEffect } from "react";
import ServiceOptionObject from "./MatchDetailFormComponents/ServiceOptionObject";
import UpskillingForm from "./MatchDetailFormComponents/UpskillingForm";
import StudentModule from "./StudentModule";
import { getAllModule } from "@/lib/database/actions/module.action";
import CompetitiveExamForm from "./MatchDetailFormComponents/CompetitiveExamForm";
import { getAllServiceCategory } from "@/lib/database/actions/service.action";
import { Skeleton } from "@/components/ui/skeleton";
import HealthCounForm from "./MatchDetailFormComponents/HealthCounForm";
import ScholorshioFinancialAidForm from "./MatchDetailFormComponents/ScholorshipFinancialAidForm";
import AcademicAdvisingForm from "./MatchDetailFormComponents/AcademicAdvisingForm";
import InternshipForm from "./MatchDetailFormComponents/InternshipForm";
import ProjectForm from "./ProjectForm";
import PlacementOpportunityForm from "./MatchDetailFormComponents/PlacementOpportunityForm";

function MatchDetailForm() {
  const [option, setOption] = useState(0);
  const [allModules, setAllModules] = useState([]);
  const [serviceCategory, setserviceCategory] = useState<any>(null);
  const [id, setId] = useState("65d9a0eec157630852c3c0fe")

  useEffect(() => {
    const getAllServCategory = async () => {
      const res = await getAllServiceCategory();
      console.log(`service cat: ${JSON.stringify(res)}`);

      setserviceCategory(res);
    };
    const fetchData = async () => {
      const modules = await getAllModule();
      setAllModules(modules);
      console.log(modules);
    }; 

    fetchData();
    getAllServCategory();
  }, []);

  const renderForm = () => {
    if (option === 0) {
      return (
        <>
          <UpskillingForm id={id}/>
        </>
      );
    } else if (option === 1) {
      return <>
      <CompetitiveExamForm id={id}/>
      </>;
    } else if (option === 2) {
      return <HealthCounForm id={id}/>;
    } else if (option === 3) {
      return <ScholorshioFinancialAidForm id={id}/>;
    } else if (option === 4) {
      return <AcademicAdvisingForm id={id}/>;
    } else if (option === 5) {
      return (
        <div className="min-h-screen w-full">
          <div className="h-24 w-full border-b flex flex-col justify-center">
            <h1 className="text-zinc-900 text-2xl font-semibold">
              Fundraising for projects
            </h1>
            <p className="text-zinc-500">
              Please fill the required information for fundraising for your
              project
            </p>
          </div>
          <div>
            <div>
              <ProjectForm />
            </div>
          </div>
        </div>
      );
    } else if (option===6){
      return <><div className="flex "><h1 className=" font-semibold text-xl">coming soon...</h1></div></>;
    } else if (option===7){
      return <><div className="flex "><h1 className=" font-semibold text-xl">coming soon...</h1></div></>;
    } else if (option===8){
      return <InternshipForm id={id}/>;
    }
    else if (option===9){
      return <PlacementOpportunityForm id={id}/>;
    }
    
    console.log("Testing");
  };
  

  return (
    <div className="h-auto flex justify-center items-center ">
      <div className="sm:w-full ">
        <div className="sm:grid grid-cols-12 rounded-lg">
          <div className="col-span-3 pt-4 p-2">
            {!serviceCategory || serviceCategory.length === 0 ? (
              <>
              <div className="flex md:flex-col space-y-3 flex-row md:overflow-hidden overflow-x-scroll md:w-[100%] w-[95vw]">
                <Skeleton className="p-2 m-2 rounded-lg h-10 md:w-[100%] w-20 bg-slate-100" />
                <Skeleton className="p-2 m-2 rounded-lg h-10 md:w-[100%] w-20 bg-slate-100" />
                <Skeleton className="p-2 m-2 rounded-lg h-10 md:w-[100%] w-20 bg-slate-100" />
                <Skeleton className="p-2 m-2 rounded-lg h-10 md:w-[100%] w-20 bg-slate-100" />
                <Skeleton className="p-2 m-2 rounded-lg h-10 md:w-[100%] w-20 bg-slate-100" />
                <Skeleton className="p-2 m-2 rounded-lg h-10 md:w-[100%] w-20 bg-slate-100" />
                <Skeleton className="p-2 m-2 rounded-lg h-10 md:w-[100%] w-20 bg-slate-100" />
              </div>
              </>
            ) : (
              <div className="md:block flex md:w-[100%] w-[95vw] md:overflow-x-hidden overflow-x-scroll">
                {serviceCategory.map((item: any, id: any) => (
                  <p
                    key={id}
                    className={`p-2 m-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white ${
                      option === id ? "bg-blue-500 text-white" : "bg-white"
                    } `}
                    onClick={() => {
                      setOption(id);
                      setId(item._id);
                      console.log(`match detail form: ${JSON.stringify(item)}`)
                    }}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="col-span-9 p-8 h-full ">{renderForm()}</div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetailForm;
