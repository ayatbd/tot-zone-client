import { useEffect, useState } from "react";
import Loader from "../shared/Loader";
import PageBanner from "../shared/PageBanner";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://tot-zone-server.vercel.app/toy")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data); // Set initial filtered toys same as fetched toys
        setLoading(false);
      });
  }, []);

  // Function to handle sorting by price
  const handleSort = (value) => {
    setSortOrder(value);

    let sortedToys = [...filteredToys]; // Create a copy of filtered toys

    if (value === "price-ascending") {
      sortedToys.sort((a, b) => a.price - b.price); // Sort by price, low to high
    } else if (value === "price-descending") {
      sortedToys.sort((a, b) => b.price - a.price); // Sort by price, high to low
    }

    setFilteredToys(sortedToys); // Update filtered toys with sorted list
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <PageBanner heading="All Toys">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>All Toys</li>
        </ul>
      </PageBanner>
      <div className="overflow-x-auto overflow-y-hidden my-14 container mx-auto">
        <div className="my-6 bg-base-200 p-4 flex justify-center lg:justify-between gap-x-10 gap-y-6 flex-wrap">
          {/* search box */}
          <form className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                name="search"
                className="input focus:outline-none"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  const filtered = toys.filter((toy) =>
                    `${toy.seller} ${toy.toyname} ${toy.price} ${toy.category}`
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  );
                  setFilteredToys(filtered);
                }}
              />

              <button type="submit" className="btn btn-square btn-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* sorting */}
          <div className="flex items-center gap-3 w-fit">
            <label htmlFor="sorting">Sort by</label>
            <select
              id="sorting"
              className="select w-fit focus:outline-none"
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Featured</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
            </select>
          </div>
        </div>
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-extrabold text-sm">Seller</th>
              <th className="font-extrabold text-sm">Toy Name</th>
              <th className="font-extrabold text-sm">Subcategory</th>
              <th className="font-extrabold text-sm">Price</th>
              <th className="font-extrabold text-sm">Available Quantity</th>
              <th className="font-extrabold text-sm">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {filteredToys.map((toy) => (
              <tr key={toy._id}>
                <td></td>
                <td>
                  <div className="font-semibold">{toy.seller}</div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="text-start">
                      <div className="font-bold">{toy.toyname}</div>
                      <Rating
                        placeholderRating={toy.rating}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className="text-warning" />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                  </div>
                </td>
                <td>{toy.category}</td>
                <td className="font-semibold">${toy.price}</td>
                <td>{toy.quantity}</td>
                <th>
                  {/* view details button */}
                  <button
                    onClick={() => {
                      if (!user)
                        Swal.fire({
                          icon: "info",
                          title: "Login please!",
                          iconColor: "#FEBF00",
                          text: "You have to log in first to view details",
                          confirmButtonColor: "#FEBF00",
                        });
                      navigate(`/category/${toy._id}`);
                    }}
                    className="btn btn-primary btn-xs"
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
};

export default AllToys;
