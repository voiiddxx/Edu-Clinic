import ModuleComponent from "@/components/shared/services/ModuleComponent";
import OrgNav from "@/components/shared/services/OrgNav";
import { getServiceCategoryWithId } from "@/lib/database/actions/service.action";
import React from "react";
const ModulesMainUi = React.lazy(
  () => import("@/components/shared/services/utils/ModulesMainUi")
);

const page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const data = await getServiceCategoryWithId(id);
  console.log(
    data.category + "nvbv" + data.category.name,
    "this is complete data",
    data
  );

  return (
    <div>
      <OrgNav />
      <ModuleComponent
        serviceId={id}
        categoryName={data.category.name}
        moduleCategoryId={data.category._id}
      />
      <React.Suspense fallback={<>loading...</>}>
        <ModulesMainUi moduleCategoryId={data.category._id} serviceId={id} />
      </React.Suspense>
    </div>
  );
};

export default page;
