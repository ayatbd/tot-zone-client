import { Outlet } from "react-router-dom";
import Menubar from "./../../pages/shared/Menubar";
import Footer from "./../../pages/shared/Footer";
import { useEffect } from "react";
import Aos from "aos";

const Main = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
