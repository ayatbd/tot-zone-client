import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/images/logo4.png";
// import avatar from "../../assets/images/logo.jpg";
import { AuthContext } from "../../provider/AuthProvider";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import "../../index.css";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div data-aos="fade-down" className=" ">
      <div className="border-b-2 border-gray-100 hidden md:block">
        <div className="flex justify-between items-center py-3 container mx-auto">
          <ul className="flex justify-center items-center gap-5">
            <li className="text-sm">About Us</li>
            <li className="text-sm">Order Tracking</li>
            <li className="text-sm">Contact Us</li>
            <li className="text-sm">FAQs</li>
          </ul>
          <ul className="flex items-center justify-center gap-3">
            <li className="flex items-center justify-center gap-1 text-sm font-semibold">
              English <MdKeyboardArrowDown />
            </li>
            <li className="flex items-center justify-center gap-1 text-sm font-semibold">
              USD <MdKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar container px-0 mx-auto py-3 top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>
              {user && (
                <li>
                  <Link to="/mytoys">My Toys</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to="/addtoy">Add a toy</Link>
                </li>
              )}
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>

              {!user ? (
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              ) : (
                <li>
                  <Link onClick={handleLogOut}>Log Out</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="hidden md:inline">
            <Link className=" flex items-center gap-2 font-bold text-blue-500 text-[28px]">
              <img
                className="md:w-10 md:h-auto w-10 h-8"
                src={logo}
                alt="logo"
              />
              <p>
                Tot<span className="text-red-500">Zone</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="navbar-center md:hidden">
          <Link className=" flex items-center gap-2 font-bold text-blue-500 text-[28px]">
            <img className="md:w-10 md:h-auto w-10 h-8" src={logo} alt="logo" />
            <p>
              Tot<span className="text-red-500">Zone</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/home" className="text-grey-700 text-sm font-[700]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoys"
                className="text-grey-700 text-sm font-[700]"
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/mytoys"
                  className="text-grey-700 text-sm font-[700]"
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/addtoy"
                  className="text-grey-700 text-sm font-[700]"
                >
                  Add a toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/blogs" className="text-grey-700 text-sm font-[700]">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className="text-grey-700 text-sm font-[700]"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="text-grey-700 text-sm font-[700]"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden navbar-end space-x-5 mr-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar">
              <span className="menu-icon p-2 bg-gray-100 rounded-full">
                <AiOutlineUser size="20" />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                {!user ? (
                  <Link to="/login">Log In</Link>
                ) : (
                  <Link onClick={handleLogOut}>Log Out</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end md:inline-flex hidden space-x-5">
          <div className="flex justify-center items-center gap-3">
            <span className="p-2 bg-gray-100 rounded-full">
              <span>
                <MdOutlineAddIcCall size="20" />
              </span>
            </span>
            <span>
              <p className="text-sm font-bold">Need Help?</p>
              <p className="text-sm font-bold">+88017******</p>
            </span>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar">
              <span className="menu-icon p-2 bg-gray-100 rounded-full">
                <AiOutlineUser size="20" />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                {!user ? (
                  <Link to="/login">Log In</Link>
                ) : (
                  <Link onClick={handleLogOut}>Log Out</Link>
                )}
              </li>
            </ul>
          </div>

          <span className="menu-icon p-2 bg-gray-100 rounded-full cursor-pointer">
            <CiHeart size="20" />
          </span>
          <span className="menu-icon p-2 bg-gray-100 rounded-full">
            <Link to="/cart">
              <AiOutlineShoppingCart size="20" />
            </Link>
          </span>
          {/* <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {!user ? (
                <img src={avatar} />
              ) : (
                <div>
                  <img src={user?.photoURL} />
                </div>
              )}
            </div>
          </div> */}
          {/* <img src={logo} /> */}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
