import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/utils/socialLinks";
interface Props {}

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <div className="relative z-10">
      <Image
        src="/Footer_BG.svg"
        alt="alt"
        width={300}
        height={300}
        className="absolute bottom-0 w-full h-[280px] object-cover object-center -z-10 opacity-70"
      />
      {/* Add Hr line */}
      <hr className="border-[#00000019] dark:border-[#ffffff19] mb-[32px] z-10" />
      {/* Footer */}
      <div className="md:max-w-[80%] lg:max-w-[60%] mx-auto z-10">
        <div className="flex flex-col md:flex-row justify-between mx-auto pt-[12px] pb-[120px] md:pb-10 px-8 md:px-0">
          <div className="flex flex-col md:justify-between gap-3 md:gap-[93px]">
            <div>
              <p className="text-2xl font-bold">Logo</p>
              <p className="text-xs text-[#181818] dark:text-footer_text">
                Thanks for stopping by ッ
              </p>
            </div>
            <div>
              <p className="text-xs text-[#181818] dark:text-footer_text mb-3 md:mb-0">
                © {year} Swayam Terode. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between md:justify-start gap-7 md:gap-[120px] text-[#181818] dark:text-[#C5C5C5]">
            <div className="flex flex-col gap-[4px]">
              <p className="text-sm font-bold mb-7 dark:text-white ">Links</p>
              <div className="flex flex-col space-y-4">
                <Link href="/" scroll>
                  <p className="text-xs  hover:text-gray-500 dark:hover:text-white">
                    Home
                  </p>
                </Link>
                <Link href="/about" scroll>
                  <p className="text-xs  hover:text-gray-700 dark:hover:text-white">
                    About
                  </p>
                </Link>
                <Link href="/tech-stack" scroll>
                  <p className="text-xs  hover:text-gray-700 dark:hover:text-white">
                    Tech Stack
                  </p>
                </Link>
                <Link href="/contact" scroll>
                  <p className="text-xs  hover:text-gray-700 dark:hover:text-white">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-sm font-bold mb-7 dark:text-white ">
                Elsewhere
              </p>
              <div className="flex flex-col space-y-4">
                <SocialLinks name="Mail" isFooter={true} />
                <SocialLinks name="GitHub" isFooter={true} />
                <SocialLinks name="LinkedIn" isFooter={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
