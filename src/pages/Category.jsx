import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    // Fetch the API and set the initial toys state
    fetch("http://localhost:5000/toy")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, []);

  const handleTabSelect = (category) => {
    setActiveCategory(category);
  };

  const filteredToys = activeCategory
    ? toys.filter((toy) => toy.category === activeCategory)
    : toys;

  return (
    <div className="p-4">
      <TabList className="flex mb-4">
        <Tab
          className={`mr-4 px-4 py-2 rounded ${
            activeCategory === "mathtoy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => handleTabSelect("mathtoy")}
        >
          Math Toy
        </Tab>
        <Tab
          className={`mr-4 px-4 py-2 rounded ${
            activeCategory === "engineeringtoy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => handleTabSelect("engineeringtoy")}
        >
          Engineering Toy
        </Tab>
        <Tab
          className={`mr-4 px-4 py-2 rounded ${
            activeCategory === "sciencetoy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => handleTabSelect("sciencetoy")}
        >
          Science Toy
        </Tab>
      </TabList>

      <TabPanel>
        {filteredToys.length > 0 ? (
          <ul className="space-y-4">
            {filteredToys.map((toy) => (
              <li key={toy.id} className="bg-white p-4 rounded shadow">
                {/* Display toy information */}
                <h3 className="font-bold">{toy.name}</h3>
                <p>{toy.description}</p>
                <p>Category: {toy.category}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">
            No toys found for the selected category.
          </p>
        )}
      </TabPanel>
    </div>
  );
};

export default Category;
