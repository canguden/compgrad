import Image from "next/image";
import React from "react";
import aboutus from "@/public/aboutus.jpg";
import Link from "next/link";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>privacy</title>
      </Head>

      <div className="relative max-w-4xl mx-auto">
        <ul className="mt-10 mb-10 mx-2 xl:mx-0">
          <li className="text-xl font-bold">Privacy</li>

          <li className="mt-5">
            CompSys gathers information as an integral part of its business
            operations, serving to provide services, address inquiries, offer
            customer support, meet legal and contractual obligations, and
            advance innovative product development. Some of this data is
            directly provided by you when ordering a product or service,
            contacting customer support, or registering for a CompSys event or
            publication. Additionally, we collect information through your
            interaction with CompSys® Services and our website, leveraging
            embedded product technologies and cookies. Third-party sources also
            contribute to our data pool.
          </li>

          <li className="text-xl font-bold mt-5">
            {" "}
            How We Utilize Information
          </li>

          <li className="mt-3">
            The information we collect serves lawful purposes aligned with the
            growth, maintenance, and management of our business, all while
            respecting your privacy. These purposes encompass our internal
            operations and administration, communication with you, fulfillment
            of your requests for CompSys® Services, advertising and marketing
            efforts, monitoring and maintaining the functionality and security
            of CompSys® Services, and continually improving, developing,
            enhancing, and providing the CompSys® Services.
          </li>
        </ul>
      </div>
    </>
  );
};

export default about;
