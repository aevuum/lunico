import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '../main.css';
import NoBorderButton from "./NoBorderButton";

const Carousel = ({ preview, images }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex">
      <div className="w-[50rem] relative">
        <img 
          src={`/public/images/${preview.src}`} 
          alt={preview.alt} 
          className="h-[40rem] w-full object-cover rounded-l-lg"
        />
        <div className="absolute bottom-5 left-0 right-0 p-6 rounded-bl-lg">
          <p className="text-white text-sm">{preview.description}</p>
          {/* TODO: Якорь */}
          <NoBorderButton className='pt-4' link='#'>Discover</NoBorderButton>
        </div>
      </div>
      <div className="w-2/3 relative">
        <Splide
          options={{
            rewind: true,
            direction: 'ltr',
            perPage: 1,
            pagination: true,
            paginationDirection: 'rtl',
            arrows: false,
            drag: true,
            height: '40rem',
            classes: {
              pagination: 'splide__pagination custom-pagination',
            },
          }}
        >
          {images.map((image) => (
            <SplideSlide key={image.id}>
              <img
                src={`/public/images/${image.src}`}
                alt={image.alt}
                className="w-full h-full object-cover rounded-r-lg"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;