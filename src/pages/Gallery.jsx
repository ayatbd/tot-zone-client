import img5 from "../assets/images/IMG5.jpg";
import img6 from "../assets/images/IMG6.jpg";
import img7 from "../assets/images/IMG7.jpg";
import img8 from "../assets/images/IMG8.jpg";
import img9 from "../assets/images/IMG9.jpg";
import img10 from "../assets/images/IMG10.jpg";
import img11 from "../assets/images/IMG11.jpg";
import img4 from "../assets/images/img4.jpg";

const Gallery = () => {
  return (
    <div className="my-24">
      <h3 className="font-bold text-center text-2xl mb-10">Cars Gallery </h3>
      <div className="grid grid-cols-4 gap-2">
        <img className="w-full h-full" src={img5} />
        <img className="w-full h-full" src={img6} />
        <img className="w-full h-full" src={img7} />
        <img className="w-full h-full" src={img8} />
        <img className="w-full h-full" src={img9} />
        <img className="w-full h-full" src={img10} />
        <img className="w-full h-full" src={img11} />
        <img className="w-full h-full" src={img4} />
      </div>
    </div>
  );
};

export default Gallery;
