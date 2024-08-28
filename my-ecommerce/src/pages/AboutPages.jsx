import Header from "../layout/Header";
import Footer from "../layout/Footer";
import TeamMember from "../components/TeamMember";
import Companies from "../layout/Companies";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const teamMembers = [
    {
      image: "https://r.resimlink.com/JtWexDQ_uU.jpeg",
      name: "Username",
      profession: "Profession",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      image: "https://r.resimlink.com/9VxL5.jpeg",
      name: "Username",
      profession: "Profession",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      image: "https://r.resimlink.com/PKMwJEmRf.jpeg",
      name: "Username",
      profession: "Profession",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <>
      <Header />
      <main className="font-montserrat">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center max-sm:items-start sm:items-center gap-8 ">
              <div className="w-full sm:w-1/2 flex flex-col gap-6 sm:gap-9 text-center sm:text-left max-sm:py-24">
                <p className="text-base font-bold text-[#252B42] max-sm:hidden ">
                  ABOUT COMPANY
                </p>
                <p className="text-4xl sm:text-6xl font-bold text-[#252B42] sm:w-[378px]">
                  ABOUT US
                </p>
                <p className="text-xl font-normal sm:text-2xl text-[#737373] sm:w-[378px]">
                  We know how large objects will act, but things on a small
                  scale just do not act that way.
                </p>
                <div>
                  <Button variant="blue">Get Quote Now</Button>
                </div>
              </div>
              <div className="w-full sm:w-1/2 relative">
                <img
                  src="https://r.resimlink.com/eVMZms8QjG.png"
                  alt="Happy family shopping"
                  className="w-full h-auto object-cover relative z-10"
                />
                <div className="absolute top-[9%] right-[0%] w-[620px] h-[620px] max-sm:w-[300px] max-sm:h-[300px] max-sm:top-[5%] max-sm:right-[12%] bg-[#FFE9EA] rounded-full"></div>
                <div className="absolute bottom-[84%] left-[-6%] w-[80px] h-[80px] max-sm:w-[40px] max-sm:h-[40px] max-sm:bottom-[90%] max-sm:left-[-3%] bg-[#FFE9EA] rounded-full"></div>
                <div className="absolute bottom-[75%] left-[100%] w-[20px] h-[20px] max-sm:w-[10px] max-sm:h-[10px] max-sm:bottom-[80%] max-sm:left-[95%] bg-[#977DF4] rounded-full"></div>
                <div className="absolute bottom-[60%] left-[93%] w-[30px] h-[30px] max-sm:w-[15px] max-sm:h-[15px] max-sm:bottom-[65%] max-sm:left-[90%] bg-[#FFE9EA] rounded-full"></div>
                <div className="absolute bottom-[41%] left-[-2%] w-[20px] h-[20px] max-sm:w-[10px] max-sm:h-[10px] max-sm:bottom-[45%] max-sm:left-[-1%] bg-[#977DF4] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Trying Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col gap-8 max-sm:text-center">
            <p className="text-lg font-normal text-[#E74040]">
              Problems trying
            </p>
            <div className="flex flex-col sm:flex-row gap-8 sm:justify-between">
              <p className="text-3xl sm:text-4xl font-bold text-[#252B42] max-w-lg">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </p>
              <p className="text-base sm:text-xl font-normal text-[#737373] max-w-3xl">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center text-center gap-10 max-sm:flex-wrap ">
              <div className="w-full flex flex-col gap-4 ">
                <p className="text-6xl sm:text-8xl font-bold text-[#252B42]">
                  15K
                </p>
                <p className="text-xl font-bold text-[#737373]">
                  Happy Customers
                </p>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-6xl sm:text-8xl font-bold text-[#252B42]">
                  150K
                </p>
                <p className="text-xl font-bold text-[#737373]">
                  Monthly Visitors
                </p>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-6xl sm:text-8xl font-bold text-[#252B42]">
                  15
                </p>
                <p className="text-xl font-bold text-[#737373]">
                  Countries Worldwide
                </p>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-6xl sm:text-8xl font-bold text-[#252B42]">
                  100+
                </p>
                <p className="text-xl font-bold text-[#737373]">Top Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-28">
          <div className="container mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden">
              <video
                className="w-full"
                controls
                poster="https://r.resimlink.com/LuQmA.jpeg"
              >
                <source src="path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="pt-20">
          <div className="container mx-auto px-4 flex flex-col gap-8">
            <p className="text-4xl font-bold text-center text-[#252B42]">
              Meet Our Team
            </p>
            <p className="text-base sm:text-lg font-normal text-center max-w-xl mx-auto text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Big Companies Section */}
        <section className="bg-[#FAFAFA] py-28">
          <div className="mx-auto flex flex-col gap-8 text-center">
            <p className="text-4xl font-bold text-[#252B42]">
              Big Companies Are Here
            </p>
            <p className="text-base sm:text-lg font-normal text-[#737373] max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <Companies />
          </div>
        </section>

        {/* CTA Section */}
        <section className="font-montserrat">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-10/12 bg-[#2A7CC7] text-white px-4 py-16 sm:pl-56 flex flex-col gap-8  justify-center max-sm:items-center max-sm:text-center">
              <p className="text-base font-bold uppercase">WORK WITH US</p>
              <p className="text-4xl sm:text-6xl font-bold">
                Now Lets grow Yours
              </p>
              <p className="text-base sm:text-xl max-w-xl">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <div>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-[#2A7CC7]"
                >
                  Button
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 hidden sm:block">
              <img
                src="https://r.resimlink.com/o8AF3cgxHr.jpeg"
                alt="Woman in pink"
                className="w-full h-[700px] object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
