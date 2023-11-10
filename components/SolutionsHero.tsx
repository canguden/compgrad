import React from "react";
import hero from "@/public/intel-based-fpga.jpg";
import Image from "next/image";
import Link from "next/link";

const SolutionsHero = () => {
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
      <div className=" absolute bottom-[265px] sm:top-[325px] md:top-[350px] lg:top-[380px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-start  sm:px-4  w-full xl:max-w-6xl">
        <div className="max-w-4xl  mx-auto px-4 py-4 sm:p-10 bg-blue-800">
          <h1 className="select-none text-3xl text-white   sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
            Business Solutions
          </h1>
          <p className="mt-4 mb-4 select-none text-lg md:text-xl lg:text-2xl xl:text-xl text-white ">
            CompSys solutions can help businesses improve productivity,
            streamline operations, and offer new services. Enable new
            capabilities, future-proof your data and IT, or support employees
            with productive tools.
          </p>
        </div>
      </div>
    </>
  );
};

export default SolutionsHero;
