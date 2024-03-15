"use client";
import React, { useState, useEffect } from "react";
import ServiceOptionObject from "./MatchDetailFormComponents/ServiceOptionObject";
import UpskillingForm from "./MatchDetailFormComponents/UpskillingForm";
import StudentModule from "./StudentModule";
import { getAllModule } from "@/lib/database/actions/module.action";
import FilteredModules from "./FilteredModules";
import CompetitiveExamForm from "./MatchDetailFormComponents/CompetitiveExamForm";

function MatchDetailForm() {
  const [option, setOption] = useState(0);
  const [allModules, setAllModules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const modules = await getAllModule();
      setAllModules(modules);
      console.log(modules);
    };

    fetchData();
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
        <div className="sm:grid grid-cols-12 rounded-lg">
          <div className="md:col-span-3 md:pt-4 md:p-2 md:sticky top-0 ">
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
          <div className="col-span-9 p-8 h-full ">{renderForm()}</div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetailForm;
