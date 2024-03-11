"use client";
import React, { useEffect, useState } from "react";
import { getAllModule } from "@/lib/database/actions/module.action";
import StudentModule from "@/components/shared/student/StudentModule";
import { Space } from "lucide-react";

function FilteredModules({ items }) {
  const [allModules, setAllModules] = useState([]);

  useEffect(() => {
    async function fetchModules() {
      try {
        const modules = await getAllModule();
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

  

  const filteredModules = allModules.filter(module => {
    // Filter modules based on fees range (items.AmmountRange)
    let feesInRange = true;
    if (items.AmmountRange === "Free") {
      feesInRange = module.isPaid !== "paid";
    } else if (items.AmmountRange === "paid") {
      feesInRange = module.isPaid === "paid";
    } else {
      const fees = parseFloat(module.fees);
      const ammountRange = parseFloat(items.AmmountRange);
      feesInRange = fees <= ammountRange;
    }

    // Filter modules based on organization name (items.orgName)
    const orgNameMatch = !items.orgName || module.creatorId == items.orgName;

    //Filter on the basis of category
    const categoryMatch = !items.orgCategoryName || module.name.toLowerCase().trim() == items.orgCategoryName.toLowerCase().trim();

    // console.log(`Module name: ${module.name?.toLowerCase().trim()}`)
    // console.log(`Org category name: ${items.orgCategoryName?.toLowerCase().trim()}`)

    console.log(`fees: ${feesInRange}`)
    console.log(`orgName: ${orgNameMatch}`)
    console.log(`Category: ${categoryMatch}`)

    return feesInRange && categoryMatch;
  });
  useEffect(()=>{
    console.log(filteredModules)
  },filteredModules) 
  console.log(filteredModules.length)

  return (
   <>
    {filteredModules.length > 0 ? (
      <StudentModule allModule={filteredModules} />
    ) : (
      <p className="content-middle justify-center flex">No modules found for this category &nbsp;  <span className="text-blue-800 underline">Raise query</span></p>
    )}
  </>
  );
}

export default FilteredModules;
