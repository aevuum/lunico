import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '../main.css';
import NoBorderButton from "./NoBorderButton";
import useResponsiveQuery from "../hooks/use-responsive-query";

const Carousel = ({ preview, images }) => {
  const isMobile = useResponsiveQuery(1024)
  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row">
      <div className="lg:w-[50rem] relative z-10 lg:z-0 lg:mb-0">
        <img 
          src={`/images/${preview.src}`} 
          alt={preview.alt} 
          className="h-[15rem] md:rounded-t-0 lg:h-[40rem] w-full object-cover rounded-2xl lg:rounded-l-lg lg:rounded-r-none"
        />
        <div className="absolute bottom-5 left-0 right-0 p-6 text-center lg:text-left rounded-bl-lg">
          <p className="text-white text-sm mx-auto lg:mx-0 max-w-md">{preview.description}</p>
          <NoBorderButton className='pt-4 mx-auto lg:mx-0' link='#menus'>Discover</NoBorderButton>
        </div>
      </div>
      <div className="w-full lg:w-2/3 relative">
        <Splide
          options={{
            rewind: true,
            direction: 'ltr',
            perPage: 1,
            pagination: true,
            arrows: false,
            drag: true,
            height: isMobile ? '15rem' : '40rem',
            classes: {
              pagination: 'custom-pagination',
            },
            breakpoints: {
              1024: {
                height: '20rem'
              }
            }
          }}
        >
          {images.map((image) => (
            <SplideSlide key={image.id}>
              <img
                src={`/images/${image.src}`}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg lg:rounded-r-lg lg:rounded-l-none"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;