import Category from "./Category";
import Gallery from "./Gallery";
import OurServices from "./OurServices";
import Review from "./Review";
import Slider from "./Slider";
import Toys from "./Toys";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Gallery></Gallery>
      <Category></Category>
      <Toys></Toys>
      <OurServices />
      <Review />
    </div>
  );
};

export default Home;
