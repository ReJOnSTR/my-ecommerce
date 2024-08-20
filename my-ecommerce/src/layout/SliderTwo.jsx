import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSlide } from "../store/actions";

const Slider = () => {
  const currentSlide = useSelector((state) => state.slider.currentSlide);
  const dispatch = useDispatch();
  const slides = [
    {
      subtitle: "SUMMER 2024",
      title: `Vita Classic  Product`,
      description:
        "We know how large objects will act, We know how are objects will act, We know",
      buttonText: "ADD TO CART",
      bgImage:
        "https://s3-alpha-sig.figma.com/img/b1e6/9a4a/4b78802b0b946cdc179f730a39faddb9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Huty8g0864QG-HGL1wvCLgoqKZM2ALVjVIlV3D31PhmSZeyQOOOavvEzEUPoqW~p6sOBS9jJS-cbu08aaJ8nNbdAgVxM5KfTMPLPI1VSw5M3V6F9V5fJLBm1E~-2m6zk1duEUXQwi7iTh7RV2atO3gCH4dSgt-EiuSo8dVeXNTrlek4mgCGRtSN1jBU~fSEEwageHDvRjwNxXrBYuTUEMXf2M6~GCY7Suk-WK-xaKppaxjgUUyYI-9Sqn39Dfj8Meo~APeAXHXpbl2bUNAmz8KdjZ0nFpnfmpbSeJ2SFVJa4u~~jlFljeM7ISYXGKzZSNNP16BczL0sGjc4hcUZvMw__",
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
              <p className="text-7xl font-bold mb-9 leading-tight max-md:text-4xl max-md:mb-4 ">
                {slide.title}
              </p>
              <p className="text-2xl font-normal mb-9 max-w-md max-md:text-base max-md:mb-4">
                {slide.description}
              </p>
              <div className="flex justify-center items-center gap-11 text-3xl font-bold max-sm:flex-col">
                <p>$16.48</p>
                <button className="px-14 py-5 bg-[#2DC071] text-white text-base font-bold hover:bg-[#1f6b42] transition duration-300 max-md:px-8 max-md:py-3">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Yön Okları - */}
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
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
