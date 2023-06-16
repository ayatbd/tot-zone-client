const ProductSection = () => {
  const toyCars = [
    {
      id: 1,
      name: "Super Racer",
      image: "https://i.ibb.co/nsRHS5c/img12.jpg",
      price: "$29.99",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Off-Road Adventure",
      image: "https://i.ibb.co/nsRHS5c/img12.jpg",
      price: "$39.99",
      rating: 4.2,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl text-center font-bold">New Collection</h2>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toyCars.map((car) => (
            <div key={car.id} className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src={car.image}
                alt={car.name}
                className="w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{car.name}</h3>
              <p className="text-gray-700">Price: {car.price}</p>
              <div className="text-yellow-500">Rating: {car.rating} stars</div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
