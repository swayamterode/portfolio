import React from "react";
import GTButton from "./GTButton";
import Link from "next/link";
interface Props {}

const Connect = (props: Props) => {
  return (
    <div className="mb-20">
      <div className="md:flex justify-center items-center md:justify-between md:items-center py-10 px-6">
        <div className="flex flex-col justify-center items-center gap-2 w-full mx-auto">
          <h1 className="text-3xl font-bold w-full text-center md:text-start">
            Lets work together
          </h1>
          <p className=" w-full text-para text-center md:text-start">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>

        <div className="mt-5 w-full md:w-[60%]">
          <Link href="/contact">
            <GTButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
