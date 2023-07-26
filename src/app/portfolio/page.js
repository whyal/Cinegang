"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/PortfolioModal";
const About = () => {
  const videos = [
    {
      Title: "$50 v $500",
      src: "https://www.youtube.com/embed/YUxDFn6rFeM",
    },
    {
      Title: "99 Singaporeans",
      src: "https://www.youtube.com/embed/LLfn3rgcS0c",
    },
    {
      Title: "Are We Our True Selves Around Parents",
      src: "https://www.youtube.com/embed/bkOgP1MEpYg",
    },
    {
      Title: "Hired Or Fired",
      src: "https://www.youtube.com/embed/-zn4-KoI1SE",
    },
    {
      Title: "Lost Touch Ep 1",
      src: "https://www.youtube.com/embed/tXKVweQY3A0",
    },
    {
      Title: "RunSohFast",
      src: "https://www.youtube.com/embed/ZGOwSZzWOZw",
    },
    {
      Title: "Singaporeans Try 48 Hours In Paris",
      src: "https://www.youtube.com/embed/_zl_unXmoeQ",
    },
    {
      Title: "TENG Recap 2022",
      src: "https://www.youtube.com/embed/ynR1R8c02HM",
    },
    {
      Title: "We Attended A Secret Event In London",
      src: "https://www.youtube.com/embed/8N4Og558oQ8",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-4 items-center py-16 bg-[#2d2d2d] lg:gap-8 lg:py-36">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Showreel <span className="text-[#ff4343]">2023</span>
        </h1>
        <h3 className="text-lg text-[#b2b2b2] lg:text-2xl">
          A compilation of our best works.
        </h3>
        <video
          controls
          className="w-11/12 border-2 border-[#ff4343] lg:w-3/4 xl:max-w-screen-2xl"
          autoPlay
          muted={false}
        >
          <source src="videos/Showreel.mp4" type="video/mp4" />
        </video>
        <div className="flex gap-2">
          <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
            <Link href="/our-services">View Our Services</Link>
          </button>
          <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
            <Link href="/contact-us">Connect With Us</Link>
          </button>
        </div>
        <h3 className="text-sm text-[#7f7f7f] lg:text-lg">
          Scroll down to discover more
        </h3>
      </div>
      <div className="w-11/12 lg:w-3/4 flex flex-col mx-auto my-16 gap-y-4 lg:my-36 lg:gap-y-8 xl:max-w-screen-2xl">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Our <span className="text-[#ff4343]">Portfolio</span>
        </h1>
        <div className="flex flex-wrap gap-2 text-sm lg:text-2xl text-[#b2b2b2] splitter2">
          <h3 className="pr-4">Entertainment</h3>
          <h3 className="pr-4">Comercials</h3>
          <h3 className="pr-4">Corporate</h3>
          <h3 className="pr-4">Animations</h3>
          <h3 className="pr-4">Design</h3>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {videos &&
            videos.map((video, i) => (
              <div
                className="aspect-video relative border-4 border-[##ffffff]"
                key={i}
              >
                <Image
                  src={`/images/${video.Title}.webp`}
                  fill
                  className="object-cover"
                  alt={video.Title}
                  onClick={() => setActiveIndex(i)}
                />
                <Modal
                  isActive={activeIndex === i}
                  onClose={() => setActiveIndex(-1)}
                  src={video.src}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
