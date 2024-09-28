/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  category,
  title,
  description,
  price,
  discountedPrice,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full h-[350px] overflow-hidden">
        {image ? (
          <img
            src={image.url}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
      </div>
      <div className="gap-3 p-8 flex flex-col items-center">
        <p className="text-xl font-bold text-[#252B42] mb-2">{title}</p>
        <p className="text-lg font-medium text-[#737373] mb-2">{category}</p>
        <p className="text-sm text-[#737373] mb-2 text-center line-clamp-2">
          {description}
        </p>
        <div className="flex gap-2 mb-2">
          <span className="text-base font-bold text-[#BDBDBD]">${price}</span>
          {discountedPrice && (
            <span className="text-base font-bold text-[#23856D]">
              ${discountedPrice}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
