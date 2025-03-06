import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-black/80 fixed top-0 left-0 w-full z-50 text-white flex justify-between items-center px-8 max-sm:px-4 p-5 font-[Syne, sans-serif]">
        <div>
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
            className="h-8 max-sm:h-6"
            alt="logo"
          />
        </div>

        <button
          className="text-white text-md md:hidden bg-[#8b62f3] rounded-full p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Navigation Menu */}
        <ul
          className={`flex flex-col md:flex-row justify-center items-center gap-4 cursor-pointer 
            fixed md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent md:p-0 p-5 
            transition-all duration-500 ease-in-out ${
              isOpen ? "top-20 opacity-100" : "top-[-300px] opacity-0 md:opacity-100"
            }`}
        >
          <li className="hover:text-[#8b62f3]" onClick={() => scrollToSection("ongoing")}>
            Ongoing Startupathon
          </li>
          <li className="hover:text-[#8b62f3]" onClick={() => scrollToSection("completed")}>
            Completed Startupathon
          </li>
          <li className="hover:text-[#8b62f3]" onClick={() => scrollToSection("guide")}>
            Startupathon Guide
          </li>
          <li className="hover:text-[#8b62f3]" onClick={() => scrollToSection("how-to-win")}>
            How To Win
          </li>
          <li className="hover:text-[#8b62f3]" onClick={() => scrollToSection("network")}>
            Mentor Network
          </li>
          <li onClick={() => scrollToSection("fellowship")}>
            <button className="shadow-[0_1px_5px_0_rgba(139,98,243,0.5)] cursor-pointer border border-[#8b62f3] p-2 px-5 text-center rounded-[9px] font-semibold text-md text-white bg-gradient-to-r from-[#3f2d6d] via-[#7a56d6] to-[#9077ce] bg-[length:200%_100%] bg-[position:0%_50%] transition-[background-position] duration-700 ease-in-out hover:bg-[position:100%_50%]">
              Apply For Fellowship
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
