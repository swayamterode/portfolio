import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { HiCode } from "react-icons/hi";
type Props = {};

const SelectedWork = (props: Props) => {
  return (
    <>
      <div className="md:mt-[100px] lg:mt-[200px] mb-10 p-4">
        <h1 className="text-3xl font-bold mb-10"> Projects</h1>
        <div className="flex flex-col border rounded-3xl shadow-md md:flex-row md:max-w-4xl 2xl:max-w-full border-[#EBEBEB] dark:border-[#383737] bg-[#FBFBFB] dark:bg-[#181818] ">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3 pl-10 pt-10 pr-10 md:pr-0">
              <Image
                src="/Logo.svg"
                alt="alt"
                width={300}
                height={300}
                className="w-14 h-14"
              />
              <h1 className="text-3xl font-bold">Parkbuddy</h1>
              <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400 text-justify 2xl:text-xl">
                Subbi is a side project that I’ve built to help me keep track of
                how much I spend on subscriptions and also to prevent the
                “accidental” bill after a 14-day trail ends. It helps you keep
                track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card,
                Bank Cards, and many more.
              </p>
            </div>
            <div className="flex gap-2 items-center mb-4 pl-10 ">
              <Link href={"https://parkbuddy.vercel.app/"} target="_blank">
                <span className="hover:text-gray-300">
                  <FiExternalLink className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                </span>
              </Link>
              <p className="h-[16px] w-[1px] bg-[#00000042] dark:bg-[#ffffff3f]"></p>
              <Link
                href={"https://github.com/swayamterode/Parkbuddy"}
                target="_blank"
              >
                <span className="hover:text-gray-300">
                  <HiCode className="text-orange-500 hover:text-orange-600 text-xl cursor-pointer" />
                </span>
              </Link>
            </div>
          </div>
          <Image
            src="/ParkbuddyMockup.png"
            alt="Parkbuddy"
            width={265}
            height={265}
            className="md:w-[380px] md:h-[380px] lg:w-[310.17px] lg:h-[442.82px] object-contain ml-10 hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default SelectedWork;
