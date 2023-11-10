import Link from "next/link";
import React from "react";

const Bottombar = () => {
  return (
    <div className="shadow-xl p-4 items-center bg-gray-800">
      <div className="justify-between mx-auto max-w-4xl flex">
        <ul className="flex items-center gap-4 text-white ">
          <Link href="/privacy">
            <li className="text-xs sm:text-base">Privacy</li>
          </Link>
          <li className="text-xs sm:text-base ml-20">
            © 2024 CompSys Technology All rights reserved
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
