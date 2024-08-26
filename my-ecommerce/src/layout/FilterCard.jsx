const FilterCard = () => {
  return (
    <section className=" font-montserrat bg-[#FAFAFA]">
      <div className="w-[1400px] mx-auto max-md:w-full max-md:px-4  py-28 ">
        <div className="pb-28">
          <p className="text-2xl font-bold text-center text-[#252B42] mb-6">
            EDITORS PICK
          </p>
          <p className="text-center text-[#737373]  max-w-[600px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1 max-md:gap-4">
          <a
            href="#men"
            className="relative h-[666.667px] col-span-2 max-md:h-[500px] max-md:col-span-1"
          >
            <img
              src="https://r.resimlink.com/dihszWrH.jpeg"
              alt="Men"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 bg-white px-20 py-3 font-bold text-xl flex justify-center max-md:px-10 max-md:py-2 max-md:text-base">
              MEN
            </span>
          </a>
          <a href="#women" className="relative h-[666.667px] max-md:h-[500px]">
            <img
              src="https://r.resimlink.com/czy3uOd.jpeg"
              alt="Women"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-md:px-8 max-md:py-2 max-md:text-base">
              WOMEN
            </span>
          </a>
          <div className="flex flex-col gap-[21.333px] max-md:gap-4">
            <a
              href="#accessories"
              className="relative h-[322.667px] max-md:h-[300px]"
            >
              <img
                src="https://r.resimlink.com/YNynK.jpeg"
                alt="Accessories"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-md:px-6 max-md:py-2 max-md:text-sm">
                ACCESSORIES
              </span>
            </a>
            <a href="#kids" className="relative h-[322.667px] max-md:h-[300px]">
              <img
                src="https://r.resimlink.com/0aAPnYu4.jpeg"
                alt="Kids"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-md:px-6 max-md:py-2 max-md:text-sm">
                KIDS
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterCard;
