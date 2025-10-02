import { useState } from "react";

function Carousel() {
  const slides = [
    { id: 1, color: "bg-purple-600", text: "Slide 1" },
    { id: 2, color: "bg-pink-600", text: "Slide 2" },
    { id: 3, color: "bg-blue-600", text: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full flex-shrink-0 h-64 flex items-center justify-center text-white text-3xl font-bold ${slide.color}`}
          >
            {slide.text}
          </div>
        ))}
      </div>

      {/* Nút điều khiển */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
      >
        ›
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
