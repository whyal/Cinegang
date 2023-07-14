import Link from "next/link";
import Image from "next/image";
const About = () => {
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
          src="/videos/portfolio-video.mp4"
          type="video/mp4"
          className="w-11/12 border-2 border-[#ff4343] lg:w-3/4 xl:max-w-screen-2xl"
        ></video>
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
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative border-4 border-[##ffffff]">
            <Image
              src="/images/portfolio-img1.jpg"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
