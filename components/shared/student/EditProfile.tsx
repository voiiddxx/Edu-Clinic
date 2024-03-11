"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalDetailForm from "./EditProfileComponents/PersonalDetailForm";
import EducationDetailForm from "./EditProfileComponents/EducationDetailForm";
import SkillDetailForm from "./EditProfileComponents/SkillDetailsForm";

function EditProfile() {
  const [option, setOption] = useState(0);

  const renderForm = () => {
    if (option == 0) {
      return (
        <>
          <PersonalDetailForm />
        </>
      );
    }
    if (option == 1) {
      return (
        <>
          <EducationDetailForm />
        </>
      );
    }
    if (option == 2) {
      return (
        <>
          <SkillDetailForm />
        </>
      );
    }
  };

  return (
    <div className=" h-auto flex justify-center items-center sm:p-10">
      <div className=" sm:w-[60%] sm:h-[60%]">
        <h1 className="text-center m-3 text-xl font-semibold">
          Update your Profile
        </h1>
        <div className="grid grid-cols-12 bg-slate-50 rounded-lg p-2 shadow-md">
          <div className=" col-span-4 pt-4">
            <p
              className={`p-2 m-2 rounded-lg hover:bg-blue-400 hover:text-white ${
                option === 0 ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => {
                setOption(0);
              }}
            >
              Personal Details *
            </p>
            <p
              className={`p-2 m-2 rounded-lg hover:bg-blue-400 hover:text-white ${
                option === 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => {
                setOption(1);
              }}
            >
              Educational Details *
            </p>
            <p
              className={`p-2 m-2 rounded-lg hover:bg-blue-400 hover:text-white ${
                option === 2 ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => {
                setOption(2);
              }}
            >
              Skills
            </p>
          </div>
          <div className="col-span-8 p-5 h-[100%]">{renderForm()}</div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
