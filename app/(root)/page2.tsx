import StartNav from "@/components/shared/start/StartNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import StudentModuleAll from "@/components/shared/student/StudentModuleAll";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <StartNav />
      <div>
        <div className="bg-blue-800 pb-5 pt-10">
          <div className="w-[100vw] bg-blue-800 flex">
            <div className="w-[28%] md:flex h-[70vh] hidden justify-end overflow-hidden object-fill">
              <div className="h-[100%] w-[90%] object-cover p-5">
                <Image
                  src="/hero1.png"
                  layout="responsive"
                  width={800}
                  height={900}
                  alt="hero1"
                />
              </div>
            </div>
            <div className="md:w-[46%] w-[100%] md:h-[70vh] p-2">
              <div className="grid row-span-4 gap-4 mt-9">
                <h1 className="text-center text-[30px] text-white">
                 Explore your
                </h1>
                <h1 className="text-center text-[50px] font-semibold text-white">
                  Educational Marketplace
                </h1>
                <h1 className="text-center text-[30px] text-white">
                  At one place
                </h1>
                <p className="text-center text-[20px] mt-3 text-white">
                  Welcome to 'Edu Clinic'! We're here to help make education
                  better for everyone. With our smart platform and experts,
                  we're fixing problems and making learning easier.
                </p>
              </div>
              <div className="md:flex grid justify-evenly mt-10">
                <Link href={`/serviceprovider/register`}>
                  <Button className="bg-white text-black m-2 md:w-[auto] w-[80vw]">
                    Signup as Organization
                  </Button>
                </Link>
                <Link href={`/student/auth/register`}>
                  <Button className="bg-white text-black m-2 md:w-[auto] w-[80vw]">
                    Signup as Student
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-[28%] h-[70vh]  md:flex hidden justify-end overflow-hidden ">
              <div className="h-[100%] w-[100%] object-cover pt-5 pr-5">
                <Image
                  src="/hero2.png"
                  layout="responsive"
                  width={800}
                  height={900}
                  alt="hero2"
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] md:flex justify-center md:m-0 mt-5 hidden">
            <div className=" w-[95%] bg-slate-100 rounded-lg h-[130px] grid grid-cols-6 items-center">
                <div className="border-r-4 h-[80%] col-span-1 flex items-center justify-center"><p className="text-start font-semibold text-2xl p-5">Over 100+ companies at one place</p></div>
                <div className="border-r-4 h-[80%] col-span-1 flex items-center justify-center"><p className="text-center  font-semibold text-xl">Google</p></div>
                <div className="border-r-4 h-[80%] col-span-1 flex items-center justify-center"><p className="text-center  font-semibold text-xl">Infosys</p></div>
                <div className="border-r-4 h-[80%] col-span-1 flex items-center justify-center"><p className="text-center  font-semibold text-xl">MicroWiz</p></div>
                <div className="border-r-4 h-[80%] col-span-1 flex items-center justify-center"><p className="text-center  font-semibold text-xl">HP</p></div>
                <div className=" h-[80%] flex items-center justify-center "><p className="text-center font-semibold text-xl">Dell</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-center text-[20px] font-semibold">See what you can learn from our</h1>
        <h1 className="text-center text-[40px] font-semibold mt-3"><span className="underline text-blue-900">Popular modules</span></h1>
        <div className="m-5 flex justify-around">
            <div className="md:w-[410px] md:h-[450px] w-[300px] h-[430px] rounded-md shadow-md">
                <div className="h-[45%] w-[100%] rounded-t-md bg-blue-500"></div>
                <div className="md:m-3 m-2 border-b-2 md:py-4 py-1 md:space-y-2 space-y-1">
                    <h1 className="text-sm">Offered by: Intel</h1>
                    <h1 className="font-semibold text-2xl">MERN stack</h1>
                    <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repudiandae delectus error illum aspernatur. Accusamus! </p>
                </div>
                <div className="flex px-4 justify-between items-center">
                    <span className="text-xl font-semibold">₹ 5000</span>
                    <Button>Explore Module</Button>
                </div>
            </div>
            <div className="md:w-[410px] md:h-[450px] w-[300px] h-[430px] rounded-md shadow-md">
                <div className="h-[45%] w-[100%] rounded-t-md bg-blue-500"></div>
                <div className="md:m-3 m-2 border-b-2 md:py-4 py-1 md:space-y-2 space-y-1">
                    <h1 className="text-sm">Offered by: Intel</h1>
                    <h1 className="font-semibold text-2xl">MERN stack</h1>
                    <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repudiandae delectus error illum aspernatur. Accusamus! </p>
                </div>
                <div className="flex px-4 justify-between items-center">
                    <span className="text-xl font-semibold">₹ 5000</span>
                    <Button>Explore Module</Button>
                </div>
            </div>
            <div className="md:w-[410px] md:h-[450px] w-[300px] h-[430px] rounded-md shadow-md">
                <div className="h-[45%] w-[100%] rounded-t-md bg-blue-500"></div>
                <div className="md:m-3 m-2 border-b-2 md:py-4 py-1 md:space-y-2 space-y-1">
                    <h1 className="text-sm">Offered by: Intel</h1>
                    <h1 className="font-semibold text-2xl">MERN stack</h1>
                    <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repudiandae delectus error illum aspernatur. Accusamus! </p>
                </div>
                <div className="flex px-4 justify-between items-center">
                    <span className="text-xl font-semibold">₹ 5000</span>
                    <Button>Explore Module</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
