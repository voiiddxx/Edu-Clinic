"use client";
import React, { useState, useEffect } from "react";
import ServiceOptionObject from "./MatchDetailFormComponents/ServiceOptionObject";
import UpskillingForm from "./MatchDetailFormComponents/UpskillingForm";
import StudentModule from "./StudentModule";
import { getAllModule } from "@/lib/database/actions/module.action";
import FilteredModules from "./FilteredModules";
import CompetitiveExamForm from "./MatchDetailFormComponents/CompetitiveExamForm";
import { getAllServiceCategory } from "@/lib/database/actions/service.action";

function MatchDetailForm() {
  const [option, setOption] = useState(0);
  const [allModules, setAllModules] = useState([]);
  const [serviceCategory, setserviceCategory] = useState<any>(null);

  useEffect(() => {

    const getAllServCategory = async()=>{
      const res = await getAllServiceCategory();
      console.log(res);
      
      setserviceCategory(res);
    }
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
          <UpskillingForm />
        </>
      );
    } else if (option === 1) {
      return <CompetitiveExamForm />;
    }
    console.log("Testing");
  };

  return (
    <div className="h-auto flex bg-slate-50 justify-center items-center ">
      <div className="sm:w-full ">
        <div className="grid grid-cols-12  rounded-lg">
          <div className="col-span-3 pt-4 p-2 sticky top-0">
            {ServiceOptionObject.map((item, id) => (
              <p
                key={id}
                className={`p-2 m-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white ${
                  option === id ? "bg-blue-500 text-white" : "bg-white"
                }`}
                onClick={() => {
                  setOption(id);
                }}
              >
                {item.name}
              </p>
            ))}
                </div>
              )
            }
          </div>
          <div className="col-span-9 p-8 h-full ">{renderForm()}</div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetailForm;
