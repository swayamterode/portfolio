import React from "react";
interface Props {
  url: string;
  name: string;
}
const SocialLinks = ({ url, name }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-black font-semibold dark:text-white underline cursor-pointer"
    >
      {name}
    </a>
  );
};

export default SocialLinks;
