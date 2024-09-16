const Footer = () => {
  return (
    <footer className="font-montserrat bg-white">
      <div className="bg-[#FAFAFA] py-10">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-4">
          <p className="text-2xl font-bold text-[#252B42]">Bandage</p>
          <div className="flex gap-5">
            <i className="fab fa-facebook text-[#23A6F0] text-2xl"></i>
            <i className="fab fa-instagram text-[#23A6F0] text-2xl"></i>
            <i className="fab fa-twitter text-[#23A6F0] text-2xl"></i>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-base mb-5 text-[#252B42]">
              Company Info
            </h3>
            <ul className="space-y-2.5 text-sm text-[#737373]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-[#252B42]">Legal</h3>
            <ul className="space-y-2.5 text-sm text-[#737373]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-[#252B42]">
              Features
            </h3>
            <ul className="space-y-2.5 text-sm text-[#737373]">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-[#252B42]">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-[#737373]">
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-[#252B42]">
              Get In Touch
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-r-0 border-[#E6E6E6] rounded-l-md flex-grow text-sm min-w-0"
              />
              <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-r-md text-sm font-bold whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-xs text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E6E6E6]">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
