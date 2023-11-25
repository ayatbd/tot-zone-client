import Category from "./Category";
import Gallery from "./Gallery";
import OurServices from "./OurServices";
import Review from "./Review";
import Toys from "../Toys";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Toys></Toys>
      <OurServices />
      <Review />
    </div>
  );
};

export default Home;
