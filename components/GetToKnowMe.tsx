"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
type Props = {};

const GetToKnowMe = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-6 my-20 px-6">
        <h1 className="text-3xl md:text-3xl 2xl:text-4xl font-bold">
          Get to know me
        </h1>
        <div className="grid md:grid-cols-2 gap-5 py-4 overflow-hidden">
          {/*  About Me */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"/about"}>
              <div className="relative -z-10 flex flex-col justify-center items-center border h-[400px] md:h-[350px] lg:h-[400px] rounded-3xl bg-[#F6F6F6] dark:bg-[#151515] border-[#EBEBEB] dark:border-[#3c3c3c9c] shadow-md">
                <div className="flex flex-col mx-auto items-center -mt-64">
                  <h1 className="text-3xl font-bold text-center">About Me</h1>
                  <p className="text-para text-center">
                    Who I am and what I do.
                  </p>
                </div>
                <Image
                  src="/aboutme.png"
                  alt="alt"
                  width={200}
                  height={200}
                  className="absolute bottom-0 w-[300px] h-[250px] rounded-lg object-cover"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"/about"}>
              <div className="relative -z-10 flex flex-col justify-center items-center border h-[400px] md:h-[350px] lg:h-[400px] rounded-3xl bg-[#F6F6F6] dark:bg-[#151515] border-[#EBEBEB] dark:border-[#3c3c3c9c] shadow-md">
                <div className="flex flex-col mx-auto items-center -mt-64">
                  <h1 className="text-3xl font-bold text-center">Work</h1>
                  <p className="text-para text-center">
                    Projects I have worked on.
                  </p>
                </div>
                <Image
                  src="/work.png"
                  alt="alt"
                  width={200}
                  height={200}
                  className="absolute bottom-0 w-[300px] h-[250px] rounded-lg object-cover"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"/about"}>
              <div className="relative -z-10 flex flex-col justify-center items-center border h-[400px] md:h-[350px] lg:h-[400px] rounded-3xl bg-[#F6F6F6] dark:bg-[#151515] border-[#EBEBEB] dark:border-[#3c3c3c9c] shadow-md">
                <div className="flex flex-col mx-auto items-center -mt-64">
                  <h1 className="text-3xl font-bold text-center">Contact Me</h1>
                  <p className="text-para text-center">Get in touch with me.</p>
                </div>
                <Image
                  src="/contact.png"
                  alt="alt"
                  width={200}
                  height={200}
                  className="absolute bottom-0 w-[300px] h-[250px] rounded-lg object-cover"
                />
              </div>
            </Link>
          </motion.div>
          {/* Tech Stack */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"/about"}>
              <div className="relative -z-10 flex flex-col justify-center items-center border h-[400px] md:h-[350px] lg:h-[400px] rounded-3xl bg-[#F6F6F6] dark:bg-[#151515] border-[#EBEBEB] dark:border-[#3c3c3c9c] shadow-md">
                <div className="flex flex-col mx-auto items-center -mt-64">
                  <h1 className="text-3xl font-bold text-center">Tech Stack</h1>
                  <p className="text-para text-center">
                    Technologies I have worked with.
                  </p>
                </div>
                <Image
                  src="/tech-stack.svg"
                  alt="alt"
                  width={200}
                  height={200}
                  className="absolute bottom-0 w-[300px] h-[250px] rounded-lg object-cover"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GetToKnowMe;
