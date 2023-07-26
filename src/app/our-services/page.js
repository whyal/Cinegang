import Carousel from "@/components/Carousel";
import Snippets from "@/components/Services-Snippets";
import Link from "next/link";

const OurServices = () => {
  const videoProduction = [
    {
      Heading: "TVC",
      Description:
        "Brief, persuasive messages designed to promote brands, production or services through impactful storytelling and engaging visuals.",
    },
    {
      Heading: "Corporate",
      Description:
        "Professional audiovisual presentations for businesses, delivering brand messages, showcasing products, and enhancing communication.",
    },
    {
      Heading: "Events",
      Description:
        "Capturing and documenting live events through video, preserving the essence, highlights, and key moments for future viewing and distribution.",
    },
    {
      Heading: "Editing",
      Description:
        "Assembly and manipulation of video footage, audio, and visual elements to create a compelling final product for storytelling, entertainment, or promotional content.",
    },
    {
      Heading: "2D",
      Description:
        "Create visually engaging illustrations and animations using 2D mediums, perfect for bringing your infographics and mixed media ideas to life!",
    },
    {
      Heading: "3D",
      Description:
        "Create immersive and lifelike visual experiences through the crafting of 3D objects, characters, and environments using digital tools and techniques.",
    },
  ];

  const photography = [
    {
      Heading: "Product",
      Description:
        "Showcase your products in their finest form through expertly crafted images, capturing attention and inspiring desire.",
    },
    {
      Heading: "Portrait",
      Description:
        "Let us capture your unique personality, expressions, and emotions in visually striking and meaningful photographs.",
    },
    {
      Heading: "Events",
      Description:
        "Preserve cherished moments of special occasions like weddings, parties and corporate events with our exceptional photography.",
    },
  ];

  return (
    <div className="w-full mb-24">
      <div className="w-full bg-[url('/images/servicesHero.png')] bg-cover aspect-video flex flex-col items-center justify-center max-h-[1080px] gap-4 lg:gap-6">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Our <span className="text-[#ff4343]">Services</span>
        </h1>
        <h3 className="text-md text-[#b2b2b2] lg:text-2xl text-center">
          Your ultimate one-stop shop for all things creative
        </h3>
        <div className="flex gap-2">
          <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
            <Link href="/portfolio">View Our Portfolio</Link>
          </button>
          <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
            <Link href="/contact-us">Connect With Us</Link>
          </button>
        </div>
      </div>
      <div className="w-11/12 mx-auto lg:w-3/4 xl:max-w-screen-2xl">
        <section className="mt-4">
          <h1 className="text-2xl font-bold md:text-4xl md:mt-16">
            Video <span className="text-[#ff4343]">Production</span>
          </h1>
          <h3 className="mb-4 md:mb-12 text-[#b2b2b2]">
            Weave your story into visual magic through our lenses
          </h3>
          <div className="w-full mx-auto my-8 md:w-4/5 xl:w-3/4 2xl:w-1/2">
            {/* <Carousel descriptions={new Array("1", "2", "3")} /> */}
          </div>
          <div className="grid grid-cols-2 gap-4 my-4 mx-auto md:w-4/5 lg:grid-cols-3 xl:w-3/4 2xl:gap-x-20">
            {videoProduction &&
              videoProduction.map((ele) => <Snippets {...ele} />)}
          </div>
        </section>
        <section>
          <h1 className="text-2xl font-bold text-[#ff4343] md:text-4xl md:mt-16">
            Photography
          </h1>
          <h3 className="mb-4 md:mb-12 text-[#b2b2b2]">
            Capture captivating moments, tell timeless stories
          </h3>
          <div className="w-full mx-auto md:w-4/5 xl:w-3/4 2xl:w-1/2">
            {/* <Carousel descriptions={new Array("1", "2", "3")} /> */}
          </div>
          <div className="grid grid-cols-2 gap-4 my-4 mx-auto md:w-4/5 lg:grid-cols-3 xl:w-3/4 2xl:gap-x-20">
            {photography && photography.map((ele) => <Snippets {...ele} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
