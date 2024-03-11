import StudentHero from "@/components/shared/student/StudentHero";
import StudentModule from "@/components/shared/student/StudentModule";
import StudentNav from "@/components/shared/student/StudentNav";
import StudentOrg from "@/components/shared/student/StudentOrg";
import StudentServices from "@/components/shared/student/StudentServices";
import { getAllModule } from "@/lib/database/actions/module.action";
import { getAllOrganization } from "@/lib/database/actions/organization.auth.action";
import { getAllServices } from "@/lib/database/actions/service.action";
import React from "react";

const page = async () => {
  const modules = await getAllModule();
  const allServices = await getAllServices();
  const orgs = await getAllOrganization();

  return (
    <div>
      <StudentNav />
      <StudentHero />
      {/* <StudentOrg organization={orgs} /> */}
      {/* <StudentServices services={allServices} /> */}
      {/* <StudentModule allModule={modules} /> */}
    </div>
  );
};

export default page;
