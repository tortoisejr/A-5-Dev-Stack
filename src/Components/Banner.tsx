import BannerImg from "/banner-stack.png";

function Banner() {
  return (
    <div className="container mx-auto my-10 flex flex-row justify-between items-center">
      <div className=" flex flex-col gap-7 justify-center items-start">
        <h1 className="font-bold text-7xl font-inter">
          Build Your Ideal <br />{" "}
          <span className="bg-linear-to-r from-[#fd5425] to-[#803ceb] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className=" text-[#87919e]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="space-x-3">
          <button className=" cursor-pointer bg-linear-to-tr from-[#f97218] to-[#ec4897] px-2 py-2 rounded-lg text-white text-sm">
            Explore Technologies
          </button>
          <button className=" cursor-pointer text-sm text-[#87919e] py-2 px-9 border border-gray-300 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <img className="object-contain" src={BannerImg} alt="Banner Image" />
    </div>
  );
}

export default Banner;
