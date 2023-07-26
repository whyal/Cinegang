import Image from "next/image";

const Clients = () => {
  return (
    <div className="w-screem h-max py-8 md:h-[500px] bg-[#2d2d2d] text-[#ffffff] flex flex-col items-center justify-center">
      <h2 className="w-4/5 px-8 border-b-2 border-b-[#f43f3f] text-center text-2xl pb-4 md:text-4xl xl:max-w-screen-2xl">
        Brands We've Worked With
      </h2>
      <div className="grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-3 md:gap-4 text-4xl xl:max-w-screen-2xl">
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/samsung.svg"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/air-asia.svg"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/klook.svg"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/sony.svg"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/lenovo.svg"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/cathay-photos.svg"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image src="/icons/clients/dbs.svg" fill className="object-contain" />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/asics.svg"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/guinness.svg"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[100px] h-[50px] md:w-[120px] md:[70px] lg:w-[200px] lg:h-[150px]">
          <Image
            src="/icons/clients/subway.svg"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
