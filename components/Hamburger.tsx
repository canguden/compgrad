import Link from "next/link";
import React, { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const handleButtonClick = (content: React.SetStateAction<string>) => {
    setSelectedButton(content);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };
  return (
    <>
      <div className="relative flex flex-col z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="items-center flex gap-3"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="z-10 absolute top-[45px] shadow-xl px-2 bg-white w-[200px] right-[10px]">
            <ul className="text-blue-800">
              <Link href="/" onClick={handleLinkClick}>
                <li className="hover:underline   mb-3 mt-2 flex items-center gap-6">
                  Home
                </li>
              </Link>
              <hr />
              <Link href="/solutions" onClick={handleLinkClick}>
                <li className="hover:underline   mb-3 mt-2 flex items-center gap-6">
                  Solutions
                </li>
              </Link>
              <hr />
              <Link href="/about-us" onClick={handleLinkClick}>
                <li className="hover:underline  mt-3 mb-3 flex items-center gap-6">
                  About us
                </li>
              </Link>
              <hr />

              <Link href="/contact-us" onClick={handleLinkClick}>
                <li className="hover:underline mt-3 mb-3  flex items-center gap-6">
                  Contact us
                </li>
              </Link>
              <hr />
              <Link href="/login" onClick={handleLinkClick}>
                <li className="hover:underline  mt-3 mb-3 flex items-center gap-6">
                  Login
                </li>
              </Link>
              <hr />
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Hamburger;
