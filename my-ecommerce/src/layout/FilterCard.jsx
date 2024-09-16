const FilterCard = () => {
  return (
    <section className="font-montserrat bg-[#FAFAFA]">
      <div className="w-[1400px] mx-auto py-28 max-w-full px-4">
        <div className="pb-28">
          <p className="text-2xl font-bold text-center text-[#252B42] mb-6">
            EDITORS PICK
          </p>
          <p className="text-center text-[#737373] max-w-[600px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-1 max-sm:gap-4">
          <a
            href="#men"
            className="relative h-[666.667px] col-span-2 max-sm:h-[300px] max-sm:col-span-1"
          >
            <img
              src="https://r.resimlink.com/dihszWrH.jpeg"
              alt="Men"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 bg-white px-20 py-3 font-bold text-xl flex justify-center max-sm:px-10 max-sm:py-2 max-sm:text-base">
              MEN
            </span>
          </a>
          <a href="#women" className="relative h-[666.667px] max-sm:h-[300px]">
            <img
              src="https://r.resimlink.com/czy3uOd.jpeg"
              alt="Women"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-sm:px-8 max-sm:py-2 max-sm:text-base">
              WOMEN
            </span>
          </a>
          <div className="flex flex-col gap-[21.333px] max-sm:gap-4">
            <a
              href="#accessories"
              className="relative h-[322.667px] max-sm:h-[180px]"
            >
              <img
                src="https://r.resimlink.com/YNynK.jpeg"
                alt="Accessories"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-sm:px-6 max-sm:py-2 max-sm:text-sm">
                ACCESSORIES
              </span>
            </a>
            <a href="#kids" className="relative h-[322.667px] max-sm:h-[180px]">
              <img
                src="https://r.resimlink.com/0aAPnYu4.jpeg"
                alt="Kids"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-xl flex justify-center max-sm:px-6 max-sm:py-2 max-sm:text-sm">
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
