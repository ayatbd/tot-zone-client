import Category from "./Category";
import FeatureSection from "./FeaturSection";
import Gallery from "./Gallery";
import OurServices from "./OurServices";
import ProductSection from "./ProductSection";
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
      <ProductSection></ProductSection>
    </div>
  );
};

export default Home;
