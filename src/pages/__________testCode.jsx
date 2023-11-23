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
            <div className="font-semibold">{toy.sellerName}</div>
          </td>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={toy.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div className="text-start">
                <div className="font-bold">{toy.name}</div>
                <StarRatings
                  rating={toy.rating}
                  starRatedColor="#FEBF00"
                  starDimension="16px"
                  starSpacing="1px"
                  numberOfStars={5}
                  name="rating"
                />
              </div>
            </div>
          </td>
          <td>{toy.subCategory}</td>
          <td className="font-semibold">${toy.price}</td>
          <td>{toy.availableQty}</td>
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
                navigate(`/toy/${toy._id}`);
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
</div>;
