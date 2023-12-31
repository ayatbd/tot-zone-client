import Heading from "../../shared/Heading";

const OurServices = () => {
  return (
    <div className="py-28">
      <div className="container mx-auto">
        <div className="max-container">
          <Heading heading="Our Services"></Heading>
          <div className="space-y-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2 md:px-0">
              <div className="flex justify-between items-center">
                <div
                  data-aos="fade-left"
                  className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3"
                >
                  <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
                    <img
                      className="rounded-full"
                      src="https://i.ibb.co/RDmFv61/truck.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl mb-1 font-bold">Free Shipping</h1>
                  <p className="text-slate-600 font-medium font-mono">
                    We provide free shipping.
                  </p>
                </div>
                <div className="border h-[70%]"></div>
              </div>
              <div className="flex justify-between items-center">
                <div
                  data-aos="fade-left"
                  className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3"
                >
                  <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
                    <img
                      className="rounded-full"
                      src="https://i.ibb.co/BtcSLqx/refresh.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl mb-1 font-bold">Return Policy</h1>
                  <p className="text-slate-600 font-medium font-mono">
                    We give opportunity return.
                  </p>
                </div>
                <div className="border h-[70%]"></div>
              </div>
              <div className="flex justify-between items-center">
                <div
                  data-aos="fade-left"
                  className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3"
                >
                  <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
                    <img
                      className="rounded-full"
                      src="https://i.ibb.co/3hZ8gb6/gift.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl mb-1 font-bold">Gift Card</h1>
                  <p className="text-slate-600 font-medium font-mono">
                    You can get Gift Card.
                  </p>
                </div>
                <div className="border h-[70%]"></div>
              </div>
              <div
                data-aos="fade-left"
                className="flex justify-between items-center"
              >
                <div className="text-[#4D5046] hover:text-secondary duration-300 text-center hover:scale-[0.98] flex flex-col items-center p-3">
                  <div className="p-2 border border-secondary rounded-full w-fit hover:shadow-xl mb-3">
                    <img
                      className="rounded-full"
                      src="https://i.ibb.co/NSRKrZN/benifit.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl mb-1 font-bold">Best Quality</h1>
                  <p className="text-slate-600 font-medium font-mono">
                    We provide best Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-5 px-2 md:px-0">
              <div
                data-aos="fade-right"
                className="rounded-xl relative overflow-hidden"
              >
                <img
                  className="w-full h-full hover:scale-[1.1] duration-300"
                  src="https://i.ibb.co/C6Mdh0W/on-Sale-Pic.webp"
                  alt=""
                />
                <div className="absolute top-5 md:top-16 right-8 md:right-14 space-y-3 flex flex-col items-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white">
                    ON SALE!
                  </h1>
                  <div className="text-sm w-fit font-semibold px-2 py-1 bg-black bg-opacity-50 text-white">
                    <p>SAVE UPTO 30% OFF</p>
                  </div>
                  <button className="px-4 py-2 text-sm bg-primary hover:bg-white hover:text-secondary rounded-full duration-300 text-white font-medium">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="rounded-xl relative overflow-hidden"
              >
                <img
                  className="w-full h-full hover:scale-[1.1] duration-300"
                  src="https://i.ibb.co/zs1B7n3/cuteToy.webp"
                  alt=""
                />
                <div className="absolute top-5 md:top-16 left-8 md:left-14 space-y-3 flex flex-col items-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white">
                    CUTE TOY
                  </h1>
                  <div className="text-sm w-fit font-semibold px-2 py-1 bg-black bg-opacity-50 text-white">
                    <p>LATEST COLLECTION</p>
                  </div>
                  <button className="px-4 py-2 text-sm bg-primary hover:bg-white hover:text-secondary rounded-full duration-300 text-white font-medium">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
