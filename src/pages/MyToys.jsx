import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";
import PageBanner from "../shared/PageBanner";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [toy, setToy] = useState([]);
  const url = `https://tot-zone-server.vercel.app/toy?email=${user?.email}`;
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setToy(data);
        setLoading(false);
      });
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tot-zone-server.vercel.app/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = toy.filter((t) => t._id !== _id);
              setToy(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="text-gray-900 bg-gray-200">
      <PageBanner heading="My Toys">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>My Toys</li>
        </ul>
      </PageBanner>
      <div className="px-3 py-4 overflow-x-auto container mx-auto">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Toy Pictur</th>
              <th className="text-left p-3 px-5">Quantity</th>
              <th className="text-left p-3 px-5">Category</th>
              <th className="text-left p-3 px-5">Price</th>
              <th className="text-left p-3 px-5">Action</th>
              <th className="text-left p-3 px-5">Action</th>
            </tr>
            {toy.map((t) => (
              <tr
                key={t._id}
                className="border-b hover:bg-orange-100 bg-gray-100"
              >
                <td className="p-3 px-5">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img className="p-1" src={t.photo && t.photo} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3 px-5">{t.toyname}</td>
                <td className="p-3 px-5">{t.quantity}</td>
                <td className="p-3 px-5">{t.category}</td>
                <td className="p-3 px-5">{t.price}</td>
                <td className="p-3 px-5 flex justify-start">
                  <button
                    onClick={() => handleDelete(t._id)}
                    type="button"
                    className="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                  <button
                    className=" text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    <Link to={`/update/${t._id}`}>Edit</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
