"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroShimmer from "./HeroShimmer";
type Props = {};
const Shimmer = () => {
  return <HeroShimmer />;
};
const Hero = (props: Props) => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch("http://localhost:3000/api/hero")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(data[0].heading);
          setHeading(data[0].heading);
          setDescription(data[0].description);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {loading ? (
        <div className="mt-40 p-6 md:p-4">
          <Shimmer />
        </div>
      ) : (
        <div className="mt-40 flex justify-start gap-[16px] p-6 md:p-4">
          <div className="flex flex-col justify-center gap-[40px]">
            <div>
              <span className="text-6xl font-bold text-para sm:hidden">
                Hi 👋🏼{" "}
              </span>
              <h1 className="text-5xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-para">
                I&apos;m{" "}
                <span className=" text-black dark:text-white">{heading}</span>
              </h1>
            </div>
            <p className="text-xl text-para dark:text-para">{description}</p>
            <div className=" space-y-4 md:space-y-0 md:flex justify-start gap-[16px]">
              <p className="bg-[#1A1A1A] text-white px-[32px] py-[16px] rounded-xl shadow-inner inset-y-0 inset-x-0 shadow-[#3b3b3b] cursor-pointer font-semibold text-center">
                See my resume
              </p>
              <p className="bg-[#1A1A1A]/10 dark:bg-[#1A1A1A] text-[#181818] dark:text-para px-[32px] py-[16px] rounded-xl  text-center">
                Get in touch
              </p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="hidden sm:block -z-10 overflow-x-hidden"
          >
            <Image
              src={"/Hero.svg"}
              width={740}
              height={740}
              alt="Hero Image"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Hero;
