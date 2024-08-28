/* eslint-disable react/prop-types */

const TeamMember = ({ image, name, profession, socials }) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-28">
      <div className="w-full h-[300px] mb-4">
        {" "}
        {/* Sabit yükseklik */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-xl font-bold">{name}</p>
      <p className="text-base font-bold text-[#737373]">{profession}</p>
      <div className="flex gap-5 text-2xl text-[#23A6F0]">
        {socials.facebook && (
          <a href={socials.facebook} className="">
            <i className="fab fa-facebook-f"></i>
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} className="">
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} className="">
            <i className="fab fa-twitter"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
