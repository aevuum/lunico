import clsx from "clsx";
import useScroll from "../hooks/use-scroll";
import Header from "./Header";
import MainButton from "./MainButton";
import Carousel from "./Carousel";
import Typography from "./Typography";
import SideButton from "./SideButton";
import { useEffect, useRef, useState } from "react";
import TransparentButton from "./TransparentButton";
import CarouselFour from "./CarouselCross";

const images = [
  { id: 1, src: "3-1-576x720.jpg", alt: "Image 1" },
  { id: 2, src: "9-1-891x1280.jpg", alt: "Image 2" },
  { id: 3, src: "10-1-720x405.jpg", alt: "Image 3" },
];

const slides = [
  {
    top: { src: "5-1-853x1280.jpg", alt: "Top Image" },
    bottom: { src: "4-1-480x720.jpg", alt: "Bottom Image" },
    left: { src: "7-1-480x720.jpg", alt: "Left Image" },
    right: { src: "2-1-1-576x720.jpg", alt: "Right Image" },
  },
  {
    top: { src: "9-1-891x1280.jpg", alt: "Another Top Image" },
    bottom: { src: "10-1-720x405.jpg", alt: "Another Bottom Image" },
    left: { src: "img-video-2.jpg", alt: "Another Left Image" },
    right: { src: "3-1-576x720.jpg", alt: "Another Right Image" },
  },
];

const preview = {
  src: "img-bananaleaves-4-1-1.jpg",
  alt: "Preview Image",
  description:
    "At Lúnico, flavors are inspired by traditional Spanish cuisine, rooted in the elements and history",
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
            const scrollTop =
              window.scrollY || document.documentElement.scrollTop;
            const slowOffset = scrollTop * 0.1;

            setOffset(slowOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section id="restaurant" className="relative w-full h-max min-h-[50rem] bg-cover bg-center bg-[url('/images/lunico-dubai-interior-2-1.jpg')] flex items-center justify-center overflow-hidden">
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
        <div className="text-white pt-6 flex flex-col lg:flex-row items-center lg:justify-between lg:px-[30rem]">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
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
          <div className="flex flex-col items-center lg:items-end">
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18798.4615674404!2d55.255700499999996!3d25.22666295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f80055c67f%3A0xe2890ca94980b95e!2sLa%20mer%20beach!5e1!3m2!1sen!2sen"
              className="ease-in-out duration-200 hover:text-amber-300"
            >
              J1 Beach
            </a>
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18798.4615674404!2d55.255700499999996!3d25.22666295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f80055c67f%3A0xe2890ca94980b95e!2sLa%20mer%20beach!5e1!3m2!1sen!2sen"
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
      <section className="bg-black w-full h-max min-h-[35rem]  lg:min-h-[50rem] overflow-x-hidden">
        <Carousel images={images} preview={preview}></Carousel>
      </section>
      <section id="menus" className="w-full h-max min-h-[20rem] bg-cover bg-center bg-[url('/images/img-bananaleaves-8-scaled-1.jpg')]">
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
        className="relative w-full min-h-[40rem] overflow-hidden bg-black"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: "url('/images/pattern-golf.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${isScrollDown ? -offset : offset}px)`,
            willChange: "transform",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-12">
          <div>
            <p className="text-xl text-amber-300">Spanish fine-dining</p>
            <Typography className="text-white text-8xl mt-4">
              Taste your destiny
            </Typography>
          </div>
          <img
            src="/gif/5_Water-1-ezgif.com-video-to-gif-converter.gif"
            alt="gif"
            className="h-[60rem] w-[40rem] rounded-full shadow-xl ml-4 lg:ml-34"
          />
        </div>
      </section>
      <section id="bar" className="w-full min-h-[120rem] py-24 bg-gradient-to-b from-[#AB8E61] via-[#EBEBB0] to-[#B69E6D]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left">
            <Typography className="text-7xl mb-6">Restaurant</Typography>
            <p className="text-lg mb-8">
              Explore our menu and discover a gastronomic world rooted in
              Spanish and Latin traditions, culture, flavors, ingredients.
              Each dish tells a story. From A la Carte selections to desserts
              and tapas, our offerings are crafted with fresh and bold
              ingredients and endemic products.
            </p>
            <TransparentButton link="#gallery">
              View gallery
            </TransparentButton>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/img-restaurant-2-1.png"
              alt="image"
              className="h-[50rem] rounded-xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
        <div className="max-w-6xl py-12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <img
              src="/images/img-bar-2-1-691x720.png"
              alt="image"
              className="h-[50rem] rounded-xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
          <div className="md:w-1/2 text-left order-1 md:order-2">
            <Typography className="text-7xl mb-6">Late night bar</Typography>
            <p className="text-lg mb-8">
              As day fades, Lúnico transforms into a lively, late-night bar.
              With a drink in hand, surrounded by vibrant music and
              captivating visuals, you'll feel the pulse of the night. Choose
              from a selection of elemental cocktails or classic favorites
              with a twist, and let the evening take you wherever your senses
              lead.
            </p>
            <TransparentButton link="#gallery">
              View gallery
            </TransparentButton>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left">
            <Typography className="text-7xl mb-6">Private events</Typography>
            <p className="text-lg mb-8">
              For larger gatherings, such as business lunches, birthday
              celebrations or bigger private events, we can offer a variety of
              semi-private spaces that provide the perfect ambiance for any
              occasion. Contact us for a complete list of spaces, capacities
              or set menu options to create an event that is as unique as you
              are.
            </p>
            <TransparentButton>Make an enquiry</TransparentButton>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/9-1-501x720.png"
              alt="image"
              className="h-[50rem] w-full rounded-xl shadow-xl max-w-md object-cover"
            />
          </div>
        </div>
      </section>
      <section id="gallery" className="bg-black w-full h-max min-h-[50rem] overflow-x-hidden">
        <div className="py-24">
          <CarouselFour slides={slides} />
        </div>
      </section>
      <section className="bg-cover bg-center bg-[url('/images/1_View21-scaled-1.jpg')] w-full min-h-[70rem] flex items-center justify-center px-4 relative">
        <div className="relative max-w-4xl mx-auto bg-[#111] p-8 md:p-12 rounded-2xl text-center z-10 shadow-2xl">
          <Typography className="text-[#E4C166]">Contact us</Typography>
          <h2 className="text-white text-2xl font-bold mt-4">Lúnico</h2>
          <p className="text-gray-300 mt-2">
            Unit FB 10, J1 Beach La Mer, Dubai, UAE
          </p>

          <h3 className="text-white text-xl font-semibold mt-6">
            Reservations:
          </h3>
          <p className="text-[#8B763E] mt-2">
            lunico@lunicodubai.ae <br />
            +971 50 2776 503 <br />
            WhatsApp
          </p>
          <p className="text-gray-300 mt-6">
            The last reservation for À la Carte is at 10:30 PM from Sunday to
            Wednesday and 11:00 PM from Thursday to Saturday. After this time,
            we accept reservations only for drinks and tapas. <br />
            <br />
            We would be delighted to welcome you for dinner with children.
            Please note that for your comfort, we can accommodate families on
            the ground floor only. We look forward to hosting you! <br />
            <br />
            For reservations of more than 10 guests, please contact us at <span className="text-[#8B763E]">+971
            50 2776 503</span>.
          </p>
          <ul className="text-gray-300 mt-6 space-y-2 text-left inline-block mx-auto">
            <li>Monday 12 PM – 1 AM</li>
            <li>Tuesday 12 PM – 1 AM</li>
            <li>Wednesday 12 PM – 1 AM</li>
            <li>Thursday 12 PM – 1 AM</li>
            <li>Friday 12 PM – 2 AM</li>
            <li>Saturday 1 PM – 2 AM</li>
            <li>Sunday 12 PM – 1 AM</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-white text-xl font-semibold">Dress code</h3>
            <p className="text-gray-300 mt-2">
              Our dress code is smart casual from 12 PM – 6 PM and smart elegant
              from 6:00 PM. Please avoid casual or beachwear and overly casual
              denim (no shorts and open shoes for gents).
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-white text-xl font-semibold">
              Press and media enquiries
            </h3>
            <p className="text-gray-300 mt-2">
              For press and media enquiries, please contact <span className='text-[#8B763E]'>media@lunicodubai.ae</span>
            </p>
          </div>
          <div className="mt-8">
            <MainButton>Contact us</MainButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
