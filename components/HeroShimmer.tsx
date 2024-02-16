import React from "react";

type Props = {};

const HeroShimmer = (props: Props) => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div className="w-full">
        <div className="h-9 bg-gray-200 rounded-full dark:bg-gray-700 w-80 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5 opacity-0"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5 opacity-0"></div>
        <div className=" space-y-4 md:space-y-0 flex flex-col md:flex md:flex-row justify-start gap-[16px] mt-3">
          <div className="md:w-40 h-12 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
          <div className="md:w-40 h-12 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-full sm:w-96 dark:bg-gray-700 ">
          <div className="w-56 h-56 lg:w-96 lg:h-96 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse" />
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default HeroShimmer;
