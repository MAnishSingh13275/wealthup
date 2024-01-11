import Link from "next/link";
import React from "react";
import { TiInputChecked } from "react-icons/ti";
import Code from "../../components/code";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-[#0A5783] to-[#18A19A]">
      <div className="relative text-white flex flex-col justify-center ]">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <h2 className=" text-5xl font-bold mt-10 ">
              Check your financial health{" "}
            </h2>
            <div className="flex justify-center mt-4 text-lg font-light">
              <h2 className="w-[55%]">
                Use WeathoMeter to get a free report card for your finances-
                within minutes!
              </h2>
            </div>
          </div>
          <div className="flex justify-center mt-[2rem]">
            <Link
              href={"/"}
              className="bg-[#FB7306] font-bold p-2 px-[1.5rem] text-xl rounded-[2rem]"
            >
              Get Started
            </Link>
          </div>
          <div className="flex justify-center">
            <div className=" iphone flex justify-center text-black mt-[4rem]">
              <div className="bg-black h-[39vw] w-[31vw] rounded-[2.5rem] border-white border-2 flex justify-center items-center ">
                <div className="bg-white h-[37vw] w-[29.5vw] rounded-[2rem] flex flex-col items-center ">
                  <div className="bg-black h-[2vw] w-[8vw] rounded-b-3xl"></div>
                  <div className="w-full">
                    <h2 className=" mt-[2vw] mx-[3vw] font-bold">
                      Your Financial Health
                    </h2>

                    <div className="">
                      <Code />
                    </div>

                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
