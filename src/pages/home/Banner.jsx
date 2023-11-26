/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner9 from "../../assets/images/banner9.jpg";
import banner10 from "../../assets/images/banner10.jpg";
import banner11 from "../../assets/images/banner11.jpg";
import banner12 from "../../assets/images/banner12.webp";
const Banner = () => {
  return (
    <div className="h-[100vh]">
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
            className="h-full bg-cover bg-center flex items-center justify-start"
            style={{ backgroundImage: `url(${banner9})` }}
          >
            <div className="text-start p-4 max-w-md lg:space-y-4 mx-[8%]">
              <h3 data-aos="fade-up" className="text-4xl font-semibold">
                Pick the best toy
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2"></h1>
              <p data-aos="fade-up" className="md:text-lg pb-2">
                We offer premium toy, whether you are shopping at one of our
                actual stores or via our website!
              </p>
              <button
                data-aos="fade-up"
                className="btn btn-primary normal-case rounded-full px-10 py-2 font-bold"
              >
                Read more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${banner10})`,
            }}
          >
            <div className="text-white p-4 max-w-md space-y-4 mx-[8%]">
              <h3 className="text-4xl font-semibold">
                Get bonus at first order!
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2"></h1>
              <p className="md:text-lg pb-2">
                The best offer for regular customer, including free shipping on
                your children's birthday!
              </p>
              <button className="btn btn-primary normal-case rounded-full px-10 py-2 font-bold">
                Discover Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${banner11})`,
            }}
          >
            <div className="text-white p-4 max-w-md space-y-4 mx-[8%]">
              <h3 className="text-4xl font-semibold">
                Get bonus at first order!
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2"></h1>
              <p className="md:text-lg pb-2">
                The best offer for regular customer, including free shipping on
                your children's birthday!
              </p>
              <button className="btn btn-primary normal-case rounded-full px-10 py-2 font-bold">
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
            <div className="text-black text-start p-4 max-w-md space-y-4 mx-[8%]">
              <h3 className="text-4xl font-semibold">A World To Explore</h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-nunito text-secondary mb-2"></h1>
              <p className="md:text-lg pb-2">
                Active toys for smart and active kids. Bring fun and non-stop
                learning for your little ones.!
              </p>
              <button className="btn btn-primary normal-case rounded-full px-10 py-2 font-bold">
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
