"use client";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
type Props = {};

const page = (props: Props) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex flex-col w-full md:w-[68%] mx-auto justify-start mt-[30%] sm:mt-[20%] md:mt-[10%] lg:mt-[8%] gap-2 pl-4">
        <h1 className="text-5xl text-black dark:text-white font-bold ">
          Terminal
        </h1>
        <span className="text-[#808080] ml-2">
          Lets build something awesome
        </span>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#ffffff19]" />
      <div className="h-[684] w-[358px] md:w-[680px] lg:w-[1100px] my-20 mx-auto rounded-3xl border border-[#EBEBEB] dark:border-[#383737] bg-[#F6F6F6] dark:bg-[#181818]">
        <div className="px-7 pt-7">
          <div className="flex flex-row items-center ">
            <div className="flex justify-start gap-2">
              <FaCircle className="text-[#F63636]" />
              <FaCircle className="text-[#F6C136]" />
              <FaCircle className="text-[#68F636]" />
            </div>
          </div>
          {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#1F1F1F]" /> */}
          <div className="mt-4">
            {/* Email */}
            <div className="flex flex-row gap-2">
              <span className="font-mono font-semibold">
                <span className="text-orange-400">visitor</span>@
                <span className="text-green-500">terminal.swayam</span>:~$
              </span>
              <input
                type="text"
                value={text}
                className="bg-inherit w-full caret-green-500 placeholder:text-[#8F8F8F] dark:placeholder:text-[#4C4C4C] focus:outline-none focus:border-transparent focus:ring-transparent"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
