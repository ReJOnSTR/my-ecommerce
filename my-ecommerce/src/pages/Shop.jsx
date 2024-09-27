import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Companies from "../layout/Companies";
import {
  fetchCategories,
  fetchProducts,
} from "../store/actions/productActions";

const Shop = () => {
  const dispatch = useDispatch();
  const { gender, category } = useParams();
  const categories = useSelector((state) => state.product.categories);
  const products = useSelector((state) => state.product.productList);
  const total = useSelector((state) => state.product.total);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity");
  const productsPerPage = 12;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const params = {
      gender: gender,
      category: category,
      offset: (currentPage - 1) * productsPerPage,
      limit: productsPerPage,
      sortBy: sortBy,
    };
    dispatch(fetchProducts(params));
  }, [dispatch, gender, category, currentPage, sortBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Top 5 kategorileri rating'e göre sırala
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <>
      <Header />
      <main className="font-montserrat">
        <section className="mx-auto max-md:w-full max-md:px-4">
          <div className="bg-[#FAFAFA]">
            <div className="flex justify-between items-center w-[1400px] mx-auto py-6 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:gap-2">
              <span className="text-2xl font-bold text-[#252B42]">Shop</span>
              <div className="flex items-center gap-2 font-bold text-sm">
                <Link to="/" className="text-[#252B42]">
                  Home
                </Link>
                <span>
                  <i className="fa-solid fa-chevron-right text-[#BDBDBD]"></i>
                </span>
                <span className="text-[#BDBDBD]">Shop</span>
              </div>
            </div>
          </div>

          {/* Kategori Kartları */}
          <div className="bg-[#FAFAFA]">
            <div className="grid grid-cols-5 gap-4 mb-8 w-[1400px] mx-auto pb-12 max-sm:grid-cols-1 max-sm:w-full max-sm:gap-y-4">
              {topCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/shop/${category.gender}/${category.code}`}
                  className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center text-white max-sm:h-[250px]"
                  style={{ backgroundImage: `url(${category.img})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <span className="relative z-10 text-lg font-bold mb-2">
                    {category.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Filtreler ve görünüm seçenekleri */}
          <div className="flex justify-between items-center mb-8 w-[1400px] mx-auto max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:gap-4">
            <p className="max-sm:text-xs">
              Showing all {products.length} results
            </p>
            <div className="flex gap-2 items-center">
              <span className="max-sm:hidden">Views:</span>
              <span className="border py-2 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8 8H4V4h4zm6-4h-4v4h4zm6 0h-4v4h4zM8 10H4v4h4zm6 0h-4v4h4zm6 0h-4v4h4zM8 16H4v4h4zm6 0h-4v4h4zm6 0h-4v4h4z"
                  />
                </svg>
              </span>
              <span className="border py-2 px-3">
                <i className="fa-solid fa-list"></i>
              </span>
            </div>
            <div className="flex items-center gap-4 max-sm:w-full max-sm:justify-between">
              <select
                className="border p-2 max-sm:flex-grow"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="popularity">Popularity</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <button className="bg-[#23A6F0] text-white px-4 py-2 max-sm:flex-grow">
                Filter
              </button>
            </div>
          </div>

          {/* Ürün grid'i */}
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 w-[1400px] mx-auto max-sm:w-full">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Sayfalama */}
          <div className="flex justify-center my-12 max-sm:flex-wrap max-sm:gap-2">
            <button
              className="px-5 py-4 border max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              First
            </button>
            <button
              className="px-4 py-4 border max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="px-4 py-4 border bg-[#23A6F0] text-white max-sm:px-3 max-sm:py-2 max-sm:text-sm">
              {currentPage}
            </button>
            <button
              className="px-4 py-4 border max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === Math.ceil(total / productsPerPage)}
            >
              Next
            </button>
            <button
              className="px-5 py-4 border max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              onClick={() => setCurrentPage(Math.ceil(total / productsPerPage))}
              disabled={currentPage === Math.ceil(total / productsPerPage)}
            >
              Last
            </button>
          </div>
        </section>

        <Companies />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
