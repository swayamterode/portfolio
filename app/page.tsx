"use client";
import Hero from "@/components/Hero";
import Projects from "../components/Projects";
import GetToKnowMe from "../components/GetToKnowMe";
import Connect from "../components/Connect";
export default function Home() {
  return (
    <>
      <div className="md:w-[86%] lg:w-[77%] xl:w-[66%] overflow-x-hidden mx-auto">
        <Hero />
        <div className="md:mt-[100px] lg:mt-[200px] my-20 px-6">
          <h1 className="text-4xl font-bold mb-10"> Projects</h1>
          <Projects />
        </div>
        <GetToKnowMe />
        <Connect />
      </div>
    </>
  );
}
