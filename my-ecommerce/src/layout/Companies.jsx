const Companies = () => {
  const brands = [
    { name: "Hooli", logo: "https://r.resimlink.com/gTo_lB1x.png" },
    { name: "Lyft", logo: "https://r.resimlink.com/SdcqU.png" },
    { name: "Stripe", logo: "https://r.resimlink.com/abUHygRpLl0.png" },
    { name: "AWS", logo: "https://r.resimlink.com/gOoBtUGp5.png" },
    { name: "Reddit", logo: "https://r.resimlink.com/_JlWzNIGmY0s.png" },
    { name: "Slack", logo: "https://r.resimlink.com/4WsTc_7zbB.png" },
  ];

  return (
    <section className="bg-[#FAFAFA] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/6 max-w-[160px]"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 sm:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
