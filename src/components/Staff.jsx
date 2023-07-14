import Image from "next/image";
const Staff = ({ Title, ImageUrl, Name, Desc }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <p className="text-4xl font-semibold">{Title}</p>
      <div className="rounded-full w-[200px] h-[200px] flex justify-center items-center outline outline-[#ff4343] outline-offset-[16px] overflow-hidden my-8">
        <Image src={ImageUrl} alt={Name} width={200} height={200} />
      </div>

      <p className="text-2xl">{Name}</p>
      <q className="text-[#7f7f7f] italic">{Desc}</q>
    </div>
  );
};

export default Staff;
