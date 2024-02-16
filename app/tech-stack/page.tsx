"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cards } from "../constants/data";
type Props = {};

const page = (props: Props) => {
  // const [data, setData] = useState!(null);

  // useEffect!(() => {
  //   fetch("http://localhost:3000/api/tech-stack")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  return (
    <>
      <div className="mb-10">
        {/* Page heading */}
        <div className="flex flex-col w-full md:w-[70%] mx-auto justify-start mt-[30%] sm:mt-[20%] md:mt-[15%] lg:mt-[18%] xl:mt-[8%] gap-2 px-6 lg:px-0">
          <h1 className="text-4xl md:text-5xl text-black dark:text-white font-bold ">
            Tech Stack & Tools
          </h1>
          <span className="text-[#808080]">Who I am and what I do.</span>
        </div>

        {/* Divider */}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#ffffff19]" />

        {/* Tech stack */}
        <h1 className="mt-10 md:mt-14 mb-3 md:mb-10 pl-6 md:p-0 text-para text-4xl font-bold md:w-[70%] mx-auto">
          Dev & Design
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full md:w-[70%] mx-auto gap-4 p-6 md:p-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col relative bg-[#F3F3F3] dark:bg-[#181818] mx-auto w-full h-[86px] md:h-[300px] rounded-3xl"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={card.width}
                  height={card.height}
                  className={card.className}
                />
                <div className="absolute bottom-3 md:bottom-5 flex justify-start mx-auto w-full px-5 items-center">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={60}
                    height={200}
                    className="md:hidden"
                  />
                  <div className="flex w-full justify-between items-center pl-4">
                    <span className="flex md:text-xl md:font-semibold">
                      {card.title}
                    </span>
                    <span className="flex border rounded-3xl px-3 py-1 border-white bg-white dark:bg-[#181818] dark:border-[#3C3C3C] text-[#808080] text-xs">
                      {card.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
