const Heading = ({ heading }) => {
  return (
    <div className="w-full flex justify-center items-center mb-20">
      <h1 data-aos="zoom-in" className="text-2xl md:text-4xl font-bold">
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
