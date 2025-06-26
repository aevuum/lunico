import clsx from "clsx";
import useScroll from "../hooks/use-scroll";
import Header from "./Header";
import MainButton from "./MainButton";
import Carousel from "./Carousel";
import Typography from "./Typography";
import SideButton from "./SideButton";
import { useEffect, useRef, useState } from "react";

const images = [
  { id: 1, src: "3-1-576x720.jpg", alt: "Image 1" },
  { id: 2, src: "9-1-891x1280.jpg", alt: "Image 2" },
  { id: 3, src: "10-1-720x405.jpg", alt: "Image 3" },
];

const preview = {
  src: "img-bananaleaves-4-1-1.jpg",
  alt: "Preview Image",
  description: "At Lúnico, flavors are inspired by traditional Spanish cuisine, rooted in the elements and history",
};

const Main = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);
  const isScrollDown = useScroll();


  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const slowOffset = scrollTop * 0.10;

            setOffset(slowOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <section className="relative w-full h-max min-h-[50rem] bg-cover bg-center bg-[url('/images/lunico-dubai-interior-2-1.jpg')] flex items-center justify-center overflow-hidden">
        <Header
          className={clsx(
            "z-10 duration-300 ease-in-out",
            isScrollDown ? "w-full bg-black/50" : ""
          )}
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)`,
          }}
        ></div>
        <div className="mt-14 relative text-white text-center font-[Against]">
          <Typography className="text-3xl text-white">
            Taste Your Destiny
          </Typography>
          <p className="text-xl mt-2">Book your table</p>
        </div>
      </section>
      <section className="bg-black w-full h-max min-h-[60rem]">
        <div className="text-white pt-6 flex justify-between px-[30rem]">
          <div className="">
            <p>
              Sun to Thur <span className="font-extrabold">12 PM – 1 AM</span>
            </p>
            <p>
              Fri <span className="font-extrabold">12 PM – 2 AM</span>
            </p>
            <p>
              Sat <span className="font-extrabold">12 PM – 2 AM</span>
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18798.4615674404!2d55.255700499999996!3d25.22666295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f80055c67f%3A0xe2890ca94980b95e!2sLa%20mer%20beach!5e1!3m2!1sen!2sen!4v1729862528602!5m2!1sen!2sen"
              className="ease-in-out duration-200 hover:text-amber-300"
            >
              J1 Beach
            </a>
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18798.4615674404!2d55.255700499999996!3d25.22666295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f80055c67f%3A0xe2890ca94980b95e!2sLa%20mer%20beach!5e1!3m2!1sen!2sen!4v1729862528602!5m2!1sen!2sen"
              className="ease-in-out duration-200 hover:text-amber-300"
            >
              La Mer, Dubai, UAE
            </a>
          </div>
        </div>
        <hr className="mt-6 h-0.5 max-w-[95rem] mx-auto bg-gradient-to-l from-[#BA935A] to-transparent" />
        <div className="text-white mt-24 text-center">
          <Typography className="text-[#E4C166] mb-4">
            Welcome to Lúnico
          </Typography>
          <h2 className="text-4xl mb-8">
            Listen to your inner guide and let the moon illuminate <br /> your
            desires
          </h2>
          <div className="relative max-w-xl mx-auto leading-relaxed">
            <p>
              Lúnico is an innovative Spanish fine-dining restaurant & late
              night bar nestled in the enchanting J1 Beach, Dubai. Lúnico blends
              the celestial with the culinary inviting guests to explore their
              destinies through taste. <br className="mb-4" /> Designed with a
              harmonious blend of natural stone and metallic accents, Lúnico
              creates an ethereal ambiance that captivates the senses. Each dish
              is a celebration of Spanish food, reimagined with the touch of our
              talented Head Chef, John Evans. <br className="mb-4" />
              Lúnico has its three distinct realms—a sophisticated dining area,
              an intimate bar at La Mer, and a breathtaking terrace—invite you
              to join us and let your journey unfold through a dining experience
              that taps into the power of intuition and personal destiny.
            </p>
          </div>
          <div className="mt-8">
            <MainButton className="">Book Now</MainButton>
          </div>
        </div>
      </section>
      <section className="bg-black w-full h-max min-h-[50rem] overflow-x-hidden">
        <Carousel images={images} preview={preview}></Carousel>
      </section>
      <section className="w-full h-max min-h-[20rem] bg-cover bg-center bg-[url('/images/img-bananaleaves-8-scaled-1.jpg')]">
        <div className="flex flex-col items-center justify-center h-full text-center px-4 py-16">
          <Typography className="text-white text-6xl mb-12">Menus</Typography>
          <div className="flex flex-col items-center gap-4">
            <SideButton link="https://www.lunicodubai.ae/wp-content/uploads/Lunico_A_LA_CARTE_180x340_01-2025-web.pdf">
              A la carte
            </SideButton>
            <SideButton link="https://www.lunicodubai.ae/wp-content/uploads/Lunico_Desserts_180x160_01-2025_Final_WEB.pdf">
              Desserts
            </SideButton>
            <SideButton link="https://www.lunicodubai.ae/wp-content/uploads/LUN_DRINK_MENU_WEB-1.pdf">
              Drink Menu
            </SideButton>
            <SideButton link="https://www.lunicodubai.ae/wp-content/uploads/LUNICO_Brunch_Menu_152x340_03-202_04_WEB.pdf">
              Brunch Menu
            </SideButton>
            <SideButton link="https://www.lunicodubai.ae/wp-content/uploads/LUNICO_Viva_La_Noche_Menu_152x340_03-2025_05_WEB.pdf">
              Viva La Noche
            </SideButton>
          </div>
        </div>
      </section>
      <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 ease-in-out"
        style={{
          backgroundImage: "url('/images/pattern-golf.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${isScrollDown ? -offset : offset}px)`,
          willChange: 'transform',
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-12">
        <div>
          <p className="text-xl text-amber-300">Spanish fine-dining</p>
          <Typography className="text-white text-8xl mt-4">Taste your destiny</Typography>
        </div>
        <img
          src="/public/gif/5_Water-1-ezgif.com-video-to-gif-converter.gif"
          alt="gif"
          className="h-[60rem] w-[40rem] rounded-full shadow-xl ml-34"
        />
      </div>
    </section>
    </main>
  );
};

export default Main;
