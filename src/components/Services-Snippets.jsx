import Image from "next/image";
const Snippets = ({ Heading, Description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[50px] h-[50px]">
        <Image src={`https://whyal.github.io/Cinegang/icons/${Heading}.svg`} fill className="object-contain" />
      </div>
      <h3 className="font-semibold my-2">{Heading}</h3>
      <p className="bg-[#2e2e2e] grow p-2 text-[#b2b2b2]">{Description}</p>
    </div>
  );
};

export default Snippets;
