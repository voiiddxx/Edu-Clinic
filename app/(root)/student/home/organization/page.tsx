import ListOrg from '@/components/shared/student/ListOrg';
import StudentNav from '@/components/shared/student/StudentNav';
import StudentOrg from '@/components/shared/student/StudentOrg';
import { Input } from '@/components/ui/input';
import { getAllOrganization } from '@/lib/database/actions/organization.auth.action';
import { Flame } from 'lucide-react';
import React from 'react';

const page = async () => {
  const allOrgs = await getAllOrganization();

  return (
    <div >
      <StudentNav />

    <ListOrg organization={allOrgs}/>
    </div>
  );
};

export default page;
