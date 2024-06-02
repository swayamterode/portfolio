"use client";
import React from "react";
import Image from "next/image";
import GTButton from "../../components/GTButton";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialLinks from "@/utils/SocialLinks";
import { WHO_IAM_DATA, WHAT_I_DO } from "@/constants/data";
type Props = {};

const about: React.FC<Props> = () => {
  // const [data, setData] = useState<any>();

  // React.useEffect(() => {
  //   fetch(process.env.NEXT_PUBLIC_API_URL + "/api/about-me")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setData(data[0]); // assuming data[0] is the object with the properties you need
  //     });
  // }, []);

  return (
    <div className="mb-10">
      {/* Page heading */}
      <div className="flex flex-col w-full md:w-[70%] mx-auto justify-start mt-40 md:mt-[15%] lg:mt-[18%] xl:mt-[8%] gap-2 px-6 lg:px-0">
        <h1 className="text-4xl md:text-5xl text-black dark:text-white font-bold ">
          A little bit about me
        </h1>
        <span className="dark:text-[#808080]">Who I am and what I do.</span>
      </div>

      {/* Divider */}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#ffffff19]" />

      {/* Content */}
      <div className="flex flex-col justify-between lg:flex-row w-full md:w-[70%] mx-auto min-h-[31rem]">
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
            <h1 className="text-lg dark:text-[#8080808c] font-medium">
              Who I am
            </h1>
            <p className="dark:text-para font-light">{WHO_IAM_DATA}</p>
          </div>
          <div className="pt-6 flex flex-col text-justify">
            <h1 className="text-lg dark:text-[#8080808c] font-medium">
              What I do
            </h1>
            <p className="dark:text-para font-light">{WHAT_I_DO}</p>
          </div>
          <div className="pt-6 flex flex-col text-justify">
            <p className="dark:text-para font-light">
              Hey, eager to connect? Drop me a line via{" "}
              <SocialLinks name="Mail" />, or let's spark up a conversation on{" "}
              <SocialLinks name="Twitter" /> ! Curious about my journey? Dive
              into my resume for a sneak peek, or let's link up on{" "}
              <SocialLinks name="LinkedIn" /> for a deeper dive into my
              professional endeavors. Can't wait to connect and explore
              opportunities together! 🚀💬
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
          <Link href={"/contact"} scroll>
            <GTButton />
          </Link>
        </div>
      </div>
      <Link href="/contact" scroll>
        <div className="flex justify-center mt-8 lg:hidden">
          <GTButton />
        </div>
      </Link>
    </div>
  );
};

export default about;
