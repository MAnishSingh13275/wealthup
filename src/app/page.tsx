import vector from "../../public/Vector.svg";

import { TiInputChecked } from "react-icons/ti";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";


export default async function Home() {
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
            <Link href={"/captcha"} className="bg-[#FB7306] font-bold p-2 px-[1.5rem] text-xl rounded-[2rem]">
              Get Started
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 ml-[5vw] mt-[8rem]">
              <div className="flex items-end">
                <TiInputChecked className="text-4xl font-light" />
                <div>
                  <h1 className="text-[1.5vw]">Expected Retirement Age</h1>
                  <div className="bg-white mt-3 h-[2px]"></div>
                </div>
              </div>
              <div className="flex items-end">
                <TiInputChecked className="text-4xl font-light" />
                <div>
                  <h1 className="text-[1.5vw]">Expected Retirement Age</h1>
                  <div className="bg-white mt-3 h-[2px]"></div>
                </div>
              </div>
            </div>
            <div className=" iphone flex justify-center text-black mt-[4rem]">
              <div className="bg-black h-[39vw] w-[31vw] rounded-[2.5rem] border-white border-2 flex justify-center items-center ">
                <div className="bg-white h-[37vw] w-[29.5vw] rounded-[2rem] flex flex-col items-center ">
                  <div className="bg-black h-[2vw] w-[8vw] rounded-b-3xl"></div>
                  <div className="w-full">
                    <h2 className=" mt-[2vw] mx-[3vw] font-bold">
                      Your Financial Health
                    </h2>

                    <div className="bg-[#D6E9F2] w-[20vw] p-[1vw] mx-auto rounded-lg my-2">
                      <p className="text-[0.8vw] font-light">
                        You are financially coping
                      </p>
                      <div className="flex gap-3 mt-2 mx-auto">
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                      </div>
                    </div>
                    <div className="bg-[#D6E9F2] w-[20vw] p-[1vw] mx-auto rounded-lg my-2">
                      <p className="text-[0.8vw] font-light">
                        You are financially coping
                      </p>
                      <div className="flex gap-3 mt-2 mx-auto">
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                        <div className="bg-blue-500 w-[1.6vw] h-[0.5vh]"></div>
                      </div>
                    </div>

                    <div className="flex w-full">
                      <div className="mx-8 mt-[2vw] w-1/2 ">
                        <h1 className="font-bold text-[1.2vw]">
                          You are expected to retire at
                        </h1>
                        <button className="bg-[#FB7306] font-bold text-white text-[0.8vw] px-2 py-[0.3vw] mt-[1vh] rounded-[2rem]">
                          Explore my roadmap
                        </button>
                      </div>

                      <div className="w-1/2 flex justify-center items-center">
                        <h2 className="font-bold text-[1.5vw] w-fit border-[#FB7306] border-[5px] rounded-full p-2 mt-[3vw]  my-auto">
                          75
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 mr-[5vw] mt-[8rem]">
              <div className="flex items-end">
                <div>
                  <h1 className="text-[1.5vw]">Expected Retirement Age</h1>
                  <div className="bg-white mt-3 h-[2px]"></div>
                </div>
                <TiInputChecked className="text-4xl font-light" />
              </div>
              <div className="flex items-end">
                <div>
                  <h1 className="text-[1.5vw]">Expected Retirement Age</h1>
                  <div className="bg-white mt-3 h-[2px]"></div>
                </div>
                <TiInputChecked className="text-4xl font-light" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex relative z-50 flex-col items-center justify-center mt-[0vw] bottom-[7vw] w-fit mx-auto">
          <div className="my-[1vw]">
            <h1 className="text-[4vw] font-bold">How it works?</h1>
          </div>
          <div className="flex">
            <div className="mx-[5vw]">
              <GrDocumentText className="text-[4vw] ml-[1.5rem] font-light" />
              <p className="w-[8rem] ">Answer few questions</p>
            </div>
            <div className="mx-[5vw]">
              <GrDocumentText className="text-[4vw] ml-[1.5rem] font-light" />
              <p className="w-[8rem] ">Answer few questions</p>
            </div>
            <div className="mx-[5vw]">
              <GrDocumentText className="text-[4vw] ml-[1.5rem] font-light" />
              <p className="w-[8rem] ">Answer few questions</p>
            </div>
          </div>
          <div className="flex justify-center mt-[2vw]">
            <button className="bg-[#FB7306] font-bold p-[0.5vw] px-[1.5rem] text-[1.7vw] rounded-[2rem]">
              Get Started
            </button>
          </div>
        </div>
        <div
          className="h-[37vw] mb-[-40vw] relative  bg-no-repeat bg-cover bottom-[40vw]"
          style={{
            backgroundImage: `url(${vector.src})`,
          }}
        ></div>
      </div>
    </div>
  );
}
