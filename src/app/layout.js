import Navbar from "@/components/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const myFont = localFont({
  src: "../assets/SomarSans-Regular.otf",
});

export const metadata = {
  title: "CinegangTV",
  description: "Something else later on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icons/cineganglogo.svg"
        />
      </head>
      <body
        className={`bg-primary text-[#ffffff] min-h-screen flex flex-col overflow-x-hidden ${myFont.className}`}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>
          <div className="mt-[100px] lg:mt-[150px]">{children}</div>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
