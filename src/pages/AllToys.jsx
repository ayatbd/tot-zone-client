import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);
  return <div>
    {toys.length}
  </div>;
};

export default AllToys;
