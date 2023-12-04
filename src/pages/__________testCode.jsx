import Heading from "../../shared/Heading";

const Review = () => {
  return (
    <div className="w-screen bg-gray-50 py-24">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <Heading heading="Testimonials" />
        <p data-aos="fade-up" className="mb-6 pb-2 md:mb-12 md:pb-0">
          Our customers love our toys! Here's what some of them have to say:
        </p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        {/* Customer Review 1 */}
        {/* Replace dummy data with actual customer details */}
        <div data-aos="fade-left" className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Customer Avatar"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Customer Name 1</h5>
          <p className="mb-4">
            "I absolutely adore the quality and design of these toys! They bring
            so much joy to my kids."
          </p>
          <ul className="mb-0 flex items-center justify-center">
            {/* Insert star icons for rating */}
            {/* Replace these icons with the actual rating */}
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  {/* Replace with your star icon */}
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Review 2 */}
        {/* Replace dummy data with actual customer details */}
        <div data-aos="fade-left" className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Customer Avatar"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Customer Name 2</h5>
          <p className="mb-4">
            "Amazing toy collection! My kids love playing with them all day
            long."
          </p>
          <ul className="mb-0 flex items-center justify-center">
            {/* Insert star icons for rating */}
            {/* Replace these icons with the actual rating */}
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  {/* Replace with your star icon */}
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Review 3 */}
        {/* Replace dummy data with actual customer details */}
        <div data-aos="fade-left" className="mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Customer Avatar"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Customer Name 3</h5>
          <p className="mb-4">
            "Fantastic toys! My children can't get enough of them. Great quality
            and durability."
          </p>
          <ul className="mb-0 flex items-center justify-center">
            {/* Insert star icons for rating */}
            {/* Replace these icons with the actual rating */}
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  {/* Replace with your star icon */}
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review;
