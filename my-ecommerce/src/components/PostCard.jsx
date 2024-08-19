/* eslint-disable react/prop-types */
const PostCard = ({ image, tags, title, description, date, comments }) => {
  return (
    <div className="flex flex-col bg-white shadow-md">
      <div className="relative">
        <img src={image} alt={title} className="w-[500px] h-[400px]" />
        <div className="absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold py-1 px-3 rounded-sm">
          NEW
        </div>
      </div>
      <div className="p-8 flex flex-col gap-3  ">
        <div className="flex gap-5 text-sm font-normal">
          {tags.map((tag, index) => (
            <span key={index} className="text-[#737373]">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-3xl font-normal text-[#252B42] leading-tight ">
          {title}
        </p>
        <p className="text-xl font-normal    text-[#737373] leading-tight ">
          {description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2 text-sm text-[#737373]">
            <i className="far fa-clock text-[#23A6F0]"></i>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#737373] py-5">
            <i className="far fa-chart-bar"></i>
            <span>{comments} comments</span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-bold text-[#737373] mt-2"
        >
          Learn More <i className="fas fa-chevron-right text-[#23A6F0]"></i>
        </a>
      </div>
    </div>
  );
};
export default PostCard;
