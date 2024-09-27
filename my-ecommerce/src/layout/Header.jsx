import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../store/actions/clientActions";
import { fetchCategories } from "../store/actions/productActions";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleNavigation = (path) => {
    history.push(path);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsCategoryMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  const groupAndSortCategories = () => {
    const grouped = { women: [], men: [] };
    const allCategories = new Set();

    categories.forEach((category) => {
      if (category.gender === "k") {
        grouped.women.push(category);
      } else if (category.gender === "e") {
        grouped.men.push(category);
      }
      allCategories.add(category.title);
    });

    const sortedCategories = Array.from(allCategories).sort();

    return {
      women: sortedCategories
        .map((title) => grouped.women.find((cat) => cat.title === title))
        .filter(Boolean),
      men: sortedCategories
        .map((title) => grouped.men.find((cat) => cat.title === title))
        .filter(Boolean),
    };
  };

  const groupedCategories = groupAndSortCategories();

  return (
    <header className="bg-[#252B42] text-[#FFFFFF] font-bold text-sm font-montserrat">
      {/* Üst Bilgi Çubuğu */}
      <div className="mx-auto px-8 py-4 flex justify-between items-center max-md:hidden">
        <div className="flex items-center gap-8">
          <a href="tel:(225) 555-0118" className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i>(225) 555-0118
          </a>
          <a
            href="mailto:michelle.rivera@example.com"
            className="flex items-center gap-2"
          >
            <i className="fa-regular fa-envelope"></i>
            michelle.rivera@example.com
          </a>
        </div>
        <span>Follow Us and get a chance to win 80% off</span>
        <div className="flex items-center gap-4">
          Follow Us:
          <div className="flex gap-4">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="bg-white text-gray-800">
        <div className="mx-auto px-8 py-6 flex items-center justify-between max-md:px-4 max-md:py-4">
          <div className="flex items-center gap-32 max-md:w-full max-md:justify-between max-md:gap-0">
            <div
              className="text-2xl font-bold cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              Bandage
            </div>
            <div className="flex gap-5 items-center text-[#737373] max-md:hidden">
              <span
                onClick={() => handleNavigation("/")}
                className="hover:text-blue-500 cursor-pointer"
              >
                Home
              </span>
              <div
                className="relative group"
                onMouseEnter={() => setIsCategoryMenuOpen(true)}
                onMouseLeave={() => setIsCategoryMenuOpen(false)}
              >
                <span className="hover:text-blue-500 cursor-pointer flex items-center">
                  Shop
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </span>
                {isCategoryMenuOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-4 z-20 w-[600px]">
                    <div className="flex">
                      <div className="w-1/2 border-r border-gray-200">
                        <h3 className="px-6 py-2 font-bold text-lg text-[#252B42]">
                          Women
                        </h3>
                        <div className="mt-2">
                          {groupedCategories.women.map((category) => (
                            <div
                              key={category.id}
                              className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-[#737373] transition duration-300"
                              onClick={() =>
                                handleNavigation(`/shop/k/${category.code}`)
                              }
                            >
                              {category.title}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-1/2">
                        <h3 className="px-6 py-2 font-bold text-lg text-[#252B42]">
                          Men
                        </h3>
                        <div className="mt-2">
                          {groupedCategories.men.map((category) => (
                            <div
                              key={category.id}
                              className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-[#737373] transition duration-300"
                              onClick={() =>
                                handleNavigation(`/shop/e/${category.code}`)
                              }
                            >
                              {category.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {["About", "Team", "Contact"].map((item) => (
                <span
                  key={item}
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-5">
              <i className="fas fa-search hidden max-md:block text-xl"></i>
              <i className="fas fa-shopping-cart hidden max-md:block text-xl"></i>
              <i className="fa-solid fa-user hidden max-md:block text-xl"></i>
              <button
                className="hidden max-md:block text-xl"
                onClick={toggleMenu}
              >
                ☰
              </button>
            </div>
          </div>
          <div className="flex items-center gap-5 max-md:hidden">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-[#23A6F0]">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-[#23A6F0] hover:underline cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleNavigation("/login")}
                  className="text-[#23A6F0] hover:underline cursor-pointer"
                >
                  Login
                </span>
                <span className="text-[#23A6F0]">/</span>
                <span
                  onClick={() => handleNavigation("/signup")}
                  className="text-[#23A6F0] hover:underline cursor-pointer"
                >
                  Register
                </span>
              </>
            )}
            <i className="fas fa-search text-sm text-[#23A6F0]"></i>
            <i className="fas fa-shopping-cart text-sm text-[#23A6F0]"></i>
            <i className="fas fa-heart text-sm text-[#23A6F0]"></i>
          </div>
        </div>
        {/* Mobil Menü */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden px-4 py-2 bg-white`}
        >
          <div className="flex flex-col gap-7 text-[#737373] justify-center items-center text-3xl font-normal py-20">
            {["Home", "Shop", "About", "Team", "Contact"].map((item) => (
              <span
                key={item}
                onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                className="hover:text-blue-500 cursor-pointer"
              >
                {item}
              </span>
            ))}
            {user ? (
              <>
                <span className="text-[#23A6F0]">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-[#23A6F0] hover:underline cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleNavigation("/login")}
                  className="text-[#23A6F0] hover:underline cursor-pointer"
                >
                  Login
                </span>
                <span
                  onClick={() => handleNavigation("/signup")}
                  className="text-[#23A6F0] hover:underline cursor-pointer"
                >
                  Register
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
