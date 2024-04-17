"use client";

import { useState } from "react";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StudentNav = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const LogoutNow = () => {
    localStorage.removeItem("x-auth-token");
    router.push("/");
  };

  return (
    <div className="flex justify-between px-6 sm:px-32 items-center q"> 
      {/* Mobile Navigation Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg className="w-6 h-6 fill-current text-gray-700" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {/* Logo Div */}
      <div className="">
        {" "}
        {/* Added flex-grow for responsiveness */}
        <a href="/student/home">
          <h1>EduClinic</h1>
        </a>
      </div>

      {/* Navigation Links */}
      <nav
        className={`md:flex gap-8 p-5 md:relative absolute md:top-0 top-16 bg-white left-0  space-x-4 rounded-r-lg shadow-lg md:shadow-none  ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {" "}
        {/* Hidden on small screens */}
        <Link href={`/student/home`}>
          {" "}
          <p>Home</p>
        </Link>
        {/* <Link href={`/student/home/services`}>  <p>Services</p></Link> */}
        {/* <Link href={`/student/home/module`}>  <p>Modules</p></Link> */}
        <Link href={`/student/home/organization`}>
          {" "}
          <p>Organizations</p>
        </Link>
        <Link href={`/student/home/discussion`}>
          {" "}
          <p>Discussion</p>
        </Link>
        <Link href={`/student/project`}>
          {" "}
          <p>Project fundraising</p>
        </Link>
      </nav>

      {/* User Section */}
      <div className="flex items-center ">
        <div className="h-12 w-12 border-[1px] border-zinc-600 rounded-full flex justify-center items-center m-5">
          <Link href={`/student/profile`}>
            <User className="text-blue-700" size={20} />
          </Link>
        </div>
        <div
          onClick={LogoutNow}
          className="sm:h-12 h-10 gap-2 rounded-sm flex items-center sm:px-4 px-2 bg-blue-700 cursor-pointer"
        >
          <LogOut color="white" size={17} />
          <p className="text-sm font-normal text-white">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default StudentNav;
