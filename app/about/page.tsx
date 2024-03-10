"use client";
import React from "react";
import Image from "next/image";
import GTButton from "../../components/GTButton";
import { motion } from "framer-motion";
import { useState } from "react";
type Props = {};

const page = (props: Props) => {
  const [heading1, setHeading1] = useState("");
  const [heading2, setHeading2] = React.useState("");
  const [description1, setDescription1] = React.useState("");
  const [description2, setDescription2] = React.useState("");
  React.useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/about-me")
      .then((data) => data.json())
      .then((data) => {
        setHeading1(data[0].heading1);
        setDescription1(data[0].description1);
        setHeading2(data[0].heading2);
        setDescription2(data[0].description2);
      });
  }, []);
  return (
    <div className="mb-10">
      {/* Page heading */}
      <div className="flex flex-col w-full md:w-[70%] mx-auto justify-start mt-40 md:mt-[15%] lg:mt-[18%] xl:mt-[8%] gap-2 px-6 lg:px-0">
        <h1 className="text-4xl md:text-5xl text-black dark:text-white font-bold ">
          A little bit about me
        </h1>
        <span className="text-[#808080]">Who I am and what I do.</span>
      </div>

      {/* Divider */}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#ffffff19]" />

      {/* Content */}
      <div className="flex flex-col justify-between lg:flex-row w-full md:w-[70%] mx-auto">
        {/* Image for Mobile*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col gap-6 lg:hidden">
            <Image
              src="/About.png"
              alt="alt"
              width={200}
              height={200}
              className="w-[60%] mx-auto"
            />
          </div>
        </motion.div>
        {/* Common Description */}
        <div className="flex flex-col lg:w-[80%] px-6 lg:px-0">
          <div className="pt-6 flex flex-col text-justify ">
            <h1 className="text-lg text-[#8080808c] font-medium">{heading1}</h1>
            <p className="text-para font-light">{description1}</p>
          </div>
          <div className="pt-6 flex flex-col text-justify">
            <h1 className="text-sm text-[#8080808c] font-medium">{heading2}</h1>
            <p className="text-para font-light">{description2}</p>
          </div>
          {/* <div className="pt-6 flex flex-col text-justify">
            <p className="text-para font-light">
              Before delving into the realm of front end engineering, I spent
              five years as a graphic designer. This background has equipped me
              with a keen eye for aesthetics and a deep understanding of
              user-centered design principles. It enables me to seamlessly blend
              functionality and visual appeal in every project I undertake.
            </p>
          </div> */}
          <div className="pt-6 flex flex-col text-justify">
            <p className="text-para font-light">
              Feel free to reach out via{" "}
              <a
                href="mailto:swayamterodex@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-black font-semibold dark:text-white underline cursor-pointer"
              >
                e-mail
              </a>
              , or follow me on{" "}
              <a
                href="https://twitter.com/swayamterode"
                target="_blank"
                rel="noreferrer"
                className="text-black font-semibold dark:text-white underline cursor-pointer"
              >
                Twitter
              </a>
              . Want to see where I’ve worked? Check out my Resume, or Connect
              with me on{" "}
              <a
                href="https://www.linkedin.com/in/swayamterode/"
                target="_blank"
                rel="noreferrer"
                className="text-black font-semibold dark:text-white underline cursor-pointer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
        {/* Image for Lg Devices */}
        <div className="hidden lg:flex flex-col gap-6 ">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/About.png"
              alt="alt"
              width={400}
              height={400}
              className="mx-auto cursor-pointer"
            />
          </motion.div>

          <GTButton />
        </div>
      </div>
      <div className="flex justify-center mt-8 lg:hidden">
        <GTButton />
      </div>
    </div>
  );
};

export default page;
