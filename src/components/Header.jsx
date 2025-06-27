import clsx from "clsx";
import "../main.css";
import LunicoLogo from "./icons/Logo";
import MainButton from "./MainButton";

const Header = ({ className }) => {
  return (
    <header
      className={clsx(
        "top-0 w-full fixed flex items-center justify-center gap-64 py-6 text-center z-50",
        className
      )}
    >
      <LunicoLogo/>
      <nav>
        <ul className="flex gap-12 text-white text-sm font-extrabold">
          <li className="relative group">
            <a
              href="#menus"
              className="transition-colors duration-300 ease-in-out group-hover:text-amber-300"
            >
              Menus
            </a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <a
              href="#restaurant"
              className="transition-colors duration-300 ease-in-out group-hover:text-amber-300"
            >
              Restaurant
            </a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <a
              href="#bar"
              className="transition-colors duration-300 ease-in-out group-hover:text-amber-300"
            >
              Bar
            </a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <a
              href="#menus"
              className="transition-colors duration-300 ease-in-out group-hover:text-amber-300"
            >
              Contact Us
            </a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
          </li>
        </ul>
      </nav>
      <MainButton link='https://sevn.ly/x9qnWhpT'>Book Now</MainButton>
    </header>
  );
};

export default Header;
