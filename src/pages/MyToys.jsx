import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState([]);
  const url = `http://localhost:5000/toy?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setToy(data));
  }, []);

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
        fetch(`http://localhost:5000/toy/${_id}`, {
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

  const handleToyUpdate = (id) => {
    fetch(`http://localhost:5000/toy/$${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = toy.filter((t) => t._id !== id);
          const updated = toy.find((t) => t._id === id);
          updated.status = "confirm";
          const newToy = [updated, ...remaining];
          setToy(newToy);
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
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
                      <img src={t.photo && t.photo} />
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
                  <button
                    onClick={() => handleToyUpdate(t._id)}
                    className="btn bg-gray-600 text-red-400 p-2"
                  >
                    <AiFillEdit size={24} />
                  </button>
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
