import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSlide } from "../store/actions";
import { Button } from "@/components/ui/button";

const Slider = () => {
  const currentSlide = useSelector((state) => state.slider.currentSlide);
  const dispatch = useDispatch();

  const slides = [
    {
      subtitle: "SUMMER 2024",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
      bgImage: "./hero/aa.jpeg",
    },
    {
      subtitle: "SUMMER 2024",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
      bgImage:
        "https://s3-alpha-sig.figma.com/img/486a/b752/2a9f4d3d324bd4850a0b71f9ca75ab9f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grCsTP-kHLuVn~69ModSrah2WQWEPbx2m3df7p7ExZthEiW-9bmZDkEJU7JmSui~XBaGC~P~9Uuj8PB0lrPuqFCV1dk~8zjGfONvwph04l9W0QDVbKJzeWY~KamdNcWBI3BbnfvRKRtF0BIpQUQtogie8uzjg896KtRuhN4VS5e~ibGeFxCSgAn3nYricg1wxbwUmt5nyAB8GD-qxqxva96apreKbx1pGlNUasH1o7HLTIrI-4av6IPKbgT6Eo8EJa8FYzbK4vGwRL~xvpUx0lJyCeNtPPN6hACnU87lLqaV7145j9ymokJHlDee3NyKR5bbNTjtIjJn3Lbgsa9k0Q__",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setCurrentSlide((currentSlide + 1) % slides.length));
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, dispatch, slides.length]);

  const nextSlide = () => {
    dispatch(setCurrentSlide((currentSlide + 1) % slides.length));
  };

  const prevSlide = () => {
    dispatch(
      setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-montserrat">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 " />
          <div className="w-[1400px] mx-auto h-full flex items-center max-md:w-full max-md:px-4">
            <div className="flex flex-col items-start justify-center text-white max-md:items-center max-md:text-center">
              <p className="text-xl font-bold mb-9 max-md:text-base max-md:mb-4">
                {slide.subtitle}
              </p>
              <p className="text-7xl font-bold mb-9 leading-tight max-md:text-4xl max-md:mb-4">
                {slide.title}
              </p>
              <p className="text-2xl font-normal mb-9 max-w-md max-md:text-base max-md:mb-4">
                {slide.description}
              </p>
              <Button variant="default">{slide.buttonText}</Button>
            </div>
          </div>
        </div>
      ))}

      {/* Yön Okları */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-7xl px-8 max-md:pb-7 max-md:px-2 "
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-7xl px-8 max-md:pb-7 max-md:px-2"
      >
        &#10095;
      </button>

      {/* Sayfa Göstergesi */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex items-center gap-0.5 max-md:bottom-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-20 h-[10px] ${
              index === currentSlide ? "bg-white" : "bg-white opacity-50"
            } max-md:w-12 max-md:h-[3px]`}
            onClick={() => dispatch(setCurrentSlide(index))}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
