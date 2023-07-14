"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Carousel = ({ descriptions, small }) => {
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
            {descriptions && descriptions.map((_, i) => 
              <div className="flex-[0_0_100%] min-w-0 relative max-h-[1080px] aspect-video" key={i}>
                Slide{i+1}
              </div>
            )}
          </div>
        </div>

        <button
          className="absolute w-7 h-7 left-2 lg:w-[50px] lg:h-[50px] lg:left-8 top-[46%]"
          onClick={scrollPrev}
        >
          <Image
            src="/icons/chevron-left-solid.svg"
            fill
            className="object-contain"
          />
        </button>

        <button
          className="absolute w-7 h-7 right-2 lg:w-[50px] lg:h-[50px] lg:right-8 top-[46%]"
          onClick={scrollNext}
        >
          <Image
            src="/icons/chevron-right-solid.svg"
            fill
            className="object-contain"
          />
        </button>
      </div>
      {descriptions[slideIndex].title && (
        <div style={{backgroundColor: "#2d2d2d"}} className={`${!small ? "w-full mt-8" : "w-full lg:w-[30%] ml-auto mt-8 lg:mt-0"} py-4 px-6`}>
          <h2 className="text-md lg:text-lg xl:text-xl border-b-2 border-[#f43f3f] w-max">
            {descriptions[slideIndex].title}
          </h2>
          <p className="text-sm lg:text-md xl:text-lg">{descriptions[slideIndex].captions}</p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
