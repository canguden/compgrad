import Image from "next/image";
import React from "react";
import solutions from "@/public/solutions.jpg";
import contact from "@/public/contact.jpg";
import about from "@/public/about.jpg";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="mt-14  mb-14 max-w-4xl xl:mx-auto justify-center grid grid-cols-1 md:grid-cols-3 gap-8 mx-2">
        <div className="group mx-auto">
          <Link href="/solutions">
            <Image
              src={solutions}
              priority={true}
              height={400}
              width={400}
              alt="steden"
              className="select-none"
            />
            <div className="h-[100px] p-2 shadow-xl group-hover:bg-blue-50">
              <h1 className="text-blue-800 font-bold">Solutions</h1>
              <p>See our solutions to empower your business</p>
            </div>
          </Link>
        </div>
        <div className="group mx-auto">
          <Link href="/contact-us">
            <Image
              src={contact}
              priority={true}
              height={400}
              width={400}
              alt="steden"
              className="select-none"
            />
            <div className="h-[100px] p-2 shadow-xl group-hover:bg-blue-50">
              <h1 className="text-blue-800 font-bold">Contact us</h1>
              <p>Get in touch</p>
            </div>
          </Link>
        </div>
        <div className="group mx-auto">
          <Link href="/about-us">
            <Image
              src={about}
              priority={true}
              height={400}
              width={400}
              alt="steden"
              className="select-none"
            />
            <div className="h-[100px] p-2 shadow-xl group-hover:bg-blue-50">
              <h1 className="text-blue-800 font-bold">About us</h1>
              <p>Learn more about us</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
