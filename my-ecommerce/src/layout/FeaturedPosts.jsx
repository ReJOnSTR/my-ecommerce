import PostCard from "../components/PostCard";

const FeaturedPosts = () => {
  const posts = [
    {
      image: "https://r.resimlink.com/RgtrPpSfCIUJ.jpeg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "https://r.resimlink.com/lUBZzTrm.jpeg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "https://r.resimlink.com/G85yo.jpeg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <section className="font-montserrat py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-[#23A6F0] font-bold text-sm sm:text-base md:text-lg mb-2">
            Practice Advice
          </h2>
          <h3 className="text-[#252B42] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">
            Featured Posts
          </h3>
          <p className="text-[#737373] text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {posts.map((post, index) => (
            <div key={index} className="flex justify-center">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
