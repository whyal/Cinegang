import Image from "next/image";
const Snippets = ({ imageUrl, heading, desc }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[50px] h-[50px]">
        <Image src={imageUrl} fill className="object-contain" />
      </div>
      <h3 className="font-semibold my-2">{heading}</h3>
      <p className="bg-[#2e2e2e] grow p-2 text-[#b2b2b2]">{desc}</p>
    </div>
  );
};

export default Snippets;
