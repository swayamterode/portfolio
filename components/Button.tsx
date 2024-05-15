import React from "react";

interface ButtonProps {
  text: string;
  innerShadow: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, innerShadow }) => {
  const buttonClass = innerShadow
    ? "bg-[#1A1A1A] px-[32px] py-[16px] text-white rounded-xl shadow-inner inset-y-0 inset-x-0 shadow-[#3b3b3b] cursor-pointer font-semibold text-center"
    : "bg-[#1A1A1A]/10 px-[32px] py-[16px] dark:bg-[#1A1A1A] text-[#181818] dark:text-para rounded-xl text-center -z-50 ";

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
