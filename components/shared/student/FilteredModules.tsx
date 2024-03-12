"use client";
import React, { useEffect, useState } from "react";
import { getAllModule } from "@/lib/database/actions/module.action";
import StudentModule from "@/components/shared/student/StudentModule";
import { Space } from "lucide-react";
import StudentModuleAll from "./StudentModuleAll";

interface Module {
  // Define module properties here
  name: string;
  isPaid: string;
  level: string;
  creatorId: string,
  pace: string
}

interface FilteredModulesProps {
  items: {
    name: string;
    type: string;
    level: string;
    pace: string;
  };
}

function FilteredModules({ items }: FilteredModulesProps) {
  const [allModules, setAllModules] = useState<Module[]>([]);
  const [filteredModules, setFilteredModules] = useState<Module[]>([]);

  useEffect(() => {
    async function fetchModules() {
      try {
        const modules: Module[] = await getAllModule();
        console.log(JSON.stringify(modules))
        setAllModules(modules);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    }

    fetchModules();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    const newFilteredModules = allModules.filter(module => {
      // Filter modules based on fees range (items.AmmountRange)
      const feesMatch = !items.type || module.isPaid == items.type
      
      // Filter modules based on organization name (items.orgName)
      const courseNameMatch = !items.name || module.name.toLowerCase().trim() === items.name.toLowerCase().trim();

      //Filter on the basis of category
      // const categoryMatch = !items.orgCategoryName || module.name.toLowerCase().trim() === items.orgCategoryName.toLowerCase().trim();

      console.log(`fees: ${feesMatch}`)
      // console.log(`orgName: ${orgNameMatch}`)
      // console.log(`Category: ${categoryMatch}`)
      console.log(`items: ${JSON.stringify(items)}`)

      return feesMatch && courseNameMatch;
    });

    setFilteredModules(newFilteredModules);
  }, [allModules, items]);

  useEffect(() => {
    console.log(filteredModules)
  }, [filteredModules]);

  console.log(filteredModules.length)

  return (
   <>
   {
    items.name.length==0?<StudentModuleAll allModule={allModules}/>:(filteredModules.length>0?(<StudentModule allModule={filteredModules}/>):(<p className="content-middle justify-center flex">No modules found for this category &nbsp;  <span className="text-blue-800 underline">Raise query</span></p>))
   }
    {/* {filteredModules.length > 0 ? (
      <StudentModule allModule={filteredModules} />
    ) : (
      <p className="content-middle justify-center flex">No modules found for this category &nbsp;  <span className="text-blue-800 underline">Raise query</span></p>
    )} */}
  </>
  );
}

export default FilteredModules;
