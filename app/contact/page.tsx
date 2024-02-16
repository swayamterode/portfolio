import React from "react";
import { FaCircle } from "react-icons/fa";
type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex flex-col w-full md:w-[68%] mx-auto justify-start mt-[30%] sm:mt-[20%] md:mt-[15%] lg:mt-[18%] xl:mt-[8%] gap-2 pl-4 md:pl-0">
        <h1 className="text-5xl text-black dark:text-white font-bold ">
          Get in touch
        </h1>
        <span className="text-[#808080] ml-2">
          Lets build something awesome
        </span>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#ffffff19]" />
      <div className="h-[684] w-[358px] md:w-[680px] lg:w-[880px] my-20 mx-auto rounded-3xl border border-[#EBEBEB] dark:border-[#383737] bg-[#F6F6F6] dark:bg-[#181818]">
        <div className="px-7 pt-7">
          <div className="flex flex-row items-center gap-2 lg:gap-0">
            <div className="flex justify-start gap-2">
              <FaCircle className="text-[#F63636]" />
              <FaCircle className="text-[#F6C136]" />
              <FaCircle className="text-[#68F636]" />
            </div>
            <div className="flex mx-auto">
              <h1 className="text-lg lg:text-xl dark:text-white mr-3 md:mr-0 lg:ml-0 text-center">
                New Message
              </h1>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#1F1F1F]" />
          <div className="p-0 lg:p-4">
            {/* Email */}
            <div className="flex flex-row gap-2">
              <span>Email:</span>
              <input
                type="text"
                className="bg-inherit w-full placeholder:text-[#8F8F8F] dark:placeholder:text-[#4C4C4C] focus:outline-none focus:border-transparent focus:ring-transparent"
                placeholder="Enter your Email"
              />
            </div>
            <hr className="h-px my-5 bg-[#c5c5c5] border-0 dark:bg-[#1F1F1F]" />
            {/* Name */}
            <div className="flex flex-row gap-2">
              <span>Name:</span>
              <input
                type="text"
                className="bg-inherit w-full placeholder:text-[#8F8F8F] dark:placeholder:text-[#4C4C4C] focus:outline-none focus:border-transparent focus:ring-transparent"
                placeholder="Enter your name"
              />
            </div>
            <hr className="h-px my-5 bg-[#c5c5c5] border-0 dark:bg-[#1F1F1F]" />
            {/* Subject */}
            <div className="flex flex-row gap-2">
              <span>Subject:</span>
              <input
                type="text"
                className="bg-inherit w-full placeholder:text-[#8F8F8F] dark:placeholder:text-[#4C4C4C] focus:outline-none focus:border-transparent focus:ring-transparent"
                placeholder="Enter Subject"
              />
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#2F2F2F]" />
        {/* Message */}
        <div className="px-7 mb-5">
          <textarea
            className="bg-inherit w-full h-[200px] md:h-[244px] lg:h-[344px] resize-none placeholder:text-[#4C4C4C] bg-[#efefef] dark:bg-[#0D0D0D] rounded-2xl p-4 focus:outline-none focus:border-transparent focus:ring-transparent"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="px-7 pb-7 flex justify-end">
          <button
            type="submit"
            className="bg-[#1A1A1A] w-full lg:w-32 text-white px-[32px] py-[16px] rounded-xl shadow-inner inset-y-0 inset-x-0 shadow-[#3b3b3b] cursor-pointer font-semibold text-center"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
