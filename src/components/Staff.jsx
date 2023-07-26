import Image from "next/image";
const Staff = ({ Title, Name, Caption, ExtraCaption = null }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <p className="text-4xl font-semibold">{Name}</p>
      <div className="rounded-full w-[200px] h-[200px] flex justify-center items-center outline outline-[#ff4343] outline-offset-[16px] overflow-hidden my-8">
        <Image src={`/images/staffs/${Name}.png`} alt={Name} width={200} height={200} />
      </div>
      <p className="text-2xl">{Title}</p>
      <q className="text-md text-center">{Caption}</q>
      {ExtraCaption && <span className="text-[8px]">{ExtraCaption}</span>}
    </div>
  );
};

export default Staff;
