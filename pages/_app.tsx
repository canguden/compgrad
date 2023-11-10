import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Bottombar from "@/components/Bottombar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className=" flex-grow">
          <Header />
          <Component {...pageProps} />
        </div>
        <div className="mt-auto flex-shrink-0">
          <Footer />
          <Bottombar />
        </div>
      </div>
    </>
  );
}
