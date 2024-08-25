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
      image:
        "https://s3-alpha-sig.figma.com/img/2305/7910/d190d178c2a7b276e896b9d38b982bf6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WD5fJaSK96nU6t6on68UZzAix001cF9lxSchvYSCDDTnLwk5v~wfV8piGL2E~siJbS7384gV5WZwVDrStv0M-RcJne-KkgLCn8yg2IQmidyKuZQeSJYykwflUKdQUzKj59isHSGU9khzHfJxJtP28HT0Mr1F9XQplSLgdyOEr6uDGpnaJjmMKNBqCvn00YmYCz-uS~8J4fYHBzPX2TcndvYQYz~i-i4MC2MeI~HAwztDkBjyeOS1qcyNwyFZGsjo4KnNbXryrBpilSw2MPOZnhykspDEuw7XGkhtzWp6hOrVXV20AAf3nEqguM14m0FvV3HNfQICHJuovcPDoKRRfQ__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/edfd/a1c2/22054dedce3ff32fe480d8fc8eb07474?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hXTUnLKlVZnILy1W1ytqDp9uEPYjIZb7ZB2hOm7GD1aoXjvYwL6bMXC9Mzh~Wz2V1n1bJKb7U~4iLkD75lbX4tXUkH~67uCXC-ofaZ4wl5z-TJQ~u~DXaQwtErgwzY5zca-S43AvN99F4UBktwMhNYx2grS83QUOb5RvIzZpH466ob6G2SBjEjG8nLNHAYO-TyPJ2rFNjplIRLEdh~RTbc-NelSrToPl8Le13qOHZyFyGqzjifMpyPAMmlYiZwVy26e7taUR8~TeQgeWzfCrOco7jQxfyT~geh7N7i6qxmcXlipg9rqiZh3oZV-AKv5y7AaSyc1VLwe1-F~plWPT-Q__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4a6a/1016/1217dc07ba1cda4632e93a5851162bcb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mp1K71I2ubvtyu4TMrjCCcFRsRy~JV5AM1~BQae5JWtMQ~ItSAeebljT16XnYwZnurvx4lIem2AaMANU-MRp~JFEzKu5I1vukmWxcR8mtSkL-bfDVnR1dt2PhUCbA3JkF4HylHkxd14~6qaZvY~SyUyccXPN2P~VVEXs2-WGzWeHzpPu25Jlr-umixYL~ej~oTrH2qVmgjjqXy636c5wvUhwT-3Kai4Hw8STXQC1ODRGh~mpXhZMzav1YXWEmQBiMxxndIpscNYc9~ZrcYioNAUHQodsMfC8ySBqIV~8uecTWZ-RWlcR73EEbHe6fZYXI6j3gJRo2QQufrTh443pSA__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/74e6/48e4/3f346f3e64ec6890751ec33b3c7f5197?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CsyLwrR9VWQWQ6Gh~-BRvAzxY7zol5jbDgdFxjHK2hwyjRsFgBKink1lk3gKEtSQvLnFXLama~tegg10ZO0U80XUbMN1eudRbs85uBKvg6hqVBYMz7ifQ0RV8LWERDEy3cj9~-pM5qH3Qt~d6d7vIJWSQjEiFvumzq65xU3TXn8rV7i2ai5d5G40gIXk5jnAanIgDjRXj6CRcAO77r6tjOUKe5Odu2Q71Od8gGOkV5fqLi5K7Hmy7-41P5JfYHJZrQRmwmItjxIiEs-DE2olq23nC69lN9p1ceypRtk6FR8ZHzeSCtTeOk0Bol7zOEkaKPSS5xgbWOXRrZGYWEN--A__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },

    {
      image:
        "https://s3-alpha-sig.figma.com/img/41ba/1a58/2a6be5d0abdf4716fbac8cd3a73cb266?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOdCZIdLv2dENWsNkVhQvXcFrWBieLJx6x4Lt~XKsfHqDN~pa-jU~viuTDCaiDuE7VXMB9ZlZsZyYki5ocTYkDk9XIRrvIk~otxk5~8DGj5yk6GLUcQ3LZgakWsskkeRcKfIALa-SgoShkL6HVXEAkkD3zqu1iTbwCtc36FKfKg58A9UQ2Al36DcXK6MIzDu7toU1ryQxomMZqSGB96liZMZfAR8OkrQlNZSiHCV7H4fNJ-Uu-M5EU2KPqEsSRvXP9HK1a70e6xH4kKYrGzTscq7bwFnkVa~SwKgcJeYJ6K4xjJ-RW3LLLUu5Ufznbmb7r2f2WfVba7UJFoThXJ6PA__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a4b9/d5de/fc9e3b83803619da05903140ffc77947?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBnMbcoTvGvhJQjVC9rvz1Iy1JQY7kVpr5q7BNsILlUxBEyc6shAqPiC0hq8KoFo7YSI69gsQvqlK2jeOoiPVhr2S35Hy4Zt1U3zjEbklHUg-Uqy~0hz-GfcKJD3hBIG~O8bsaIL8sEb-iTuwoNfQgbr~hLG7LREAxtwCghLVD7WVusBg0IH47xgy16Fut19GgXHIvPCDjroiUVwxLgRP8IRScYYW1~wNooCIdo01dKHTkTcVcPASRpiXSMvGPSBVUqI13kypnOsgajCMEkq04bQSB6AfPUkbZteIG4ZXWRO6Q8~gtTeQ2007Jc6okd3gWPAxMGb0m1rYYs~6V5z8A__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/110b/c11c/4432558f247264194359558513a225fe?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzsuqxPo6HJuoitAbgkjHszF9AjklXlc5Q4pkRiG1ukOxSMjkf1h8ySHrIQND-qdgbB4uxDtVa-FdXFLlCgZPBnsOwzn9r6hnF3fuDOxpI2R~LqbsW6~QEjFv6thuBUzqbx~EXixADHVOVpcOGzaMfVvmuR5h4p6LAMD~~21aqUpLMUuYXd6ngE0IXj8DXBi2z4j-mtpU7CiLO2AnIV0wkpTgGTUBZ6SdpDiEDh5Y9r-AKW0ry~HDsGpu0jLU~8jKxoDyFGjrszD8m0BgTw~LaRYIErNoALi3m0ZZ43Gnnt9C-FfhfPUYfFnNQbjuxCrAweL4ujwARNvZ4ZP8J6Pgg__",
      category: "English Department",
      title: "Graphic Design",
      price: "16.48",
      discountedPrice: "6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c911/6841/0dcfe4d267b32aaf7b21288f7b9656f2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yiz~NgkxV1qtB8c8broxtAl30vljMw54y7SnK2nIwMUKh91UThwvwhhv9BAU9SyxwDsROs7R4hJPDoRE8qxw9kYumDZlgU8WnnSGOeM04JXMNrxOI6tmGvEaA4ghAecDDYvoqiPniJZCWq~PvvhOO3HWqkDVTPxdNCzHnRoCE0iueZVvx93uwFJjer4Ti-xtq3hvlCVhEIVCo2wbljndaaSSB7g8h89UBrqjxxJPNkSyW8gE4zUpDpMAv6yDqjlc5CxFqB-lHEKsvT1bUxZReF5Yhx88vujgvjyqLDKgjR7wxJx35fWUld~x2mtw9yzBNIuYBLfyuqpWbpI5m8p5HQ__",
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
