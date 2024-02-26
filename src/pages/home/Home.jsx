import Category from "./Category";
import Gallery from "./Gallery";
import OurServices from "./OurServices";
import Review from "./Review";
import Toys from "../Toys";
import Banner from "./Banner";
import PopularToys from "./PopularToys";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Toys></Toys>
      <OurServices />
      <PopularToys />
      <Review />
    </div>
  );
};

export default Home;
