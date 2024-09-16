const Companies = () => {
  const brands = [
    {
      name: "Hooli",
      logo: "https://r.resimlink.com/gTo_lB1x.png",
    },
    { name: "Lyft", logo: "https://r.resimlink.com/SdcqU.png" },
    { name: "", logo: "https://r.resimlink.com/abUHygRpLl0.png" },
    { name: "Stripe", logo: "https://r.resimlink.com/gOoBtUGp5.png" },
    { name: "AWS", logo: "https://r.resimlink.com/_JlWzNIGmY0s.png" },
    { name: "Reddit", logo: "https://r.resimlink.com/4WsTc_7zbB.png" },
  ];

  return (
    <>
      {/* Marka Logoları */}
      <section className="bg-[#FAFAFA] py-14">
        <div className="w-[1400px] mx-auto sm:px-6 lg:px-8 max-sm:w-full max-sm:px-4">
          <div className="flex justify-between gap-8 items-center max-sm:flex-col max-sm:justify-center ">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 max-sm:h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
