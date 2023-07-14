import Carousel from "@/components/Carousel";
import Snippets from "@/components/Services-Snippets";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="w-full mb-24">
      <div className="w-full bg-[url('https://whyal.github.io/Cinegang/images/our-services-hero.jpg')] bg-cover aspect-video flex flex-col items-center justify-center max-h-[1080px] gap-4 lg:gap-6">
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
            <Carousel descriptions={new Array("1", "2", "3")} />
          </div>
          <div className="grid grid-cols-2 gap-4 my-4 mx-auto md:w-4/5 lg:grid-cols-3 xl:w-3/4 2xl:gap-x-20">
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/TVC.svg"
              heading="TVC"
              desc="Brief, persuasive messages designed to promote brands, production or services through impactful storytelling and engaging visuals."
            />
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/Corporate.svg"
              heading="Corporate"
              desc="Professional audiovisual presentations for businesses, delivering brand messages, showcasing products, and enhancing communication."
            />
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/Events.svg"
              heading="Events"
              desc="Capturing and documenting live events through video, preserving the essence, highlights, and key moments for future viewing and distribution."
            />
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/Editing.svg"
              heading="Editing"
              desc="Assembly and manipulation of video footage, audio, and visual elements to create a compelling final product for storytelling, entertainment, or promotional content."
            />
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/2D.svg"
              heading="2D"
              desc="Create visually engaging illustrations and animations using 2D mediums, perfect for bringing your infographics and mixed media ideas to life!"
            />
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/3D.svg"
              heading="3D"
              desc="Create immersive and lifelike visual experiences through the crafting of 3D objects, characters, and environments using digital tools and techniques."
            />
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
            <Carousel descriptions={new Array("1", "2", "3")} />
          </div>
          <div className="grid grid-cols-2 gap-4 my-4 mx-auto md:w-4/5 lg:grid-cols-3 xl:w-3/4 2xl:gap-x-20">
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/Product.svg"
              heading="Product"
              desc="Brief, persuasive messages designed to promote brands, production or services through impactful storytelling and engaging visuals."
            />
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/Portrait.svg"
              heading="Portrait"
              desc="Brief, persuasive messages designed to promote brands, production or services through impactful storytelling and engaging visuals."
            />
            <Snippets
              imageUrl="https://whyal.github.io/Cinegang/icons/Events.svg"
              heading="Events"
              desc="Brief, persuasive messages designed to promote brands, production or services through impactful storytelling and engaging visuals."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
