import { Link } from "react-router-dom";
import {} from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const CategoryCard = ({ toy }) => {
  const { photo, price, toyname, _id, rating } = toy;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-7 rounded-lg">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={photo} alt={toyname} className="w-full h-48 rounded-lg" />
        <div className="p-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{toyname}</h3>
            <div className="flex items-center gap-3">
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-warning" />}
                fullSymbol={<FaStar />}
              />
              <p className="font-[500]">{rating} /5</p>
            </div>
          </div>
          <div className="divider"></div>
          <span className="flex justify-between items-center mt-3">
            <Link to={`/category/${_id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                View Details
              </button>
            </Link>
            <p className="text-red-600 text-xl font-[500]">${price}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
