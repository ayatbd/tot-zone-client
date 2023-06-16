import { useState, useEffect } from "react";
import axios from "axios";

const ToyCategories = () => {
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Fetch toy data from the API
    axios
      .get("http://localhost:5000/toy")
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

  const handleDetails = (id) => {
    console.log(id);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <button
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
          className={`py-2 px-4 rounded ${
            activeCategory === "Math Toy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Math Toy")}
        >
          Math Toy
        </button>
        <button
          className={`py-2 px-4 rounded ${
            activeCategory === "Engineering Toy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Engineering Toy")}
        >
          Engineering Toy
        </button>
        <button
          className={`py-2 px-4 rounded ${
            activeCategory === "Science Toy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => filterToysByCategory("Science Toy")}
        >
          Science Toy
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
        {filteredToys.map((toy) => (
          <div key={toy._id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{toy.toyname}</h3>
            <p className="mb-2">Category: {toy.category}</p>
            <p className="mb-2">Price: {toy.price}</p>
            <p className="mb-2">Rating: {toy.rating}</p>
            <img src={toy.photo} alt={toy.toyname} className="w-full h-48" />
            <span className="flex flex-col justify-center mt-3">
              <button
                onClick={() => handleDetails(toy._id)}
                className="btn btn-accent"
              >
                view details
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCategories;
