import logo from "/logo-text.png";

function Nav() {
  return (
    <div className="container mx-auto flex flex-row justify-between  sticky top-0 z-50 bg-white py-5">
      <img src={logo} alt="logo-Picture" />
      <ul className="flex flex-row justify-between items-center text-[#87919e] text-sm gap-7">
        <li className=" cursor-pointer text-[#d91b7e]">Home</li>
        <li className="cursor-pointer">Technologies</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Content</li>
      </ul>
      <div className="flex flex-row gap-4 items-center">
        <button className="text-[#87919e] text-sm cursor-pointer">
          Sign In
        </button>
        <button className="bg-[#d91b7e] rounded-2xl text-white px-3 py-1 text-sm cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Nav;
