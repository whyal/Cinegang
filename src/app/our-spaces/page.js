import Carousel from "@/components/Carousel";

const OurSpaces = () => {
  const studioDescriptions = [
    {
      ImageName: "studio1",
      Title: "Spacious",
      Captions:
        "Boasting dimensions of 4.4m x 4.6m x 3.3m,  Studio Noir ensures a comfortable and spacious environment for your creative endeavors.",
    },
    {
      ImageName: "studio2",
      Title: "Equipped",
      Captions:
        "Leave your heavy equipment behind! Studio Noir comes equipped to help with your production. Click here to view the equipment available",
    },
    {
      ImageName: "studio3",
      Title: "Unwind",
      Captions:
        "As media professionals, we recognise the demands of extensive shoots. That's why Studio Noir is equipped with a dressing room and pantry (free flow drinks & snack bar),allowing you to relax during breaktime.",
    },
  ];
  const poolDescriptions = [
    {
      ImageName: "swimmingpool1",
      Title: "Scenic",
      Captions:
        "Our outdoor swimming pool is a picturesque filming space exuding staycation vibes. With lounge chairs, greenery, hardwood floors, and a pristine rectangular pool, it offers an idyllic backdrop for tranquil retreats, vibrant pool parties, and serene summer scenes.",
    },
    {
      ImageName: "swimmingpool2",
      Title: "Tranquil",
      Captions:
        "Experience uninterrupted shoots at our quiet pool, where the serene atmosphere and limited occupancy create an optimal environment for capturing your shots.",
    },
  ];
  const courtDescriptions = [
    {
      ImageName: "basketball1",
      Title: "Convenience",
      Captions:
        "Looking for a prime location to shoot your sports scenes? Take advantage of our office's close proximity to a full-sized basketball court, complete with two rims.",
    },
    {
      ImageName: "basketball2",
      Title: "Tranquil",
      Captions:
        "In addition to its short distance from our office, the basketball court is a serene and seldom-used setting, providing the perfect opportunity to capture your shots without any distractions.",
    },
  ];

  return (
    <div className="w-full mb-24">
      <div className="w-full bg-[url('/images/spacesHero.png')] bg-cover aspect-video flex flex-col items-center justify-center max-h-[1080px] gap-4 lg:gap-6">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Our <span className="text-[#ff4343]">Spaces</span>
        </h1>
        <h3 className="text-md text-center text-[#b2b2b2] lg:text-2xl">
          Experience seamless production in our professional-grade spaces
        </h3>

        <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
          <a href="https://book.heygoldie.com/webdevYL" target="_blank">
            Book Our Studio
          </a>
        </button>
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto flex gap-4 flex-col items-center xl:max-w-screen-2xl">
        <h1 className="text-4xl text-center font-bold lg:text-6xl mt-8">
          Studio <span className="text-[#ff4343]">Noir</span>
        </h1>
        <div className="w-full max-w-[1200px] mx-auto my-8 md:w-4/5 xl:w-3/4">
          <Carousel descriptions={studioDescriptions} />
        </div>
        <div className="w-full grid grid-cols-2 lg:flex lg:w-3/4 mx-auto lg:my-8 splitter text-[#b2b2b2] text-sm md:text-md lg:text-lg">
          <div className="grow text-center p-8">
            <p>2 hrs</p>
            <p>$100</p>
          </div>
          <div className="grow text-center p-8">
            <p>4 hrs</p>
            <p>$180</p>
          </div>
          <div className="grow text-center p-8">
            <p>6 hrs</p>
            <p>$270</p>
          </div>
          <div className="grow text-center p-8">
            <p>10 hrs</p>
            <p>$360</p>
          </div>
          <div className="grow text-center p-8">
            <p>+1 hrs (After 9pm)</p>
            <p>$70</p>
          </div>
        </div>
        <h3 className="text-sm text-[#b2b2b2] lg:text-2xl text-center">
          Book Studio Noir today and enjoy an added bonus of our other spaces as
          sets! (Advance notification for court and pool usage.)
        </h3>
        <button className="text-sm bg-[#000000] py-3 px-6 hover:bg-[#46474a] lg:py-4 lg:px-10">
          <a href="https://book.heygoldie.com/webdevYL" target="_blank">
            Book Our Studio
          </a>
        </button>
      </div>
      <div className="w-11/12 max-w-[1200px] lg:w-3/4 mx-auto md:w-4/5 xl:w-3/4 xl:max-w-screen-2xl">
        <div className="w-full mx-auto my-8">
          <h2 className="text-2xl sm:text-4xl font-bold lg:text-6xl my-8">
            Swimming <span className="text-[#ff4343]">Pool</span>
          </h2>
          <Carousel descriptions={poolDescriptions} small={true} />
        </div>
        <div className="w-full mx-auto my-8">
          <h2 className="text-2xl sm:text-4xl font-bold lg:text-6xl my-8">
            Basketball <span className="text-[#ff4343]">Court</span>
          </h2>
          <Carousel descriptions={courtDescriptions} small={true} />
        </div>
      </div>
    </div>
  );
};

export default OurSpaces;
