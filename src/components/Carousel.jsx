import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { SiTrueup } from "react-icons/si";

const Carousel = ({ preview, images }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Splide
        aria-label="Vertical Image Carousel"
        options={{
          rewind: true,
          direction: 'ltr',
          perPage: 1,
          gap: '1rem', 
          pagination: SiTrueup,
          paginationType: 'bullets',
          arrows: false,
          drag: true,
          focus: 'center',
          autoWidth: false, 
        }}
      >
        {images.map((image) => (
          <SplideSlide key={image.id}>
            <div className='flex items-center justify-center h-full p-2"'>
              <img
                src={`/public/images/${image.src}`}
                alt={image.alt}
                className="object-cover w-full h-[40rem] rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
