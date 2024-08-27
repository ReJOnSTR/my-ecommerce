import Header from "../layout/Header";
import Footer from "../layout/Footer";
import TeamMember from "../components/TeamMember";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    image: "https://r.resimlink.com/802XCyawFjM.jpg",
    name: "Halil Sak",
    profession: "Front End Developer",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    image: "https://r.resimlink.com/iMBtohfq.jpeg",
    name: "Gökhan Özdemir",
    profession: " Scrum Master",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    image: "https://r.resimlink.com/1xVvO.jpeg",
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
  {
    image: "https://r.resimlink.com/M43XT.jpeg",
    name: "Username",
    profession: "Profession",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
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
    image: "https://r.resimlink.com/Kp0ao_T.jpeg",
    name: "Username",
    profession: "Profession",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    image: "https://r.resimlink.com/SRAjtsyrL6Nn.jpeg",
    name: "Username",
    profession: "Profession",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  // ... Diğer takım üyeleri
];

const TeamPage = () => {
  return (
    <>
      <Header />
      <main className="font-montserrat">
        <section className=" py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-base font-bold text-center text-gray-600 mb-2">
              WHAT WE DO
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#252B42] mb-8">
              Innovation tailored for you
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="text-[#252B42] font-bold">
                Home
              </a>
              <span>
                <i className="fa-solid fa-chevron-right text-[#BDBDBD]"></i>
              </span>
              <a href="/team" className="text-[#BDBDBD] font-bold">
                Team
              </a>
            </div>
          </div>
        </section>

        <section className="">
          <div className="mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Büyük resim */}
              <div className="w-full h-[700px] md:w-1/2 aspect-square">
                <img
                  src="https://r.resimlink.com/ASG26YMOm.jpeg"
                  alt="Featured Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 2x2 grid için container */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                <div className="h-[344px]">
                  <img
                    src="https://r.resimlink.com/WswxR58q.jpeg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[344px]">
                  <img
                    src="https://r.resimlink.com/JeDyUolON.jpeg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[344px]">
                  <img
                    src="https://r.resimlink.com/kDWg5EU.jpeg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[344px]">
                  <img
                    src="https://r.resimlink.com/iuTE48b.jpeg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto ">
            <h2 className="text-4xl font-bold text-center text-[#252B42] my-28">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10   ">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="my-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-[#252B42] mb-4">
              Start your 14 days free trial
            </h2>
            <p className="text-lg font-normal text-gray-600 mb-8">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </p>
            <Button variant="blue" size="lg">
              Try it free now
            </Button>
            <div className="flex justify-center gap-10 mt-8 text-3xl">
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TeamPage;
