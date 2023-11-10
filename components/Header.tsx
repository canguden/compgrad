import Image from "next/image";
import React from "react";

import logo from "@/public/logo.svg";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <>
      <div className="shadow-xl p-2 items-center bg-gray-100">
        <div className="justify-between mx-auto max-w-4xl flex">
          <ul className="flex items-center gap-4 text-blue-800 ">
            <Link href="/">
              <li className="mr-4">
                <Image
                  src={logo}
                  height={150}
                  width={150}
                  alt="Compsys Technologies"
                  className="pt-1"
                />
              </li>
            </Link>
            <Link href="/about-us">
              <li className="hidden xl:flex hover:underline hover:underline-offset-8">
                About us
              </li>
            </Link>
            <Link href="/solutions">
              <li className="hidden xl:flex hover:underline hover:underline-offset-8">
                Solutions
              </li>
            </Link>
            <Link href="/contact-us">
              <li className="hidden xl:flex hover:underline hover:underline-offset-8">
                Contact us
              </li>
            </Link>
          </ul>
          <div className="xl:hidden items-center flex">
            <Hamburger />
          </div>
          <div className="hidden xl:flex items-center  gap-2 text-blue-800">
            <Link href="/login" className="items-center flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
