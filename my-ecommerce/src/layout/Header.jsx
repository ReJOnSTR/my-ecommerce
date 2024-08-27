import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../store/actions";
import { useHistory } from "react-router-dom";

const Header = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
    if (isMenuOpen) {
      dispatch(toggleMenu());
    }
  };

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
          Follow Us :
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
              <a
                onClick={() => handleNavigation("/")}
                className="hover:text-blue-500 cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => handleNavigation("/shop")}
                className="hover:text-blue-500 cursor-pointer"
              >
                Shop
              </a>
              <a
                onClick={() => handleNavigation("/about")}
                className="hover:text-blue-500 cursor-pointer"
              >
                About
              </a>

              <a
                onClick={() => handleNavigation("/team")}
                className="hover:text-blue-500 cursor-pointer"
              >
                Teams
              </a>
              <a
                onClick={() => handleNavigation("/contact")}
                className="hover:text-blue-500 cursor-pointer"
              >
                Contact
              </a>
            </div>
            <div className="flex gap-5">
              <i className="fas fa-search hidden max-md:block text-xl"></i>
              <i className="fas fa-shopping-cart hidden max-md:block text-xl"></i>
              <i className="fa-solid fa-user hidden max-md:block text-xl"></i>
              <button
                className="hidden max-md:block text-xl"
                onClick={() => dispatch(toggleMenu())}
              >
                ☰
              </button>
            </div>
          </div>
          <div className="flex items-center gap-5 max-md:hidden">
            <a href="#" className="text-[#23A6F0] hover:underline">
              Login / Register
            </a>
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
            <a
              onClick={() => handleNavigation("/")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleNavigation("/shop")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Shop
            </a>
            <a
              onClick={() => handleNavigation("/about")}
              className="hover:text-blue-500 cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => handleNavigation("/blog")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Blog
            </a>
            <a
              onClick={() => handleNavigation("/contact")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Contact
            </a>
            <a
              onClick={() => handleNavigation("/pages")}
              className="hover:text-blue-500 cursor-pointer"
            >
              Pages
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
