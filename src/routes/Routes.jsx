import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import MyToys from "../pages/MyToys";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";
import Blogs from "../pages/Blogs";
import Slider from "../pages/Slider";
import Gallery from "../pages/Gallery";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "home",
            element: <Home></Home>
        },
        {
            path: "slider",
            element: <Slider></Slider>
        },
        {
            path: "login",
            element: <LogIn></LogIn>
        },
        {
            path: "register",
            element: <SignUp></SignUp>
        },
        {
            path: "alltoys",
            element: <AllToys></AllToys>
        },
        {
            path: "mytoys",
            element: <MyToys></MyToys>
        },
        {
            path: "addtoy",
            element: <AddToy></AddToy>
        },
        {
            path: "blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "gallery",
            element: <Gallery></Gallery>
        }
      ]
    },
  ]);

  export default router;