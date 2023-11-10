import React from "react";
import hero from "@/public/intel-based-fpga.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative h-[500px] bg-[#0C80D7] sm:h-[600px] md:h-[600px] lg:h-[400px] xl:h-[550px]">
        <Image
          src={hero}
          layout="fill"
          priority={true}
          objectFit="cover"
          alt="steden"
          className="select-none"
        />
      </div>
      <div className=" absolute bottom-[250px] sm:top-[425px] md:top-[325px] lg:top[300px] xl:top-[420px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-start  sm:px-4  w-full xl:max-w-6xl">
        <div className="max-w-4xl  mx-auto px-4 py-4 sm:p-10 bg-blue-800">
          <h1 className="select-none text-3xl text-white   sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
            CompSys Solutions
          </h1>
          <p className="mt-4 mb-4 select-none text-lg md:text-xl lg:text-2xl xl:text-xl text-white ">
            A distinguished Dutch technology firm renowned for its expertise in
            delivering high-performance solutions, spanning from website
            development to intricate software solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
