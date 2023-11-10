import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-10">
        <div className="p-1 border border-black ">
          <h1 className="text-xl text-red-700 font-bold">
            File or directory not found.
          </h1>
          <p>
            The resource you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>
        </div>
        <div className="mt-5 hover:underline">
          <Link href="/">Go back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default notfound;
