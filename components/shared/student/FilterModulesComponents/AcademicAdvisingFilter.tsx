"use client";
import React, { useEffect, useState } from "react";
import { getAllModule, getModuleWithId } from "@/lib/database/actions/module.action";
import StudentModule from "@/components/shared/student/StudentModule";
import { Space } from "lucide-react";
import StudentModuleAll from "../StudentModuleAll";
import { studentGetOrgsModule } from "@/lib/database/actions/module.action";
import { getModulewithserviceCategoryId } from "@/lib/database/actions/module.action";


interface Module {
  // Define module properties here
  educationalLevel: string;
  advisor: string
}

interface FilteredModulesProps {
  items: { 
    educationalLevel: string;
    advisor: string
  };
  _id: string; // Adding _id here
}


function AcademicAdvisingFilter({ items, _id}: FilteredModulesProps,) {
  const [allModules, setAllModules] = useState<Module[]>([]);
  const [filteredModules, setFilteredModules] = useState<Module[]>([]);
  const [moduleById, setModuleById] = useState<Module[]>([])

  useEffect(() => {
    async function fetchModules() {
      try {
        const modules: Module[] = await getAllModule();
        console.log(`all Modulues: ${JSON.stringify(modules)}`)
        setAllModules(modules);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    }
    async function fetchModuleByCat(serviceId: string, organizationId?: string) {
      try {
        const modules: Module[] = await getModulewithserviceCategoryId({ categoryId: _id });
        console.log(JSON.stringify(modules));
        setModuleById(modules);
      } catch (error) {
        console.log("Error fetching modules by id:", error);
      }
    }

    fetchModules();
    if (_id) { // Check if _id exists before fetching module by id
      fetchModuleByCat(_id);
    }
  }, [_id]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    let modules = moduleById
    function compareFees(a: any, b: any) {
      return a.fees - b.fees;
    }
    modules.sort(compareFees)
    const newFilteredModules = modules?.filter(module => {
      // Filter modules based on fees range (items.AmmountRange)
      const advisorMatching = !items.advisor || module.advisor == items.advisor
      
      // Filter modules based on organization name (items.orgName)
      const qualificationMatching = !items.educationalLevel || module.educationalLevel.toLowerCase().trim() === items.educationalLevel.toLowerCase().trim();


      //Filter on the basis of category
      // const categoryMatch = !items.orgCategoryName || module.name.toLowerCase().trim() === items.orgCategoryName.toLowerCase().trim();

      return advisorMatching && qualificationMatching;
      // return feesMatch && courseNameMatch;
    });

    setFilteredModules(newFilteredModules.sort());
  }, [allModules, items]);

  useEffect(() => {
    console.log(filteredModules)
  }, [filteredModules]);
  console.log(`filter module id: ${_id}`)

  return ( 
   <>
   {
    items.educationalLevel.length==0?<StudentModuleAll allModule={moduleById}/>:(filteredModules?.length>0?(<StudentModule allModule={filteredModules}/>):(<p className="content-middle justify-center flex">No modules found for this category &nbsp;  <span className="text-blue-800 underline">Raise query</span></p>))
   }
  </>
  );
}

export default AcademicAdvisingFilter;
