import { useEffect, useState } from "react";
import Loader from "../shared/Loader";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="table w-full p-2">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Seller</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Toy Name</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Sub-category
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Price</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                vailable Quantity
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                View Details button
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr
              key={toy._id}
              className="bg-gray-100 text-center border-b text-sm text-gray-600"
            >
              <td className="p-2 border-r">{toy.seller}</td>
              <td className="p-2 border-r">{toy.toyname}</td>
              <td className="p-2 border-r">{toy.category}</td>
              <td className="p-2 border-r">{toy.price}</td>
              <td className="p-2 border-r">{toy.quantity}</td>
              <td className="p-2 border-r">
                <div>
                  <button className="btn btn-ghost p-2">View Details</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
