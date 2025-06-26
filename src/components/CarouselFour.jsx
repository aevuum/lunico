import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

const CarouselCross = ({ images }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex overflow-hidden">
      <div className="relative w-full h-[40rem]">
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            gap: '0',
            pagination: true,
            arrows: true,
            drag: true,
            height: '40rem',
          }}
        >
          {images.map((imageGroup, groupIndex) => (
            <SplideSlide key={groupIndex}>
              <div className="relative h-full w-full grid grid-cols-3 grid-rows-3 gap-0">
                {/* Центральная область (пустая) */}
                <div className="col-start-2 row-start-2"></div>
                
                {/* Верхнее изображение */}
                <div className="col-start-2 row-start-1 flex justify-center">
                  <img
                    src={`/images/${imageGroup.top.src}`}
                    alt={imageGroup.top.alt}
                    className="h-full w-auto object-cover rounded-lg"
                  />
                </div>
                
                {/* Нижнее изображение */}
                <div className="col-start-2 row-start-3 flex justify-center">
                  <img
                    src={`/images/${imageGroup.bottom.src}`}
                    alt={imageGroup.bottom.alt}
                    className="h-full w-auto object-cover rounded-lg"
                  />
                </div>
                
                {/* Левое изображение */}
                <div className="col-start-1 row-start-2 flex items-center">
                  <img
                    src={`/images/${imageGroup.left.src}`}
                    alt={imageGroup.left.alt}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                
                {/* Правое изображение */}
                <div className="col-start-3 row-start-2 flex items-center">
                  <img
                    src={`/images/${imageGroup.right.src}`}
                    alt={imageGroup.right.alt}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default CarouselCross;