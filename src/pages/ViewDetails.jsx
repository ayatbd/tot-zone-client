import { Link, useLoaderData } from "react-router-dom";
import PageBanner from "../shared/PageBanner";
import {
  FaFacebookF,
  FaGoogle,
  FaPinterest,
  FaRegStar,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import Rating from "react-rating";

const ViewDetails = () => {
  const viewDetail = useLoaderData();
  const { photo, toyname, seller, email, price, quantity, rating, details } =
    viewDetail;

  return (
    <div>
      <PageBanner>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li></li>
          <li>{toyname}</li>
        </ul>
      </PageBanner>

      <div className="container my-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-center aspect-square md:aspect-auto md:absolute"
            data-aos="zoom-in"
          />
        </div>
        <div className="space-y-6">
          <h1
            className="text-3xl sm:text-4xl font-extrabold font-nunito pb-2"
            data-aos="fade-left"
          >
            {name}
          </h1>
          <div data-aos="fade-left">
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
          </div>
          <p data-aos="fade-left">{details}</p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">Price:</span>
            <span>${price}</span>
          </p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">Seller Name:</span>
            <span>{seller}</span>
          </p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">Seller Email:</span>
            <span>{email}</span>
          </p>
          <p className="space-x-5" data-aos="fade-left">
            <span className="font-extrabold font-nunito">
              Available Quantity:
            </span>
            <span>{quantity}</span>
          </p>

          {/* buy now button, will implement action later */}
          <button
            className="btn btn-primary rounded-full w-44 normal-case !text-lg"
            data-aos="fade-left"
          >
            Buy Now
          </button>
          <p
            className="flex items-center gap-3 font-extrabold font-nunito"
            data-aos="zoom-in"
          >
            Share with us:
            <FaFacebookF className="cursor-pointer hover:text-primary duration-300" />
            <FaTwitter className="cursor-pointer hover:text-primary duration-300" />
            <FaPinterest className="cursor-pointer hover:text-primary duration-300" />
            <FaGoogle className="cursor-pointer hover:text-primary duration-300" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
