import Image from "next/image";

import mid from "../assets/mid.png";

import React from "react";
import upbar from "../assets/upbar.png";
export default function SectionTwo() {
  return (
    <div className="justify-center items-center   flex flex-col ">
      <div className="  mt-28 text-center text-xl font-medium mb-4">
        We understand your needs to{" "}
        <span className=" bg-[#eccb65]"> build integrated applications</span> in
        today's <br /> hyper-connected world.{" "}
        <span className=" bg-[#eccb65]">Skip the hassle</span> to repeat a
        cumbersome process
        <br />{" "}
        <span className=" bg-[#eccb65]">
          for each unique integration.{" "}
        </span>{" "}
        Join us to build reliable connections with <br />
        multiple providers and{" "}
        <span className=" bg-[#eccb65]">cruise through backend </span> with
        ease.
      </div>
      <div className=" mt-4">
        <Image src={upbar} width={1000} />
      </div>
      <div className="text-5xl mt-10 font-semibold">
        <span className="text-[#3554fc]">Skip</span> the hassle
      </div>
      <div className=" mt-2">
        <Image src={mid} alt="mid picture" />
      </div>
      <div className="text-5xl mt-10 mb-2 font-semibold">
        <span className="text-[#3554fc]">Cruise</span> through backend.
      </div>
    </div>
  );
}
