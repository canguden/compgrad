import Image from "next/image";
import React from "react";
import contactus from "@/public/contactus.jpg";
import Link from "next/link";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title>contact-us</title>
      </Head>
      <div className="relative max-w-4xl mx-auto">
        <Image
          src={contactus}
          priority={true}
          height={400}
          width={400}
          alt="steden"
          className="select-none w-full"
        />
        <div>
          <h1 className="py-2 px-2 bg-white absolute left-4 text-blue-800 bottom-5">
            Get in touch
          </h1>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <ul className="mt-10 mb-10 mx-2 xl:mx-0">
          <li className="text-xl font-bold">Contact</li>
          <hr className="mt-3" />

          <li className="mt-3 font-bold">Clients:</li>

          <li className="mt-5">support@compsys.io</li>

          <li className="mt-3 font-bold">Live web support:</li>
          <li className="mt-3">CompSys Cloud 24/7</li>
          <hr className="mt-3" />

          <li className="mt-3 font-bold">Emergency support:</li>
          <li className="mt-3">+31 20 444 888</li>
          <hr className="mt-3" />

          <li className="mt-3 font-bold">WhatsApp chat support:</li>
          <li className="mt-3">+31 20 327435</li>

          <hr className="mt-3" />

          <li className="mt-3 font-bold">Acquisition & other</li>
          <li className="mt-3">info@compsys.io</li>
          <li className="mt-3">+31 20 6596510</li>
          <p>Mo- Fri - 8:30 - 21:00</p>
          <p>Sa- Su - 9:00 - 17:00</p>
        </ul>
      </div>
    </>
  );
};

export default contact;
