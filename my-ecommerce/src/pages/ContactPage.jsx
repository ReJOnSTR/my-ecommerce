import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="font-montserrat">
        <section className="relative bg-white overflow-hidden ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center max-sm:items-start sm:flex-row">
              {/* Sol taraf içerik */}
              <div className="w-full sm:w-1/2 flex flex-col gap-6 sm:gap-9 text-center sm:text-left mb-10 sm:mb-0">
                <h2 className="text-base font-bold text-[#252B42]">
                  CONTACT US
                </h2>
                <h1 className="text-4xl sm:text-6xl font-bold text-[#252B42] sm:w-[378px]">
                  Get in touch today!
                </h1>
                <p className="text-xl font-normal sm:text-2xl text-[#737373] sm:w-[378px]">
                  We know how large objects will act, but things on a small
                  scale
                </p>
                <p className="font-bold text-xl sm:text-2xl text-[#252B42]">
                  Phone : +451 215 215
                </p>
                <p className="font-bold text-xl sm:text-2xl text-[#252B42]">
                  Fax : +451 215 215
                </p>
                <div className="flex justify-center sm:justify-start gap-6 sm:gap-8">
                  <a href="#" className="text-[#252B42]">
                    <i className="fab fa-twitter text-2xl sm:text-3xl"></i>
                  </a>
                  <a href="#" className="text-[#252B42]">
                    <i className="fab fa-facebook text-2xl sm:text-3xl"></i>
                  </a>
                  <a href="#" className="text-[#252B42]">
                    <i className="fab fa-instagram text-2xl sm:text-3xl"></i>
                  </a>
                  <a href="#" className="text-[#252B42]">
                    <i className="fab fa-linkedin text-2xl sm:text-3xl"></i>
                  </a>
                </div>
              </div>

              {/* Sağ taraf görsel */}
              <div className="w-full sm:w-1/2 relative">
                <img
                  src="https://ecommerce-project-liart.vercel.app/assets/ContactHeader-CRrK1ki7.png"
                  alt="Happy family shopping"
                  className="w-full h-auto object-cover relative z-10"
                />
                {/* Arka plan balonları */}
                <div className="absolute top-[9%] right-[0%] w-[620px] h-[620px] max-sm:w-[300px] max-sm:h-[300px] max-sm:top-[5%] max-sm:right-[12%] bg-[#FFE9EA] rounded-full"></div>
                <div className="absolute bottom-[84%] left-[-6%] w-[80px] h-[80px] max-sm:w-[40px] max-sm:h-[40px] max-sm:bottom-[90%] max-sm:left-[-3%] bg-[#FFE9EA] rounded-full"></div>
                <div className="absolute bottom-[75%] left-[100%] w-[20px] h-[20px] max-sm:w-[10px] max-sm:h-[10px] max-sm:bottom-[80%] max-sm:left-[95%] bg-[#977DF4] rounded-full"></div>
                <div className="absolute bottom-[60%] left-[93%] w-[30px] h-[30px] max-sm:w-[15px] max-sm:h-[15px] max-sm:bottom-[65%] max-sm:left-[90%] bg-[#FFE9EA] rounded-full"></div>
                <div className="absolute bottom-[41%] left-[-2%] w-[20px] h-[20px] max-sm:w-[10px] max-sm:h-[10px] max-sm:bottom-[45%] max-sm:left-[-1%] bg-[#977DF4] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Diğer bölümler aynı kalacak */}
        <section className="py-16 md:py-24">
          <div className=" flex flex-col items-center mx-auto text-center gap-20 ">
            <div>
              {" "}
              <h2 className="text-sm font-bold text-[#252B42] ">
                VISIT OUR OFFICE
              </h2>
              <p className="text-5xl font-bold text-[#252B42] mt-4 ">
                We help small businesses <br /> with big ideas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Kart 1 */}
              <div className="flex flex-col gap-4 py-32 px-16   bg-white font-bold text-lg">
                <div className="text-7xl  text-[#23A6F0]">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="">georgia.young@example.com</p>
                  <p className="">georgia.young@ple.com</p>
                </div>

                <p className="font-bold ">Get Support</p>
                <Button variant="blueOutline" className="w-full">
                  Submit Request
                </Button>
              </div>

              {/* Kart 2 */}
              <div className="flex flex-col gap-4 py-32 px-16  bg-[#252B42] text-white font-bold text-lg">
                <div className="text-7xl  text-[#23A6F0]">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="">georgia.young@example.com</p>
                  <p className="">georgia.young@ple.com</p>
                </div>
                <p className="font-bold ">Get Support</p>
                <Button variant="blueOutline" className="w-full">
                  Submit Request
                </Button>
              </div>

              {/* Kart 3 */}
              <div className="flex flex-col gap-4 py-32 px-16   bg-white font-bold text-lg">
                <div className="text-7xl  text-[#23A6F0]">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="">georgia.young@example.com</p>
                  <p className="">georgia.young@ple.com</p>
                </div>
                <p className="font-bold ">Get Support</p>
                <Button variant="blueOutline" className="w-full">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className=" flex flex-col items-center gap-8  mb-20 mt-15 text-center">
          <div>
            <img src="https://r.resimlink.com/sp9CoIRfJW.png" alt="" />
          </div>
          <h2 className="text-xl font-bold text-[#252B42] ">
            WE Cant WAIT TO MEET YOU
          </h2>
          <h3 className="text-7xl md:text-6xl font-bold text-[#252B42] ">
            Lets Talk
          </h3>
          <Button variant="blue" size="lg">
            Try it free now
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
