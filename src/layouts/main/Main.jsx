import { Outlet } from "react-router-dom";
import Menubar from "./../../pages/shared/Menubar";
import Footer from "./../../pages/shared/Footer";

const Main = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
