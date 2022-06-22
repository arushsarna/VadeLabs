import Image from "next/image";

import Button from "./Button";
import React from "react";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionOne from "./SectionOne";

export default function Body() {
  return (
    <div className="">
      <SectionOne />
      <div className=" flex flex-col items-center border-t-4 border-opacity-40   border-gray-300  mt-44 rounded-3xl  ">
        <SectionTwo />

        <div>
          <SectionThree />
        </div>
        <div className=" w-1/2  relative  left-44">
          <Button />
        </div>
      </div>

      <div className=" flex justify-end mr-20 mb-20 ">
        {/* <div className=" flex flex-col">
          <div className=" relative top-3 -left-1">
            <Image
              src="/assets/backtotop.png"
              alt="back to top"
              layout="fill"
            />
          </div>
          Back on top
        </div> */}
      </div>
    </div>
  );
}
