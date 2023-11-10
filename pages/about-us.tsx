import Image from "next/image";
import React from "react";
import aboutus from "@/public/aboutus.jpg";
import Link from "next/link";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>about-us</title>
      </Head>
      <div className="relative max-w-4xl mx-auto">
        <Image
          src={aboutus}
          priority={true}
          height={400}
          width={400}
          alt="steden"
          className="select-none w-full"
        />
        <div>
          <h1 className="py-2 px-2 bg-white absolute left-4 text-blue-800 bottom-5">
            About CompSys
          </h1>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <ul className="mt-10 mb-10 mx-2 xl:mx-0">
          <li className="text-xl font-bold">
            Transforming Businesses through Innovative Technology
          </li>

          <li className="mt-5">
            At CompSys, we specialize in creating powerful websites and software
            solutions that drive ultimate business performance. Our focus goes
            beyond conventional development – we&apos;re dedicated to shaping
            the future by consulting on new technologies, seamless API
            integrations, and unlocking the potential of AI and machine
            learning.
          </li>

          <li className="mt-3">
            Pioneering excellence since our establishment, CompSys is at the
            forefront of delivering innovative software solutions and creating a
            dynamic force in the tech industry.
          </li>
          <li className="mt-3">
            Our mission at CompSys is to empower businesses with technology that
            not only meets their needs today but propels them into the future.
            We believe in pushing boundaries and redefining what&apos;s
            possible, ensuring our clients stay ahead in the ever-evolving tech
            landscape.
          </li>
          <li className="mt-3">
            CompSys is not just a software development company; we&apos;re
            architects of progress. Our team of talented professionals
            collaborates to create state-of-the-art solutions. We thrive on
            challenges and consistently deliver products that set new benchmarks
            in the industry.
          </li>
          <li className="mt-3">
            As a technology leader, CompSys is not confined by borders. While
            rooted in success as the go-to provider in The Netherlands, we are
            rapidly expanding our influence across Europe. Our commitment to
            excellence knows no bounds, and we&apos;re excited to bring our
            expertise to businesses on a global scale.
          </li>
          <li className="mt-3">
            What sets us apart is our commitment to in-house development. Our
            flagship software solutions are crafted by our dedicated team,
            ensuring every product is a testament to our high standards. Your
            success is our success, and we take pride in being a catalyst for
            your business growth.
          </li>
          <li className="mt-3 font-bold">
            At CompSys, we don&apos;t just offer solutions; we forge
            partnerships for the future. We stand by our clients as they
            navigate the digital landscape, providing support, innovation, and a
            commitment to excellence. Together, we build a future where
            technology propels businesses to new heights.
          </li>
          <li className="mt-3">
            Join us at CompSys – where innovation meets excellence, and the
            future of technology is now
          </li>
          <Link href="/contact-us">
            <li className="mt-3 text-blue-800 hover:underline">Contact us</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default about;
