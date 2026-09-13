import footerLogo from "/logo-text.png";
function Footer() {
  return (
    <div className="container mx-auto">
      <div className="  mt-32 grid grid-cols-12 gap-5">
        <div className="col-span-4 flex flex-col items-start gap-7">
          <img className="h-10 object-contain" src={footerLogo} alt="" />
          <p className="text-sm text-[#87919e]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className=" flex flex-row text-sm text-gray-500 font-bold gap-4 justify-start">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div className="col-span-3 flex flex-col gap-5 items-start">
          <h4 className="font-bold">PRODUCT</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#87919e] items-start">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="col-span-3 flex flex-col gap-5 items-start">
          <h4 className="font-bold">COMPANY</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#87919e] items-start">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="col-span-2 flex flex-col gap-5 items-start">
          <h4 className="font-bold">LEGAL</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#87919e] items-start">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <p className="my-20 text-start text-[#87919e] ">
        © 2026 Dev Stack. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
