"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Carousel = ({ descriptions, small=false }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSlideIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSlideIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setSlideIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [slideIndex, onSelect, emblaApi]);

  return (
    <div className={`w-full flex ${!small ? "flex-col" : "flex-col lg:flex-row"}`}>
      <div className={`${!small ? "w-full" : "w-full lg:w-2/3"} relative`}>
        <div className="overflow-hidden border-solid border-2 border-[#f43f3f]" ref={emblaRef}>
          <div className="flex">
            {descriptions && descriptions.map((description) => <div className="flex-[0_0_100%] min-w-0 relative max-h-[1080px] aspect-video" fill><Image alt={description.ImageName} src={`https://whyal.github.io/Cinegang/images/spaces/${description.ImageName}.jpeg`} fill className="object-contain"/></div>)}
          </div>
        </div>

        <button
          className="absolute w-7 h-7 left-2 lg:w-[50px] lg:h-[50px] lg:left-8 top-[46%]"
          onClick={scrollPrev}
        >
          <Image
            src="https://whyal.github.io/Cinegang/icons/chevron-left-solid.svg"
            fill
            className="object-contain"
            alt="left-arrow"
          />
        </button>

        <button
          className="absolute w-7 h-7 right-2 lg:w-[50px] lg:h-[50px] lg:right-8 top-[46%]"
          onClick={scrollNext}
        >
          <Image
            src="https://whyal.github.io/Cinegang/icons/chevron-right-solid.svg"
            fill
            className="object-contain"
            alt="right-arrow"
          />
        </button>
      </div>
      {descriptions[slideIndex].Title && (
        <div style={{backgroundColor: "#2d2d2d"}} className={`${!small ? "w-full mt-8" : "w-full lg:w-[30%] ml-auto mt-8 lg:mt-0"} py-4 px-6`}>
          <h2 className="text-md lg:text-lg xl:text-xl border-b-2 border-[#f43f3f] w-max">
            {descriptions[slideIndex].Title}
          </h2>
          <p className="text-sm lg:text-md xl:text-lg">{descriptions[slideIndex].Captions}</p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
