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
    <section className="font-montserrat  py-28">
      <div className="w-[1400px] mx-auto max-md:w-full max-md:px-4">
        <div className="text-center mb-28">
          <h2 className="text-[#23A6F0] font-bold text-lg mb-2">
            Practice Advice
          </h2>
          <h3 className="text-[#252B42] font-bold text-5xl mb-2">
            Featured Posts
          </h3>
          <p className="text-[#737373] text-lg font-normal">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
