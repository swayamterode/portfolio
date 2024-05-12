"use client";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import Toastify from "@/utils/Toastify";

type Props = {};

const page = (props: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
          mode: "no-cors",
        },
      );
      if (response.status === 200) {
        Toastify.success("Email sent successfully");
      }
    } catch (error) {
      Toastify.error("Error: Could not send email");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full max-w-screen-lg mx-auto justify-start mt-40 gap-2 px-6 md:px-6">
        <h1 className="text-4xl md:text-5xl text-black dark:text-white font-bold ">
          Get in touch
        </h1>
        <span className="text-[#808080]">Lets build something awesome</span>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#ffffff19]" />
      <div className="px-6">
        <div className="max-w-screen-lg my-20 mx-auto rounded-3xl border border-[#EBEBEB] dark:border-[#383737] bg-[#F6F6F6] dark:bg-[#181818] shadow">
          <div className="px-7 pt-7">
            <div className="flex flex-row items-center gap-2 lg:gap-0">
              <div className="flex justify-start gap-2">
                <FaCircle className="text-[#F63636]" />
                <FaCircle className="text-[#F6C136]" />
                <FaCircle className="text-[#68F636]" />
              </div>
              <div className="flex mx-auto">
                <h1 className="text-lg lg:text-xl dark:text-white mr-3 md:mr-0 lg:ml-0 text-center">
                  New Message
                </h1>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#1F1F1F]" />
            <form onSubmit={handelSubmit}>
              <div className="p-0 lg:p-4">
                {/* Email */}
                <div className="flex flex-row gap-2">
                  <span>Email:</span>
                  <input
                    type="text"
                    className="bg-inherit w-full placeholder:text-[#8F8F8F] dark:placeholder:text-[#4C4C4C] focus:outline-none focus:border-transparent focus:ring-transparent"
                    placeholder="Enter your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-[#1F1F1F]" />
                {/* Name */}
                <div className="flex flex-row gap-2">
                  <span>Name:</span>
                  <input
                    type="text"
                    className="bg-inherit w-full placeholder:text-[#8F8F8F] dark:placeholder:text-[#4C4C4C] focus:outline-none focus:border-transparent focus:ring-transparent"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-[#1F1F1F]" />
                {/* Subject */}
                <div className="flex flex-row gap-2">
                  <span>Subject:</span>
                  <input
                    type="text"
                    required
                    className="bg-inherit w-full placeholder:text-[#8F8F8F] dark:placeholder:text-[#4C4C4C] focus:outline-none focus:border-transparent focus:ring-transparent"
                    placeholder="Enter Subject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#2F2F2F]" />
                {/* Message */}
                <div className="px-7 mb-5">
                  <textarea
                    className="bg-inherit w-full h-[200px] md:h-[244px] lg:h-[344px] resize-none placeholder:text-[#4C4C4C] bg-[#e6e5e5] dark:bg-[#0D0D0D] rounded-2xl p-4 focus:outline-none focus:border-transparent focus:ring-transparent"
                    required
                    placeholder="Enter your message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="px-7 pb-7 flex justify-end">
                  <button
                    type="submit"
                    className="bg-gray-300 dark:bg-[#1A1A1A] w-full lg:w-32 text-white px-[32px] py-[16px] rounded-xl shadow dark:shadow-inner inset-y-0 inset-x-0 shadow-[#969393] dark:shadow-[#3b3b3b] cursor-pointer font-semibold text-center"
                    disabled={isSending}
                  >
                    {!isSending ? (
                      <span className="text-black dark:text-white">Send</span>
                    ) : (
                      <div className="flex justify-center items-center cursor-not-allowed">
                        <CgSpinner className="w-6 h-6 animate-spin" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default page;
