import Image from "next/image";
import React from "react";
import solutions from "@/public/solutions.jpg";
import cloud from "@/public/cloud.jpg";
import about from "@/public/about.jpg";
import digital from "@/public/digital.jpg";
import security from "@/public/security.jpg";
import ai from "@/public/ai.jpg";
import developers from "@/public/developers.png";
import data from "@/public/data.jpg";
import maintain from "@/public/maintain.jpg";
import Link from "next/link";

const Solutions = () => {
  return (
    <>
      <div className="mt-14  mb-14 max-w-4xl mx-auto justify-center grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group mx-auto">
          {" "}
          <Image
            src={solutions}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">
              Software Design & Developement
            </h1>
            <p>
              Through meticulous research, we identify optimal solutions
              tailored to enhance your business. Our expertise extends to
              implementing top-tier strategies for app development.
            </p>
          </div>
        </div>

        <div className="group mx-auto">
          <Image
            src={digital}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">Digital Transformation</h1>
            <p className="max-w-sm">
              Discover why modernizing your infrastructure is critical in
              today’s business environment for increased efficiency and
              productivity, competitive advantage, business sustainability, and
              improved customer and employee experiences.
            </p>
          </div>
        </div>
        <div className="group mx-auto">
          <Image
            src={cloud}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">Cloud</h1>
            <p className="max-w-sm">
              Manage applications across multiple clouds with flexibility to
              optimize costs, protect data, and increase business resiliency.
            </p>
          </div>
        </div>
        <div className="group mx-auto">
          <Image
            src={security}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">Security</h1>
            <p>
              Enhance data security as innovation accelerates to protect
              consumer information, maintain compliance, and detect and prevent
              digital fraud.
            </p>
          </div>
        </div>

        <div className="group mx-auto">
          <Image
            src={ai}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">Artificial Intelligence</h1>
            <p>
              Take advantage of pretrained models, optimizations for popular
              industry frameworks, and CompSys partner ecosystem to expedite
              results and improve ROI.
            </p>
          </div>
        </div>

        <div className="group mx-auto">
          <Image
            src={about}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">Business Analysis</h1>
            <p>
              Identifying needs and finding solutions that deliver value to your
              organisation.
            </p>
          </div>
        </div>

        <div className="group mx-auto">
          <Image
            src={data}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">
              Data Engineering and Analytics
            </h1>
            <p>
              Delivering performance and cost optimisation solutions results.
            </p>
          </div>
        </div>

        <div className="group mx-auto">
          <Image
            src={maintain}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">Maintenance</h1>
            <p>
              Seamless Continuity: Our Commitment to Persistent Excellence in
              Timely and Efficient Maintenance of Your Business Technologies.
            </p>
          </div>
        </div>

        <div className="group mx-auto">
          <Image
            src={developers}
            priority={true}
            height={400}
            width={400}
            alt="steden"
            className="select-none"
          />
          <div className=" pt-2  group-hover:bg-blue-50">
            <h1 className="text-blue-800 font-bold">Consultancy</h1>
            <p>
              Additional support by highly skilled staff to encounter any
              challenges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
