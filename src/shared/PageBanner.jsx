/* eslint-disable react/prop-types */
import bg from "../assets/images/kids.jpg";

const PageBanner = ({ heading, children }) => {
  return (
    <div
      className="h-[250px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(36, 99, 235, 0.8), rgba(36, 99, 235, 0.8)), url(${bg})`,
      }}
    >
      <h1 className="font-nunito font-extrabold text-4xl mb-2">{heading}</h1>
      <div className="breadcrumbs max-w-xs">{children}</div>
    </div>
  );
};

export default PageBanner;
