"use client";
import Projects from "@/components/Projects";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col w-full md:w-[68%] mx-auto justify-start mt-40 gap-2 px-10 md:px-0">
        <h1 className="text-4xl md:text-5xl text-black dark:text-white font-bold">
          Projects
        </h1>
        <span className="dark:text-[#808080]">
          Lets build something awesome
        </span>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#ffffff19]" />
      <div className="flex flex-col justify-center items-center mx-auto w-[358px] md:w-[680px] lg:w-[1000px] my-20 px-2 md:px-0">
        <Projects />
      </div>
    </div>
  );
};

export default Page;
