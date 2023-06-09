import Category from "./Category";
import Gallery from "./Gallery";
import Slider from "./Slider";
import Toys from "./Toys";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <Category></Category>
            <Toys></Toys>
        </div>
    );
};

export default Home;