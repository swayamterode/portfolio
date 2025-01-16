import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { HiCode } from "react-icons/hi";
import { projects } from "@/constants/project";

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col border rounded-3xl shadow-md md:flex-row w-full border-[#EBEBEB] dark:border-[#383737] bg-[#FBFBFB] dark:bg-[#181818] mb-10 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col justify-between p-10 md:w-[70%]">
              <div className="flex flex-col gap-3">
                <Image
                  src={project.logo || "/placeholder.svg"}
                  alt={project.alt}
                  width={56}
                  height={56}
                  className="object-contain"
                />
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 text-justify 2xl:text-xl">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 items-center mb-4">
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
            <div className=" my-10">
              <Image
                src="/mockup_parkbuddy.png"
                alt="ParkBuddy"
                width={190}
                height={190}
                className="rotate-6"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
