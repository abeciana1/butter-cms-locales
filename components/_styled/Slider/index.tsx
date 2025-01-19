import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PageMarginI } from '@/definitions/interfaces/general'

const Slider: React.FC<PageMarginI> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center relative w-full">
      <div className="flex items-center relative w-full overflow-hidden">
        <button
          className="z-50 absolute left-2 top-1/2 transform -translate-y-1/2 text-grey bg-[#888888] p-2 rounded-full shadow hover:bg-gray-300"
          onClick={prevSlide}
        >
          <FaChevronLeft/>
        </button>

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className={`flex-shrink-0 w-full px-4`}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-grey bg-[#888888] p-2 rounded-full shadow hover:bg-gray-300"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;