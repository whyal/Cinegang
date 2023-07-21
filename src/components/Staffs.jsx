import Staff from "./Staff";

const staffs = [
  {Title: "Founder", Name: "Rainier", Caption: "Single and Available", ExtraCaption: "9431-9496 (Call me I'm lonely)"},
  {Title: "Producer", Name: "Bei", Caption: "I can be your beiby and your bae"},
  {Title: "Producer", Name: "Derek", Caption: "Part-time starving creative, full-time clown."},
  {Title: "Illustrator", Name: "Hong Kai", Caption: "I draw cartoons for a living."}
]

const Staffs = () => {
  return (
    <div className="text-[#ffffff] w-full mt-24 mx-auto md:w-2/3 lg:w-3/4 2xl:w-1/2 xl:max-w-screen-2xl">
      <h1 className="text-4xl text-center md:text-6xl md:text-left font-semibold">
        The Cine<span className="text-[#f43f3f]">Gang</span>
      </h1>
      <h2 className="text-[#7f7f7f] text-center text:md md:text-left md:text-2xl">
        The masterminds behind the magic
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-x-4 my-12">
        {staffs && staffs.map(staff => <Staff {...staff}/>)}
      </div>
    </div>
  );
};

export default Staffs;
