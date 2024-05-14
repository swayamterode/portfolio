import React from "react";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  MAIL_URL,
} from "@/constants/data";

type Props = {
  name: string;
  isFooter?: boolean;
};

let links = new Map<string, string>([
  ["GitHub", GITHUB_URL],
  ["LinkedIn", LINKEDIN_URL],
  ["Twitter", TWITTER_URL],
  ["Mail", MAIL_URL],
]);

const SocialLinks = ({ name, isFooter }: Props) => {
  const link = links.get(name);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={
        isFooter
          ? `text-xs hover:text-gray-700 dark:hover:text-white`
          : `text-black font-semibold dark:text-white underline cursor-pointer`
      }
    >
      {name}
    </a>
  );
};

export default SocialLinks;
