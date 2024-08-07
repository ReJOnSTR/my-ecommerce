const Footer = () => {
  return (
    <footer className="font-montserrat">
      <div className=" flex flex-col">
        <div className="bg-[#FAFAFA] mb-12">
          <div className="flex justify-between items-center  pt-12 pb-12 w-[1400px] container mx-auto  ">
            <p className="text-3xl font-bold text-gray-800">Bandage</p>
            <div className="flex gap-5">
              <i className="fab fa-facebook-f text-blue-600 text-xl"></i>
              <i className="fab fa-instagram text-pink-600 text-xl"></i>
              <i className="fab fa-twitter text-blue-400 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between  mb-12 w-[1400px] container mx-auto">
          <div>
            <p className="font-bold text-xl mb-4 text-[#252B42]">
              Company Info
            </p>
            <ul className="space-y-2 font-medium text-base text-[#737373]">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Carrier</a>
              </li>
              <li>
                <a href="">We are hiring</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-xl mb-4 text-[#252B42">Legal</p>
            <ul className="space-y-2 font-medium text-base text-[#737373]">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Carrier</a>
              </li>
              <li>
                <a href="">We are hiring</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-xl mb-4 text-[#252B42">Features</p>
            <ul className="space-y-2 font-medium text- text-[#737373]">
              <li>
                <a href="">Business Marketing</a>
              </li>
              <li>
                <a href="">User Analytic</a>
              </li>
              <li>
                <a href="">Live Chata</a>
              </li>
              <li>
                <a href="">Unlimited Support</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-xl mb-4 text-[#252B42">Resources</p>
            <ul className="space-y-2 font-medium text-base text-[#737373]">
              <li>
                <a href="">IOS & Android</a>
              </li>
              <li>
                <a href="">Watch a Demo</a>
              </li>
              <li>
                <a href="">Customers</a>
              </li>
              <li>
                <a href="">API </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-xl mb-4 text-[#252B42">Get In Touch</p>
            <div className="flex h-12">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded-l-md flex-grow"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-base text-gray-500">
              Lorem impsum dolor amit
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFA]">
          <div className="py-6 text-base font-bold text-[#737373]  w-[1400px] container mx-auto ">
            Made With Love By Figmaland All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
