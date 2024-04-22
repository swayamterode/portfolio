"use client";
import React, { useEffect, useState } from "react";
import HeroShimmer from "./HeroShimmer";
import { Avatar } from "@readyplayerme/visage";
import Button from "@/components/Button";
import { memo } from "react";

type Props = {};

type HeroInfo = {
  heading: string;
  description: string;
};
const Shimmer = () => {
  return <HeroShimmer />;
};

const Hero = (props: Props) => {
  const [info, setInfo] = useState<HeroInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const modelSrc = "/SwayamModel.glb";
  const animationSrc = "/Hi_animation.fbx";

  useEffect(() => {
    try {
      fetch(process.env.NEXT_PUBLIC_API_URL + "/api/hero")
        .then((res) => res.json())
        .then((data) => {
          setInfo(data);
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
        <div className="mt-40 mb-20 flex justify-start gap-[16px] p-6 md:p-4 h-96 relative">
          <div className="flex flex-col justify-center gap-[40px]">
            <div className="w-1/2 lg:w-full">
              <span className="text-6xl font-bold text-para sm:hidden">
                Hi{" "}
              </span>
              <h1 className="text-5xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-para">
                I&apos;m{" "}
                <span className=" text-black dark:text-white">
                  {info && info[0].heading}
                </span>
              </h1>
              <p className="text-md lg:text-xl text-para dark:text-para lg:w-[400px] text-balance mt-0 md:mt-4">
                {info && info[0].description}
              </p>
            </div>
            <div className="flex flex-col md:flex md:flex-row space-y-4 md:space-y-0 gap-[16px]">
              <Button text="See my resume" innerShadow={true} />
              <Button text="Get in touch" innerShadow={false} />
            </div>
          </div>
          {/* <motion.div
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
          </motion.div> */}
          <div className="absolute -top-12 xl:-top-12 -right-36 -z-50 w-full h-[23rem] md:h-[40rem] lg:h-[47rem] pr-[6.5rem] md:pr-[0rem] lg:pr-[0rem] pl-0 md:pl-[0px] xl:pl-48">
            <Avatar
              modelSrc={modelSrc}
              animationSrc={animationSrc}
              cameraInitialDistance={1.9}
              scale={1.03}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Hero);
