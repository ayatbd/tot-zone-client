import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/images/logo4.png";
import avatar from "../../assets/images/logo.jpg";
import { AuthContext } from "../../provider/AuthProvider";
import "../../index.css";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <div className="navbar container mx-auto py-3 top-0 z-10">
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
          <Link className="ml-2 flex items-center gap-2 font-bold text-blue-500 text-[28px]">
            <img className="md:w-10 md:h-auto w-10 h-8" src={logo} alt="logo" />
            <p>
              Tot<span className="text-red-500">Zone</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/home" className="text-grey-700 text-sm font-[500]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoys"
                className="text-grey-700 text-sm font-[500]"
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/mytoys"
                  className="text-grey-700 text-sm font-[500]"
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/addtoy"
                  className="text-grey-700 text-sm font-[500]"
                >
                  Add a toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/blogs" className="text-grey-700 text-sm font-[500]">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <span className="text-center hidden md:inline">
            {!user ? (
              <Link
                to="/login"
                className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
              >
                Log In
              </Link>
            ) : (
              <Link
                onClick={handleLogOut}
                className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
              >
                Log Out
              </Link>
            )}
          </span>
          <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {!user ? (
                <img src={avatar} />
              ) : (
                <div>
                  <img src={user?.photoURL} />
                </div>
              )}
            </div>
          </div>
          {/* <img src={logo} /> */}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
