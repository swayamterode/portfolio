import React from "react";
import ThemeSwitch from "./ThemeSwitcher";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="hidden md:flex flex-row justify-between p-[16px] bg-[#ffffff3f] dark:bg-[#18181d4c] border dark:border-[#282828] flex-shrink-0 rounded-2xl mt-[32px] ml-auto backdrop-blur-3xl fixed top-0 w-[90%] lg:w-[70%] mx-auto z-50">
      {/* Img */}
      {/* Nav Links */}
      <div className="flex flex-row justify-between gap-[40px] items-center">
        <Link href={"/"}>Logo</Link>
        <Link
          href="/about"
          className="text-light-nav dark:text-nav font-normal leading-normal"
        >
          About
        </Link>
        <Link
          href="/work"
          className="text-light-nav dark:text-nav font-normal leading-normal"
        >
          Work
        </Link>
        <Link
          href="/tech-stack"
          className="text-light-nav dark:text-nav font-normal leading-normal"
        >
          Tech Stack
        </Link>
        <Link
          href="/contact"
          className="text-light-nav dark:text-nav font-normal leading-normal"
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-row gap-[24px] justify-center items-center">
        <Link href="https://www.linkedin.com/in/swayamterode/">
          <ImLinkedin className="text-xl" />
        </Link>
        <Link href="https://twitter.com/swayamterode">
          <BsTwitterX className="text-xl" />
        </Link>
        <Link href="https://github.com/swayamterode">
          <FaGithub className="text-xl" />
        </Link>
        {/* Line */}
        <p className="h-[24px] w-[1px] bg-[#00000042] dark:bg-[#ffffff3f]"></p>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
