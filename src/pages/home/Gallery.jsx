import Marquee from "react-marquee-slider";
import Heading from "../../shared/Heading";

const galleryImg = [
  "https://i.ibb.co/HF2gD36/teddy-8.jpg",
  "https://i.ibb.co/PZzjbCJ/teddy-7.jpg",
  "https://i.ibb.co/Twdckzr/teddy-6.jpg",
  "https://i.ibb.co/v4mQWcw/teddy-5.jpg",
  "https://i.ibb.co/7XvD90C/teddy-4.jpg",
  "https://i.ibb.co/C8Y6tGn/teddy-3.jpg",
  "https://i.ibb.co/0mgKGK8/teddy-2.jpg",
  "https://i.ibb.co/cc0t00G/teddy-1.jpg",
  "https://i.ibb.co/h82hRmK/teddy10.jpg",
  "https://i.ibb.co/M5R24cj/teddy-9.jpg",
];
const galleryImgRevers = [
  "https://i.ibb.co/D96dCcS/teddy-12.jpg",
  "https://i.ibb.co/0mgKGK8/teddy-2.jpg",
  "https://i.ibb.co/cN3ZV1N/teddy11.jpg",
  "https://i.ibb.co/h82hRmK/teddy10.jpg",
  "https://i.ibb.co/jf0xQFY/teddy13.jpg",
  "https://i.ibb.co/C8Y6tGn/teddy-3.jpg",
  "https://i.ibb.co/HF2gD36/teddy-8.jpg",
  "https://i.ibb.co/7XvD90C/teddy-4.jpg",
  "https://i.ibb.co/v4mQWcw/teddy-5.jpg",
  "https://i.ibb.co/cc0t00G/teddy-1.jpg",
];

const Gallery = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10 md:py-28">
        <Heading heading="Gallery"></Heading>
        <div data-aos="fade-up" className="relative rounded-xl shadow-xl">
          <div className="h-[200px] w-full px-5 pt-5">
            <Marquee key="" velocity={12} className="w-full h-full">
              {galleryImg?.map((toyImg, index) => (
                <div key={index} className="w-fit h-[200px] overflow-hidden  ">
                  <img
                    src={toyImg}
                    className="w-fit h-full border-r hover:scale-[1.2] origin-center duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="h-[200px] w-full px-5 pb-5">
            <Marquee key="" velocity={12}>
              {galleryImgRevers?.map((toyImg, index) => (
                <div key={index} className="w-fit h-[200px] overflow-hidden  ">
                  <img
                    src={toyImg}
                    className="w-fit h-[200px] border-r hover:scale-[1.2] origin-center duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
