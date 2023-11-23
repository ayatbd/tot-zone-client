const Banner = () => {
  return (
    <div className="max-container h-full flex items-center justify-end">
      <div className="space-y-3 md:space-y-7 max-w-[570px] px-5 md:px-0">
        <div className="text-white font-bold px-4 py-2 rounded bg-secondary w-fit ">
          WELCOME TO Tot Zone
        </div>
        <div className="text-4xl md:text-6xl font-extrabold text-black bg-[#EEE0E0] bg-opacity-0">
          Special Edition
        </div>
        <p className="bg-opacity-0 bg-[#EEE0E0] text-accent font-semibold">
          Teddy bears have long held a special place in our hearts, captivating
          people of all ages with their timeless charm. As cherished companions,
          they provide comfort, solace, and a sense of security
        </p>
        <button className="my-btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner;
