import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState([]);
  const url = `https://b7a11-toy-marketplace-server-side-ayatbd.vercel.app/toy?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setToy(data));
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
        fetch(
          `https://b7a11-toy-marketplace-server-side-ayatbd.vercel.app/toy/${_id}`,
          {
            method: "DELETE",
          }
        )
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

  return (
    <div className="overflow-x-auto w-full mt-28 mb-14">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Toy Pictur</th>
            <th>Toy Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toy.map((t) => (
            <tr key={t._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img className="p-1" src={t.photo && t.photo} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{t.toyname}</td>
              <td>{t.quantity}</td>
              <td>{t.category}</td>
              <td>{t.price}</td>
              <td>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="btn bg-gray-600 text-red-400 p-2"
                  >
                    <AiFillDelete size={24} />
                  </button>
                  <Link to={`/update/${t._id}`}>
                    <button
                      // onClick={() => handleToyUpdate(t._id)}
                      className="btn bg-gray-600 text-red-400 p-2"
                    >
                      <AiFillEdit size={24} />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
