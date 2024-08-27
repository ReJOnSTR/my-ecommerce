import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../components/ProductCard";
import Companies from "../layout/Companies";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const [selectedTab, setSelectedTab] = useState("description");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const productImage = location.state?.productImage;

  useEffect(() => {
    // Burada normalde bir API çağrısı yapılır
    setProduct({
      id,
      name: "Floating Phone",
      rating: 4.5,
      reviews: 10,
      price: 1139.33,
      availability: "In Stock",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      images: productImage
        ? [productImage, "https://via.placeholder.com/500x500?text=Image+2"]
        : [
            "https://via.placeholder.com/500x500?text=Image+1",
            "https://via.placeholder.com/500x500?text=Image+2",
          ],
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    });

    window.scrollTo(0, 0);
  }, [id, productImage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % (product?.images.length || 1)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [product]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % product.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? product.images.length - 1 : prevSlide - 1
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const bestsellerProducts = [
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
    <>
      <Header />
      <main className="font-montserrat">
        <div className="bg-[#FAFAFA] py-6">
          <div className="w-full max-w-[1400px] mx-auto px-4">
            <div className="flex items-center gap-2 font-bold text-sm">
              <a href="/" className="text-[#252B42]">
                Home
              </a>
              <span>
                <i className="fa-solid fa-chevron-right text-[#BDBDBD]"></i>
              </span>
              <a href="/shop" className="text-[#BDBDBD]">
                Shop
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA]">
          <div className="w-full max-w-[1400px] mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Ürün Görselleri */}
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-[300px] md:h-[600px]">
                  {product.images.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 "
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 "
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <div className="flex justify-start mt-4 space-x-2 overflow-x-auto">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className={`w-20 h-20 object-cover cursor-pointer ${
                        index === currentSlide ? "border-2 border-blue-500" : ""
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Ürün Detayları */}
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    ></i>
                  ))}
                  <span className="ml-2 text-[#737373]">
                    {product.reviews} Reviews
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#252B42] mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <p className="mb-4 text-[#737373]">
                  Availability:{" "}
                  <span className="text-[#23A6F0] font-bold">
                    {product.availability}
                  </span>
                </p>
                <div className="h-px bg-[#BDBDBD] my-6"></div>
                <p className="mb-6 text-[#737373]">{product.description}</p>

                <div className="h-px bg-[#BDBDBD] my-6"></div>

                <div className="flex gap-2 mb-6">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                        selectedColor === color
                          ? "border-blue-500"
                          : "border-[#BDBDBD]"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="blue">Select Options</Button>
                  <button className="border border-[#E8E8E8] hover:border-[#23A6F0] p-2 rounded-full w-10 h-10 flex items-center justify-center transition duration-300">
                    <i className="far fa-heart text-[#252B42]"></i>
                  </button>
                  <button className="border border-[#E8E8E8] hover:border-[#23A6F0] p-2 rounded-full w-10 h-10 flex items-center justify-center transition duration-300">
                    <i className="fas fa-cart-plus text-[#252B42]"></i>
                  </button>
                  <button className="border border-[#E8E8E8] hover:border-[#23A6F0] p-2 rounded-full w-10 h-10 flex items-center justify-center transition duration-300">
                    <i className="far fa-eye text-[#252B42]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ürün Özellikleri */}
        <div className="bg-white py-12">
          <div className="w-full max-w-[1400px] mx-auto px-4">
            <div className="flex justify-center border-b overflow-x-auto">
              <button
                className={`py-4 px-4 md:px-8 font-semibold whitespace-nowrap ${
                  selectedTab === "description"
                    ? "text-[#23A6F0] border-b-2 border-[#23A6F0]"
                    : "text-[#737373]"
                }`}
                onClick={() => setSelectedTab("description")}
              >
                Description
              </button>
              <button
                className={`py-4 px-4 md:px-8 font-semibold whitespace-nowrap ${
                  selectedTab === "additional"
                    ? "text-[#23A6F0] border-b-2 border-[#23A6F0]"
                    : "text-[#737373]"
                }`}
                onClick={() => setSelectedTab("additional")}
              >
                Additional Information
              </button>
              <button
                className={`py-4 px-4 md:px-8 font-semibold whitespace-nowrap ${
                  selectedTab === "reviews"
                    ? "text-[#23A6F0] border-b-2 border-[#23A6F0]"
                    : "text-[#737373]"
                }`}
                onClick={() => setSelectedTab("reviews")}
              >
                Reviews (0)
              </button>
            </div>
            <div className="mt-8">
              {selectedTab === "description" && (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    <img
                      className="w-full h-auto"
                      src="https://s3-alpha-sig.figma.com/img/8b0c/0f76/c949a2cffacf01d40c82241e905719cb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C18LYotJMvQiCiyu-EaMLFwxJIUEs55voe0ILOaIDa3wAjVX0uNmLyzppChG7Uq7nFfZRxJa88ZlDN4c-j34UST6AhxzQXGx0OhrxqY8jzfRvYInp2bQpeCEUJ6zXwsI8kD27K~cjMMWos~BC6q83rPJw7l3YIsg5cqS5wU1457jPjobgP9GtQegVbDVDc1bj9xirsoCZvm7RRcgWn7RQ-XpAwLBmEv~QvFTSkjxO-CaJCEkMFiFdCgVfR85tybZcNFWZYsAKHfa9ketulPRjz2qoYgwpxKxpysnfL3q5R799dSRm9nJbU3tPgKqJFN79I7x8QOFbQ-m-M7nPMksxA__"
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-bold mb-4 text-[#252B42]">
                      the quick fox jumps over
                    </h3>
                    <p className="text-[#737373] mb-4">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p className="text-[#737373] mb-4">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p className="text-[#737373]">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-bold mb-4 text-[#252B42]">
                      the quick fox jumps over
                    </h3>
                    <ul className="list-disc pl-5 text-[#737373] mb-6">
                      <li>the quick fox jumps over the lazy dog</li>
                      <li>the quick fox jumps over the lazy dog</li>
                      <li>the quick fox jumps over the lazy dog</li>
                      <li>the quick fox jumps over the lazy dog</li>
                    </ul>
                    <h3 className="text-lg font-bold mb-4 text-[#252B42]">
                      the quick fox jumps over
                    </h3>
                    <ul className="list-disc pl-5 text-[#737373]">
                      <li>the quick fox jumps over the lazy dog</li>
                      <li>the quick fox jumps over the lazy dog</li>
                      <li>the quick fox jumps over the lazy dog</li>
                    </ul>
                  </div>
                </div>
              )}
              {selectedTab === "additional" && (
                <p className="text-[#737373]">
                  Additional product information goes here.
                </p>
              )}
              {selectedTab === "reviews" && (
                <p className="text-[#737373]">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bestseller Products */}
        <div className="bg-[#FAFAFA] py-16">
          <div className="w-full max-w-[1400px] mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-[#252B42] border-b pb-5">
              BESTSELLER PRODUCTS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {bestsellerProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <Companies />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
