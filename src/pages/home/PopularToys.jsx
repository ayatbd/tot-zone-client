import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "../../../src/index.css";

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    axios
      .get("https://tot-zone-server.vercel.app/toy")
      .then((response) => {
        setToys(response.data);
      })
      .catch((error) => {
        console.error("Error fetching toy data:", error);
      });
  }, []);

  const sortedByRatings = toys.filter((toy) => toy.rating > 4);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center font-bold mb-8">Popular in Store</h2>
      <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
        {sortedByRatings.slice(0, 4).map((toy) => (
          <div key={toy.id} className="parent relative border">
            <div>
              <div className="aspect-square overflow-hidden border">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src={toy.photo}
                  alt=""
                />
              </div>
              <div className="mt-4 flex items-start justify-between px-2">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" className="">
                      {toy.toyname}
                      <span className="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <Rating
                      placeholderRating={toy.rating}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-warning" />}
                      fullSymbol={<FaStar />}
                    />
                    <p className="font-[500]">{toy.rating} /5</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-normal sm:text-sm md:text-base">
                    $ {toy.price}.00
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="on-hover-anim absolute top-0 left-0 w-full h-full bg-gray-800 z-50"></div> */}
          </div>
        ))}
      </main>
    </div>
  );
};

export default PopularToys;
