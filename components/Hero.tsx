"use client";
import React, { useEffect, useState } from "react";
import HeroShimmer from "./HeroShimmer";
import { Avatar } from "@readyplayerme/visage";
import Button from "@/components/Button";
import { memo } from "react";
import Link from "next/link";
import GTButton from "./GTButton";

type Props = {};

// type HeroInfo = {
//   heading: string;
//   description: string;
// };
// const Shimmer = () => {
//   return <HeroShimmer />;
// };

const Hero = (props: Props) => {
  // const [info, setInfo] = useState<HeroInfo[]>([]);
  // const [loading, setLoading] = useState(true);

  const modelSrc = "/SwayamModel.glb";
  const animationSrc = "/Hi_animation.fbx";

  // useEffect(() => {
  //   try {
  //     fetch(process.env.NEXT_PUBLIC_API_URL + "/api/hero")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setInfo(data);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  return (
    <>
      {
        // loading ? (
        //   <div className="mt-40 p-6 md:p-4">
        //     <Shimmer />
        //   </div>
        // ) : (
        <div className="mt-40 mb-20 flex justify-start gap-[16px] p-6 md:p-4 h-96 relative">
          <div className="flex flex-col justify-center gap-0 md:gap-[40px]">
            <div className="w-1/2 lg:w-full">
              <span className="text-3xl md:text-6xl font-bold text-para sm:hidden">
                Hi{" "}
              </span>
              <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-para">
                I&apos;m{" "}
                <span className=" text-black dark:text-white">
                  {/* {info && info[0].heading} */}
                  Swayam Terode
                </span>
              </h1>
              <p className="text-sm md:text-md lg:text-xl text-para dark:text-para lg:w-[600px] text-balance mt-0 md:mt-4">
                {/* {info && info[0].description} */}I am a Software Developer
                specializing in React and Next.js, now learning backend
                development. Let's build something amazing together!
              </p>
            </div>
            <div className=" mt-7 flex flex-col md:flex md:flex-row space-y-4 md:space-y-0 gap-[16px] z-20">
              <Button text="See my resume" innerShadow={true} />
              <Link href="/contact">
                <GTButton fullWidth={true} />
              </Link>
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
          <div className="absolute -top-24 md:-top-20 xl:-top-[5.5rem] -right-32 w-full h-[23rem] md:h-[40rem] lg:h-[47rem] pr-[6.5rem] md:pr-[0rem] lg:pr-[0rem] pl-0 md:pl-[0px] xl:pl-48 z-0">
            <Avatar
              modelSrc={modelSrc}
              animationSrc={animationSrc}
              cameraInitialDistance={2}
              fov={50}
              headMovement={true}
              environment="soft"
              // idleRotation={true}
              fillLightIntensity={3}
              keyLightColor="#FFFFFF"
              keyLightIntensity={1}
              bloom={{
                intensity: 1,
                kernelSize: 1,
                luminanceSmoothing: 1,
                luminanceThreshold: 1,
                materialIntensity: 1,
                mipmapBlur: true,
              }}
              backLightIntensity={6}
              dpr={2}
              effects={{
                ambientOcclusion: false,
                bloom: {
                  intensity: 1,
                  kernelSize: 1,
                  luminanceSmoothing: 1,
                  luminanceThreshold: 1,
                  materialIntensity: 2,
                  mipmapBlur: true,
                },
              }}
              emotion={{
                cheekSquintLeft: 0.3,
                eyeLookInRight: 0.6,
                eyeLookOutLeft: 0.6,
                jawOpen: 0.5,
                mouthDimpleLeft: 0.3,
                mouthPressLeft: 0.1,
                mouthSmileLeft: 0.2,
                mouthSmileRight: 0.1,
              }}
            ></Avatar>
          </div>
        </div>
        // )
      }
    </>
  );
};

export default memo(Hero);
