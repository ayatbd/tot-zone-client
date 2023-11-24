import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <FadeLoader color="#2463eb" />
    </div>
  );
};

export default Loader;
