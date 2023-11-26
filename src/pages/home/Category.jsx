import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {} from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Heading from "../../shared/Heading";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    axios
      .get("https://tot-zone-server.vercel.app/toy")
      .then((response) => {
        setToys(response.data);
      })
      .catch((error) => {
        console.error("Error fetching toy data:", error);
      });
  }, []);

  const filterToysByCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredToys = activeCategory
    ? toys.filter((toy) => toy.category === activeCategory)
    : toys;

  return (
    <div className="container mx-auto p-4">
      <Heading heading="Toy Category"></Heading>
      <div className="flex md:flex-row flex-col justify-center gap-1 md:space-x-1 mb-4">
        <button
          data-aos="fade-left"
          className={`py-2 px-4 rounded ${
            activeCategory === null
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory(null)}
        >
          All
        </button>
        <button
          data-aos="fade-left"
          className={`py-2 px-4 rounded ${
            activeCategory === "Plush Teddy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Plush Teddy")}
        >
          Plush Teddy
        </button>
        <button
          data-aos="fade-left"
          className={`py-2 px-4 rounded ${
            activeCategory === "Classic Teddy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Classic Teddy")}
        >
          Classic Teddy
        </button>
        <button
          data-aos="fade-left"
          className={`py-2 px-4 rounded ${
            activeCategory === "Giant Teddy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Giant Teddy")}
        >
          Giant Teddy
        </button>
        <button
          data-aos="fade-left"
          className={`py-2 px-4 rounded ${
            activeCategory === "Mini Teddy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Mini Teddy")}
        >
          Mini Teddy
        </button>
        <button
          data-aos="fade-left"
          className={`py-2 px-4 rounded ${
            activeCategory === "Vintage Teddy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Vintage Teddy")}
        >
          Vintage Teddy
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 rounded-lg">
        {filteredToys.slice(0, 8).map((toy) => (
          <div
            data-aos="fade-up"
            key={toy._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="border rounded-lg overflow-hidden">
              <img src={toy.photo} alt={toy.toyname} className="w-full h-44" />
            </div>

            <div className="p-3">
              <div className="space-y-1">
                <h3 className="font-semibold">{toy.toyname}</h3>
                <div className="flex items-center gap-3">
                  <Rating
                    placeholderRating={toy.rating}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-warning" />}
                    fullSymbol={<FaStar />}
                  />
                  <p className="font-[500]">{toy.rating} /5</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between items-center">
                <Link to={`/category/${toy._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-[500] py-[6px] px-4 rounded-full">
                    View Details
                  </button>
                </Link>
                <p className="text-red-600 font-[500]">${toy.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
