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
  name: string;
  isPaid: string;
  delivery: string;
  material: string
}

interface FilteredModulesProps {
  items: {
    name: string;
    type: string;
    delivery: string;
    material : string;
  };
  _id: string; // Adding _id here
}


function CompetitiveExamFilter({ items, _id}: FilteredModulesProps,) {
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
      const feesMatch = !items.type || module.isPaid == items.type
      
      // Filter modules based on organization name (items.orgName)
      const courseNameMatch = !items.name || module.name.toLowerCase().trim() === items.name.toLowerCase().trim();

      // Filter modules based on level
      const deliveryMatch = !items.delivery || module.delivery.toLowerCase().trim() === items.delivery.toLowerCase().trim()

      //Filter moduels based on base
      const materialMatch = !items.material || module.material.toLowerCase().trim() === items.material.toLowerCase().trim()

      //Filter on the basis of category
      // const categoryMatch = !items.orgCategoryName || module.name.toLowerCase().trim() === items.orgCategoryName.toLowerCase().trim();

      console.log(`fees: ${feesMatch}`)
      // console.log(`orgName: ${orgNameMatch}`)
      // console.log(`Category: ${categoryMatch}`)
      console.log(`items: ${JSON.stringify(items)}`)

      return feesMatch && courseNameMatch  && materialMatch;
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
    items.name.length==0?<StudentModuleAll allModule={moduleById}/>:(filteredModules?.length>0?(<StudentModule allModule={filteredModules}/>):(<p className="content-middle justify-center flex">No modules found for this category &nbsp;  <span className="text-blue-800 underline">Raise query</span></p>))
   }
  </>
  );
}

export default CompetitiveExamFilter;
