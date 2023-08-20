const Slider = () => {
  return (
    <div className="md:flex justify-end items-center carousel bg-[url(https://i.ibb.co/x3y3v50/benner1.webp)] bg-cover w-full h-[50vh]  md:h-[90vh] overflow-hidden">
      <div className="max-container md:w-1/2">
        <div className="space-y-3 md:space-y-7 max-w-[570px] px-5 md:px-0">
          <div className="text-white md:font-bold px-4 py-2 rounded bg-secondary w-fit ">
            WELCOME TO TOT ZONE
          </div>
          <div className="text-4xl md:text-6xl font-extrabold text-black bg-[#EEE0E0] bg-opacity-0">
            Special Edition
          </div>
          <p className="bg-opacity-0 bg-[#EEE0E0] text-accent font-semibold">
            Teddy bears have long held a special place in our hearts,
            captivating people of all ages with their timeless charm. As
            cherished companions, they provide comfort, solace, and a sense of
            security
          </p>
          <button className="px-5 py-2 rounded-full border border-primary text-base font-bold font-kanit">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
