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

      <div className="bg-headerImage object-cover rounded-md flex justify-center items-center flex-col gap-2 h-[200px]">
        <div className="flex items-center">
          <Flame />
          <h1 className="text-3xl font-bold text-zinc-800">Organizations</h1>
        </div>
        <p className="text-zinc-600">You can explore all the services out there</p>
      </div>

      <div className="flex flex-col items-center px-4">
        <div className="flex gap-2 items-center mt-5">
          <Input className="w-full border-[1px] border-zinc-700 placeholder-gray-400" placeholder="Type any organizations name" /> {/* Full-width input */}
          <div className="h-10 rounded-sm bg-zinc-900 flex justify-center items-center w-44">
            <p className="text-white">Search Organization</p>
          </div>
        </div>

        <div className='flex gap-5 mt-10' >
    </div>
      </div>
        <StudentOrg organization={allOrgs}/>
    </div>
  );
};

export default page;
