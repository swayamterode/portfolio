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
          className="relative flex flex-col border rounded-3xl shadow-md md:flex-row w-fit border-[#EBEBEB] dark:border-[#383737] bg-[#FBFBFB] dark:bg-[#181818] mb-10 min-h-[490px] md:max-h-[490px] max-w-[950px]"
        >
          <div className="flex flex-col justify-between md:w-[60%] p-10">
            <div className="flex flex-col gap-3">
              <Image
                src={project.logo}
                alt={project.alt}
                width={300}
                height={300}
                className="w-14 h-14 object-contain"
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
          <div className={project.imageDiv}>
            <Link href={project.link} target="_blank">
              <Image
                src={project.image}
                alt={project.alt}
                width={234}
                height={234}
                className={project.className}
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
