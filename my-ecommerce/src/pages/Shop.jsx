import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../components/ProductCard";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Companies from "../layout/Companies";
import {
  fetchCategories,
  fetchProducts,
  setCategory,
  setSort,
  setFilter,
  setProductList,
} from "../store/actions/productActions";

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector((state) => state.product.categories);
  const products = useSelector((state) => state.product.productList);
  const total = useSelector((state) => state.product.total);
  const productFetchState = useSelector(
    (state) => state.product.productFetchState
  );
  const currentSort = useSelector((state) => state.product.sort);
  const currentFilter = useSelector((state) => state.product.filter);
  const [localFilter, setLocalFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 25;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const fetchMoreProducts = useCallback(() => {
    const params = {
      category: categoryId || null,
      gender: gender || null,
      sort: currentSort,
      filter: currentFilter,
      offset: offset,
      limit: limit,
    };
    dispatch(fetchProducts(params));
    setOffset((prevOffset) => prevOffset + limit);
  }, [dispatch, categoryId, gender, currentSort, currentFilter, offset]);

  useEffect(() => {
    if (location.pathname === "/shop") {
      dispatch(setCategory(null));
    } else if (categoryId) {
      dispatch(setCategory(categoryId));
    }
    dispatch(setProductList([]));
    setOffset(0);
  }, [dispatch, location.pathname, categoryId, gender]);

  useEffect(() => {
    if (offset === 0) {
      fetchMoreProducts();
    }
  }, [fetchMoreProducts, offset]);

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(setProductList([]));
    setOffset(0);
  };

  const handleFilterChange = (e) => {
    setLocalFilter(e.target.value);
  };

  const applyFilter = () => {
    dispatch(setFilter(localFilter));
    dispatch(setProductList([]));
    setOffset(0);
  };

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
                {categoryName && (
                  <>
                    <span>
                      <i className="fa-solid fa-chevron-right text-[#BDBDBD]"></i>
                    </span>
                    <span className="text-[#BDBDBD]">{categoryName}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA]">
            <div className="grid grid-cols-5 gap-4 mb-8 w-[1400px] mx-auto pb-12 max-sm:grid-cols-1 max-sm:w-full max-sm:gap-y-4">
              {topCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/shop/${
                    category.gender === "k" ? "kadin" : "erkek"
                  }/${category.title.toLowerCase()}/${category.id}`}
                  className="relative h-64 bg-cover bg-center flex flex-col items-center justify-center text-white max-sm:h-[250px]"
                  style={{ backgroundImage: `url(${category.img})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <span className="relative z-10 text-lg font-bold mb-2">
                    {category.title}
                  </span>
                  <span className="relative z-10">
                    {category.rating} Rating
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mb-8 w-[1400px] mx-auto max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:gap-4">
            <p className="max-sm:text-xs">
              {productFetchState !== "FETCHING"
                ? `Showing ${products.length} of ${total} results`
                : "Loading products..."}
            </p>
            <div className="flex items-center gap-4 max-sm:w-full max-sm:justify-between">
              <select
                className="border p-2 max-sm:flex-grow"
                value={currentSort}
                onChange={handleSortChange}
              >
                <option value="">Sort by</option>
                <option value="price:asc">Price: Low to High</option>
                <option value="price:desc">Price: High to Low</option>
                <option value="rating:asc">Rating: Low to High</option>
                <option value="rating:desc">Rating: High to Low</option>
              </select>
              <input
                type="text"
                placeholder="Filter products..."
                value={localFilter}
                onChange={handleFilterChange}
                className="border p-2 max-sm:flex-grow"
              />
              <button
                className="bg-[#23A6F0] text-white px-4 py-2 max-sm:flex-grow"
                onClick={applyFilter}
              >
                Filter
              </button>
            </div>
          </div>

          <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreProducts}
            hasMore={products.length < total}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 w-[1400px] mx-auto max-sm:w-full">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : ""
                  }
                  category={product.category_title}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  discountedPrice={product.discount_price}
                />
              ))}
            </div>
          </InfiniteScroll>
        </section>

        <Companies />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
