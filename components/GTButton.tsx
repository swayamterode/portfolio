import React from "react";

type Props = {
  fullWidth?: boolean;
};

const GTButton = ({ fullWidth }: Props) => {
  let width = fullWidth
    ? "w-full px-[32px] py-[16px] flex justify-center item-center"
    : "px-[32px] py-[16px]";
  return (
    <div className="flex justify-center items-center group">
      <p
        className={`flex gap-3 items-center bg-[#1A1A1A] text-white group-hover:text-slate-300 ${width} rounded-xl shadow-inner inset-y-0 inset-x-0 shadow-[#3b3b3b] cursor-pointer font-semibold text-center transition-all duration-300`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.93367 10L1.08987 3.73239C0.608672 2.09667 2.14094 0.585388 3.75514 1.10362C8.20665 2.53274 12.4553 4.53713 16.3948 7.06662C17.5259 7.79292 19 8.4417 19 10C19 11.5583 17.5259 12.2071 16.3948 12.9334C12.4553 15.4629 8.20666 17.4673 3.75514 18.8964C2.14094 19.4146 0.608671 17.9033 1.08987 16.2676L2.93367 10ZM2.93367 10H7.83493"
            stroke="CurrentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Get in touch
      </p>
    </div>
  );
};

export default GTButton;
