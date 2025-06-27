import { useState } from "react";
import LogoBurger from "./icons/LogoBurger";
import LunicoLogo from "./icons/Logo";
import MainButton from "./MainButton";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative mr-12">
      <div onClick={handleModal}>
        <LogoBurger />
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-96 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {open && (
          <div className="h-full p-4">
            <LunicoLogo width={120} height={70} />
            <button
              onClick={() => setOpen(false)}
              className="absolute h-12 w-12 top-4 right-1 text-gray-400 text-2xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            <nav>
              <ul className="flex flex-col gap-4 py-12 text-white text-sm font-medium text-left pl-4">
                <li className="relative group ">
                  <a
                    href="#menus"
                    onClick={() => setOpen(false)}
                    className="transition-colors duration-300 ease-in-out "
                  >
                    Menus
                  </a>
                  <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </li>
                <li className="relative group">
                  <a
                    href="#restaurant"
                    onClick={() => setOpen(false)}
                    className="transition-colors duration-300 ease-in-out "
                  >
                    Restaurant
                  </a>
                  <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </li>
                <li className="relative group">
                  <a
                    href="#bar"
                    onClick={() => setOpen(false)}
                    className="transition-colors duration-300 ease-in-out "
                  >
                    Bar
                  </a>
                  <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </li>
                <li className="relative group">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="transition-colors duration-300 ease-in-out "
                  >
                    Contact Us
                  </a>
                  <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-300 scale-x-0 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </li>
                <MainButton className='mt-2' link='https://sevn.ly/x9qnWhpT'>Book now</MainButton>
              </ul>
            </nav>
          </div>
        )}
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {open && (
        <style jsx global>{`
          html,
          body {
            overflow: hidden;
            height: 100%;
          }
        `}</style>
      )}
    </div>
  );
};

export default BurgerMenu;
