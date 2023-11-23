import { useEffect, useState } from "react";
import Loader from "../shared/Loader";
import PageBanner from "../shared/PageBanner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://b7a11-toy-marketplace-server-side-ayatbd.vercel.app/toy")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);
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
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-extrabold text-base">Seller</th>
              <th className="font-extrabold text-base">Toy Name</th>
              <th className="font-extrabold text-base">Subcategory</th>
              <th className="font-extrabold text-base">Price</th>
              <th className="font-extrabold text-base">Available Quantity</th>
              <th className="font-extrabold text-base">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {toys.map((toy) => (
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
                      <div className="font-bold">{toy.name}</div>
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
                      // navigate(`/toy/${toy._id}`);
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
