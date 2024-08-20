/* eslint-disable react/prop-types */

const ProductCard = ({
  image,
  category,
  title,
  price,
  discountedPrice,
  colors,
}) => {
  return (
    <a
      href="#"
      className="flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      <img src={image} alt={title} className="w-full h-auto p-1" />
      <div className="gap-3 p-8 flex flex-col items-center">
        <p className="text-xl font-bold text-[#252B42] mb-2">{title}</p>
        <p className="text-lg font-medium  text-[#737373] mb-2">{category}</p>
        <div className="flex gap-2 mb-2">
          <span className="text-base font-bold text-[#BDBDBD]">${price}</span>
          <span className="text-base font-bold text-[#23856D]">
            ${discountedPrice}
          </span>
        </div>
        {colors && colors.length > 0 && (
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProductCard;
