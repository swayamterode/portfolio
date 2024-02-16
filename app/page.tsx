"use client";
import Hero from "@/components/Hero";
import SelectedWork from "../components/Projects";
import GetToKnowMe from "../components/GetToKnowMe";
import Colab from "../components/Colab";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="md:max-w-[86%] lg:max-w-[70%] 2xl:max-w-[60%] max-w-screen overflow-x-hidden mx-auto -z-10">
        <Hero />
        <SelectedWork />
        <GetToKnowMe />
        <Colab />
      </div>
    </>
  );
}
