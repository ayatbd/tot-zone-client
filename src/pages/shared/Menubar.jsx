import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/images/logo4.png";
import avatar from "../../assets/images/logo.jpg";
import { AuthContext } from "../../provider/AuthProvider";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-gradient-to-r from-[#3057D3] to-[#14C196] py-4 top-0 z-10">
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
          </ul>
        </div>
        <Link className="ml-2 flex items-center gap-2 font-bold text-cyan-600 text-[28px]">
          <img className="w-16 h-12" src={logo} alt="logo" />
          Tot<span className="text-red-600">Zone</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home" className="text-white text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/alltoys" className="text-white text-xl">
              All Toys
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/mytoys" className="text-white text-xl">
                My Toys
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/addtoy" className="text-white text-xl">
                Add a toy
              </Link>
            </li>
          )}
          <li>
            <Link to="/blogs" className="text-white text-xl">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {!user ? (
          <Link
            to="/login"
            className="relative items-center justify-start inline-block px-7 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              Log In
            </span>
          </Link>
        ) : (
          <Link
            onClick={handleLogOut}
            className="relative items-center justify-start inline-block px-7 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              Log Out
            </span>
          </Link>
        )}
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
  );
};

export default Menubar;
