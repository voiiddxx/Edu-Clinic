"use client"
import { useState } from "react";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const StudentNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between px-6 sm:px-32 items-center q">
       {/* Mobile Navigation Button */}
       <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16v12H4zM4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
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
      <nav className={`md:flex gap-8 p-5  ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
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
        {/* ... other navigation links */}
      </nav>

      {/* User Section */}
      <div className="flex items-center ">
        <div className="h-12 w-12 border-[1px] border-zinc-600 rounded-full flex justify-center items-center m-5">
          <Link href={`/student/profile`}>
            <User className="text-blue-700" size={20} />
          </Link>
        </div>
        <div className="sm:h-12 h-10 gap-2 rounded-sm flex items-center sm:px-4 px-2 bg-blue-700">
          <LogOut color="white" size={17} />
          <p className="text-sm font-normal text-white">Logout</p>
        </div>
      </div>

     
    </div>
  );
};

export default StudentNav;
