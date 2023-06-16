import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.webp";
const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-100 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-8">
          Explore the Exciting Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={img12}
              alt="Feature 1"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Realistic Design</h3>
            <p className="text-gray-700">
              Our toy cars are designed to resemble real vehicles, providing a
              lifelike experience.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={img13}
              alt="Feature 2"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Remote Control</h3>
            <p className="text-gray-700">
              Control the toy cars with an easy-to-use remote, giving you full
              command of the action.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={img14}
              alt="Feature 3"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Light and Sound Effects</h3>
            <p className="text-gray-700">
              Experience the thrill with exciting light and sound effects that
              bring the cars to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
