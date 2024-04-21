import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { HiCode } from "react-icons/hi";
import { projects } from "@/constants/project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col border rounded-3xl shadow-md md:flex-row w-fit border-[#EBEBEB] dark:border-[#383737] bg-[#FBFBFB] dark:bg-[#181818] mb-10"
        >
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3 pl-10 pt-10 pr-10 md:pr-0">
              <Image
                src={project.logo}
                alt={project.alt}
                width={300}
                height={300}
                className="w-14 h-14"
              />
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 text-justify 2xl:text-xl">
                {project.description}
              </p>
            </div>
            <div className="flex gap-2 items-center mb-4 pl-10">
              <span className="font-medium">Tech Stack:</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-[#FBFBFB] dark:bg-[#353535] rounded-lg border-[#EBEBEB] dark:border-[#383737]">
                  React
                </span>

                <span className="px-2 py-1 text-xs font-semibold text-white bg-[#FBFBFB] dark:bg-[#353535] rounded-lg border-[#EBEBEB] dark:border-[#383737]">
                  React
                </span>
                <span className="px-2 py-1 text-xs font-semibold text-white bg-[#FBFBFB] dark:bg-[#353535] rounded-lg border-[#EBEBEB] dark:border-[#383737]">
                  React
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-4 pl-10 ">
              <Link href={project.link} target="_blank">
                <span className="hover:text-gray-300">
                  <FiExternalLink className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                </span>
              </Link>
              <p className="h-[16px] w-[1px] bg-[#00000042] dark:bg-[#ffffff3f]"></p>
              <Link href={project.github} target="_blank">
                <span className="hover:text-gray-300">
                  <HiCode className="text-orange-500 hover:text-orange-600 text-xl cursor-pointer" />
                </span>
              </Link>
            </div>
          </div>
          <Image
            src={project.image}
            alt={project.alt}
            width={265}
            height={265}
            className="md:w-[380px] md:h-[390px] lg:w-[310.17px] lg:h-[420px] object-contain mx-10 hidden md:block"
          />
        </div>
      ))}
    </>
  );
};

export default Projects;
