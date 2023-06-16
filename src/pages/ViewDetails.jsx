import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewDetail = useLoaderData();
  const { photo, toyname, seller, email, price, quantity, rating, details } =
    viewDetail;

  return (
    <div className="mt-28 mb-16">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <img
          className="w-full h-64 object-cover object-center"
          src={photo}
          alt={toyname}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{toyname}</div>
          <p className="text-gray-700 text-base mb-4">{details}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-sm mr-2">Seller:</span>
            <span className="text-gray-900 text-sm">{seller}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-sm mr-2">Email:</span>
            <span className="text-gray-900 text-sm">{email}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-sm mr-2">Price:</span>
            <span className="text-gray-900 text-sm">${price}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-sm mr-2">Quantity:</span>
            <span className="text-gray-900 text-sm">{quantity}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm mr-2">Rating:</span>
            <span className="text-gray-900 text-sm">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
