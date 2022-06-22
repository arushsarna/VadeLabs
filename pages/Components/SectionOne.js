import Image from "next/image";

import video from "../assets/video1.png";

import Button from "./button";
import React from "react";

export default function SectionOne() {
  return (
    <div>
      <div
        className="absolute mt-20 pattern-dots pattern-gray-400 pattern-bg-gray-200
              pattern-size-20 pattern-opacity-30 w-full h-screen -z-10 "
      ></div>

      <div className="  flex flex-row  justify-end ">
        <div className=" w-1/2 m-10 mt-72 pl-10  ">
          <div className="text-7xl font-bold bg-gray-100 w-3/5 pl-4 py-3 text-[#2e3b4e] ">
            <div>
              Integrate APIs
              <br />
              In Minutes
            </div>
          </div>
          <div className=" mt-4 font-bold text-3xl pl-4  py-3 bg-gray-100 w-3/4">
            Get ridiculously creative with your products <br />
            and let us do the hard work for you!
          </div>
          <Button />
        </div>
        <div className=" flex mt-52 justify-end border-2   border-r-0 rounded-3xl rounded-r-none border-black p-4 bg-white">
          <div>
            <Image
              src={video}
              alt="Picture of the author"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
