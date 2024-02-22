"use client";
import Hero from "@/components/Hero";
import SelectedWork from "../components/Projects";
import GetToKnowMe from "../components/GetToKnowMe";
import Connect from "../components/Connect";

export default function Home() {
  return (
    <>
      <div className="md:max-w-[86%] lg:max-w-[70%] 2xl:max-w-[60%] max-w-screen overflow-x-hidden mx-auto -z-10">
        <Hero />
        <SelectedWork />
        <GetToKnowMe />
        <Connect />
      </div>
    </>
  );
}
