import clsx from "clsx";
import "../main.css";
import LunicoLogo from "./icons/Logo";
import MainButton from "./MainButton";
import useResponsiveQuery from "../hooks/use-responsive-query";
import BurgerMenu from "./BurgerMenu";
import useScroll from "../hooks/use-scroll";
import { useEffect, useState } from "react";

const Header = ({ className }) => {
  const isMobile = useResponsiveQuery(1024);
  const isScrolledDown = useScroll();

  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const checkPosition = () => {
      setAtTop(window.scrollY <= 0);
    };

    checkPosition();
    window.addEventListener("scroll", checkPosition);
    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  const showDarkBg = !atTop || isScrolledDown;
  return (
    <header
      className={clsx(
        "top-0 w-full fixed flex items-center justify-center text-center z-50",
        showDarkBg ? "bg-black/70" : "",
        className
      )}
    >
      <div className="w-full max-w-screen-xl flex justify-between items-center">
        <div className="ml-12">
          <LunicoLogo width={isMobile ? 100 : 150} height={isMobile ? 50 : 100} className=''/>
        </div>
        {isMobile ? (
          <BurgerMenu />
        ) : (
          <>
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
            <MainButton link="https://sevn.ly/x9qnWhpT ">Book Now</MainButton>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
