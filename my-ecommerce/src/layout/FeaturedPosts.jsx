import PostCard from "../components/PostCard";

const FeaturedPosts = () => {
  const posts = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HFgtSbzexy2L21dGrDaW4WViKh9KpFrKVwxzWgVeom~KWcT7ydwMqXD5jYKMooOkzQegT1~ooKAkq6Mpf1yRDDQ3kuMC66tNogZ~ZeSE~y~AqpmsyiP2NeJjOFyL-mAJ8kriZ~asYYXxno8rdgmD~aZkAcSQXei4H7pnjhtYmXhe2zDn~Aw7~Xwy5JKpfRBjxr98cowE3YkGSCrbO~6ENVKuCSUA-UltdW8mG5ag8GqWA0DnsKM~BR76~BEl1DEv7jcLzPqV6vSlf6IJMgzHnYbiVSs19fodkqPR52PFGY7t6NgFAWV4k7CMJYtp6UyiAceEDrchO7ZSbmXMNcKuVw__",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/412d/5bc5/d51defa7e9522a5eb5f534d0442131b2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mxb0iCDTsNlfQT1R~S8qndblXPNqzc30ExABgUhXRv4rorgHVeX7eP49PvUiZ83fwd1-xGe9segt4xqWdzT5VYJlNFr0vebHwBcBlg0LMUriiuB-quuHnovfARJ1o3XlaeLPWBfAj6tgE~wtb7Od8oVrgkzPra4Ha33aS~czd9OlrVCXMUeDcJlIVBb0uSHey0g1uwMOiiX6LUrnNq42pHb6Lhi0NHDxkg3Vra2HUUgNtAKFycre9~PZhXWcFeingy5ubaNzMhnyR8DWQkn4TxW~KMBIQ5sB~QWMA3Yip6BzPsCAIj3t3XQ84CIMcu6Ppc3hik104TKc5BsJ16PwYg__",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/af91/645f/60a447510f7b4e8aa158f122b0d1fe29?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8kQNXqnGL9yoSHrgZC1FsApKwQJheb5seYiUQvOANnC10Zr-szVcGfWBUmggk2FSDZZHOejVU4bF5KOcw~Ql83Uuc1ZVFFNyOn42BaYnRv~zrieW3RqtFQiep7Bi0rQw47xn-fpcF7MYavdV61ihX6TSB3F8jFvONXEIPylg~Eyn2mRJKDOwnPiMjZRoPqt22Ji2jIL17OkyQ1qLAvJVMhr1ZWNAdcs5wH7FYqF~PNRnn-zM2AOa-yQld7mg2bz196kBgjXy26AMDV-n0YDB1ZkH9X3cs~0rBqkudeQoSpLwLyfsQ5eNvWO4fav3gwWl8GpSGfwtUyp2tHmf-rRXA__",
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
