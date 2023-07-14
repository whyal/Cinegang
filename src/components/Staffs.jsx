import Staff from "./Staff";

const Staffs = () => {
  return (
    <div className="text-[#ffffff] w-full mt-24 mx-auto md:w-2/3 lg:w-3/4 2xl:w-1/2 xl:max-w-screen-2xl">
      <h1 className="text-4xl text-center md:text-6xl md:text-left font-semibold">
        The Cine<span className="text-[#f43f3f]">Gang</span>
      </h1>
      <h2 className="text-[#7f7f7f] text-center md:text-left text-lg">
        The masterminds behind the magic
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-x-4 my-12">
        <Staff
          Title="CEO"
          ImageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          Name="Rainier"
          Desc="lorem ipsum"
        />
        <Staff
          Title="Producer"
          ImageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          Name="Bei"
          Desc="lorem ipsum"
        />
        <Staff
          Title="Producer"
          ImageUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          Name="Derek"
          Desc="lorem ipsum"
        />
        <Staff
          Title="Intern"
          ImageUrl="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          Name="Hong Kai"
          Desc="lorem ipsum"
        />
      </div>
    </div>
  );
};

export default Staffs;
