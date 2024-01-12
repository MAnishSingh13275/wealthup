"use client";
import React, { useEffect, useState } from "react";
import { IoReloadCircleOutline } from "react-icons/io5";

const GeneratedCode = () => {
  const [generatedCode, setGeneratedCode] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [codeValue, setCodeValue] = useState("");

  const fetchData = () => {
    fetch("https://wealthup-rust.vercel.app/api/codes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGeneratedCode(data.code);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const generate = () => {
    fetchData();
  };

  const refresh = () => {
    setSeconds(60);
    fetchData();
  };

  useEffect(() => {
    const updateTimer = () => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timerId);
          return 0;
        }
        return prevSeconds - 1;
      });
    };
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [generatedCode]);

  const checkCode = () => {
    if (seconds > 0 && codeValue === generatedCode) {
      alert("success");
      fetchData();
      setSeconds(60);
    } else if (seconds === 0) {
      alert("Time out");
    } else {
      alert("Wrong code");
    }
  };

  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex justify-between bg-[#D6E9F2] w-[20vw] p-[1vw] mx-auto rounded-lg my-2">
        <h1>{generatedCode}</h1>
        <button onClick={refresh}>
          <IoReloadCircleOutline className="text-2xl" />{" "}
        </button>
      </div>
      <div className="ml-16 rounded-lg bg-blue-200 p-1">{seconds}</div>
      <div className="border-[#D6E9F2] border-2 w-[70%] rounded-lg my-1  mx-auto">
        <input
          type="text"
          placeholder="Enter Code"
          value={codeValue}
          onChange={(e) => setCodeValue(e.target.value)}
          className="bg-transparent w-full p-1 font-light"
        />
      </div>

      <button
        onClick={checkCode}
        className="bg-[#FB7306] text-white px-2 rounded-xl mt-4 mx-auto "
      >
        Check
      </button>
    </div>
  );
};

export default GeneratedCode;
