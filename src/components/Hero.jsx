import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full h-screen text-[#ffffff] relative md:h-[1080px]">
      <video
        className="w-full h-full object-cover"
        src="/videos/heroVideo.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center gap-4 lg:gap-6">
        <h1 className="text-4xl font-bold lg:text-7xl text-center">
          Lights, Camera, <span className="text-[#ff4343]">Cinegang!</span>
        </h1>
        <h2 className="text-md text-[#b2b2b2] lg:text-2xl">
          Unleash your creativity with Cinegang Studios.
        </h2>
        <div className="flex gap-2 px-4">
          <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
            <Link href="/portfolio">Watch Showreel</Link>
          </button>
          <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
            <Link href="/contact-us">Connect With Us</Link>
          </button>
        </div>
        <h3 className="text-[#7f7f7f]">Scroll down to discover more</h3>
      </div>
    </div>
  );
};

export default Hero;
