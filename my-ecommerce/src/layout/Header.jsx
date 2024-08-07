const Header = () => {
  return (
    <header className="bg-[#252B42] text-[#FFFFFF] font-bold text-sm font-montserrat">
      {/* Üst Bilgi Çubuğu */}
      <div className=" mx-auto px-8 py-4 flex justify-between items-center max-md:hidden">
        <div className="flex items-center gap-8">
          <a href="tel:(225) 555-0118" className="flex items-center gap-2">
            <i className="fa-solid fa-phone "></i>(225) 555-0118
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
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="bg-white text-gray-800 ">
        <div className=" mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex gap-28">
            <div className="text-2xl font-bold">Bandage</div>
            <div className="flex gap-5 items-center text-[#737373]">
              <a href="#" className="hover:text-blue-500 ">
                Home
              </a>
              <a href="#" className="hover:text-blue-500">
                Shop
              </a>
              <a href="#" className="hover:text-blue-500">
                About
              </a>
              <a href="#" className="hover:text-blue-500">
                Blog
              </a>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
              <a href="#" className="hover:text-blue-500">
                Pages
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#23A6F0] hover:underline">
              Login / Register
            </a>
            <i className="fas fa-search text-sm text-[#23A6F0]"></i>
            <i className="fas fa-shopping-cart text-sm text-[#23A6F0]"></i>
            <i className="fas fa-heart text-sm text-[#23A6F0]"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
