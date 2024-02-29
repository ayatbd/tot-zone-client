/* eslint-disable react/no-unescaped-entities */
import about_image from "../../src/assets/images/about_us.jpg";
const AboutUs = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Discover a world of joy and imagination in our about section! At
                our toy website, we're passionate about creating smiles. Dive
                into our story, where every toy is a tale waiting to be told.
                Learn about our commitment to quality, safety, and the magical
                journey that brings laughter to children's faces. Welcome to the
                enchanting realm of play!
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={about_image}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
