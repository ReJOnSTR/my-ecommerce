import ProductCard from "../components/ProductCard";

const BestsellerProducts = () => {
  const products = [
    {
      image: "https://r.resimlink.com/tegyO6z4EN.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "https://r.resimlink.com/UZSF3N2.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "https://r.resimlink.com/XU5Ruzn2KrvG.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "https://r.resimlink.com/jhafMn8lTUC.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },

    {
      image: "https://r.resimlink.com/T0iHU9mE4.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "https://r.resimlink.com/j_uHA13Y2W.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "https://r.resimlink.com/6HScD.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "https://r.resimlink.com/EZ1kqzuy.jpeg",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];

  return (
    <section className="flex font-montserrat ">
      <div className="w-[1400px] mx-auto max-md:w-full max-md:px-4 py-28  ">
        <div className="flex flex-col gap-3 pb-28">
          <p className="text-2xl font-normal text-center text-[#737373] mb-4">
            Featured Products
          </p>
          <p className="text-3xl font-bold text-center text-[#252B42] mb-4">
            BESTSELLER PRODUCTS
          </p>
          <p className="text-center text-lg font-normal text-[#737373]  max-w-[600px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8  max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:flex max-sm:items-center max-sm:flex-col">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;
