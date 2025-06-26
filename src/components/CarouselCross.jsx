import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

const CarouselCross = ({ slides }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 perspective-1200">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          perPage: 1,
          arrows: true,
          pagination: false,
          drag: true,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          speed: 800,
          updateOnMove: true,
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="relative h-[40rem] w-full grid grid-cols-3 grid-rows-3 gap-2 transform-gpu preserve-3d">
              <div className="col-start-2 row-start-2"></div>
              <div className="col-start-2 row-start-1 flex justify-center items-end">
                <img
                  src={`/images/${slide.top.src}`}
                  alt={slide.top.alt}
                  className="h-5/6 w-auto object-cover rounded-lg shadow-lg scale-220"
                />
              </div>
              <div className="col-start-2 row-start-3 flex justify-center items-start">
                <img
                  src={`/images/${slide.bottom.src}`}
                  alt={slide.bottom.alt}
                  className="h-5/6 w-auto object-cover rounded-lg shadow-lg scale-140"
                />
              </div>
              <div className="col-start-1 row-start-2 flex justify-end items-center pr-2 z-0">
                <img
                  src={`/images/${slide.left.src}`}
                  alt={slide.left.alt}
                  className="w-5/6 h-auto object-cover rounded-lg shadow-lg scale-130 translate-x-4 opacity-90"
                />
              </div>
              <div className="col-start-3 row-start-2 flex justify-start items-center pl-2 z-0">
                <img
                  src={`/images/${slide.right.src}`}
                  alt={slide.right.alt}
                  className="w-5/6 h-auto object-cover rounded-lg shadow-lg scale-120 -translate-x-4 opacity-90"
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CarouselCross;