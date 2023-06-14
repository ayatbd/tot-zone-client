import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th className="text-center">vailable Quantity</th>
            <th>View Details button</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((c) => (
            <tr key={c._email}>
              <td>{c.seller}</td>
              <td>{c.toyname}</td>
              <td>{c.category}</td>
              <td>{c.price}</td>
              <td className="text-center">{c.quantity}</td>
              <td>
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
