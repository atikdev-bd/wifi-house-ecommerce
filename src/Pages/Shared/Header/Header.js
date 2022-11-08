import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">WIFI House</Link>
      </div>
      <div className="link-div mr-28 text-xl font-bold hidden lg:block">
        <Link to="/home" className="mr-3">
          Home
        </Link>
        <Link to='/addService' className="mr-3 hover:text-cyan-400">Add Service</Link>
        <Link className="mr-3 hover:text-blue-900">Blogs</Link>
        <Link className="mr-3 hover:text-yellow-700">My Review</Link>
        <Link to="/login" className="mr-3 hover:text-sky-700">
          Login
        </Link>
        <Link to="register" className="mr-3 hover:text-green-500">
          Register
        </Link>
      </div>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <div className="lg:hidden block">
              <li>
                {" "}
                <Link className="mr-3 hover:text-cyan-400">Add Service</Link>
              </li>
              <li>
                <Link className="mr-3 hover:text-blue-900">Blogs</Link>
              </li>
              <li>
                <Link className="mr-3 hover:text-yellow-700">My Review</Link>
              </li>
              <li>
                {" "}
                <Link to="register" className="mr-3 hover:text-green-500">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="mr-3 hover:text-sky-700">
                  Login
                </Link>
              </li>
            </div>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
