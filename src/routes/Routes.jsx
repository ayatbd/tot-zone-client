import { createBrowserRouter } from "react-router-dom";
import Main from "./../layouts/main/Main";
import ErrorPage from "./../Components/ErrorPage";
import Home from "./../pages/home/Home";
import Slider from "../pages/home/Slider";
import LogIn from "./../pages/LogIn";
import SignUp from "./../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import AllToys from "./../pages/AllToys";
import MyToys from "./../pages/MyToys";
import AddToy from "./../pages/AddToy";
import Blogs from "./../pages/Blogs";
import Gallery from "../pages/home/Gallery";
import UpdateToy from "./../pages/updateToy";
import ViewDetails from "./../pages/ViewDetails";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "slider",
        element: <Slider></Slider>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <SignUp></SignUp>,
      },
      {
        path: "alltoys",
        element: (
          <PrivateRoute>
            <AllToys></AllToys>
          </PrivateRoute>
        ),
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://tot-zone-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tot-zone-server.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);

export default router;
