/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner9 from "../../assets/images/banner9.jpg";
import banner10 from "../../assets/images/banner10.jpg";
import banner11 from "../../assets/images/banner11.jpg";
import banner12 from "../../assets/images/banner12.webp";
const Banner = () => {
  return (
    <div className="lg:h-[100vh] md:h-[60vh] h-[40vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex items-center justify-start"
            style={{ backgroundImage: `url(${banner9})` }}
          >
            <div
              data-aos="fade-up"
              className="text-start text-white bg-black/40 p-8 max-w-md lg:space-y-4 mx-[14%] md:mx-[8%]"
            >
              <h3 className="md:text-4xl text-xl font-semibold">
                Pick the best toy
              </h3>
              <p className="md:text-lg text-sm pb-2">
                We offer premium toy, whether you are shopping at one of our
                actual stores or via our website!
              </p>
              <button className="btn btn-primary normal-case rounded-full md:px-10 md:py-2 font-bold">
                Read more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner10})`,
            }}
          >
            <div className="text-white bg-black/60 p-8 max-w-md md:space-y-4 mx-[14%] md:mx-[8%]">
              <h3 className="md:text-4xl text-xl font-semibold">
                Get bonus at first order!
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2"></h1>
              <p className="md:text-lg text-sm pb-2">
                The best offer for regular customer, including free shipping on
                your children's birthday!
              </p>
              <button className="btn btn-primary normal-case rounded-full md:px-10 md:py-2 font-bold">
                Discover Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner11})`,
            }}
          >
            <div className="text-white bg-black/60 p-8 max-w-md md:space-y-4 mx-[14%] md:mx-[8%]">
              <h3 className="md:text-4xl text-xl font-semibold">
                Get bonus at first order!
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2"></h1>
              <p className="md:text-lg text-sm pb-2">
                The best offer for regular customer, including free shipping on
                your children birthday!
              </p>
              <button className="btn btn-primary normal-case rounded-full md:px-10 md:py-2 font-bold">
                Discover Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner12})`,
            }}
          >
            <div className="text-white bg-black/40 p-8 text-start max-w-md md:space-y-4 mx-[14%] md:mx-[8%]">
              <h3 className="md:text-4xl text-xl font-semibold">
                A World To Explore
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2"></h1>
              <p className="md:text-lg text-sm pb-2">
                Active toys for smart and active kids. Bring fun and non-stop
                learning for your little ones!
              </p>
              <button className="btn btn-primary normal-case rounded-full md:px-10 md:py-2 font-bold">
                Discover Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
