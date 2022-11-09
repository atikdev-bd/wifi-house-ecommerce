import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import userIcon from "../../../Assets/img/icons8-user-64.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        toast.success("logout successfully");
      })
      .catch((error) => {});
  };
  return (
    <div className="navbar bg-stone-600">
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          WIFI House
        </Link>
      </div>
      <div className="link-div mr-28 text-xl font-bold hidden lg:block">
        {user?.uid ? (
          <>
            {" "}
            <div className="flex">
              <div>
                <Link to="/home" className="mr-3">
                  Home
                </Link>
                <Link to="/addService" className="mr-3 hover:text-cyan-400">
                  Add Service
                </Link>
                <Link className="mr-3 hover:text-blue-900">Blogs</Link>
                <Link to="/review" className="mr-3 hover:text-yellow-700">
                  My Review
                </Link>
              </div>
              <div className="ml-4 mt-1">
                <FaSignOutAlt
                  onClick={handleLogOut}
                  className="hover:text-stone-400"
                ></FaSignOutAlt>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/home" className="mr-3">
              Home
            </Link>
            <Link to="/addService" className="mr-3 hover:text-cyan-400">
              Add Service
            </Link>
            <Link className="mr-3 hover:text-blue-900">Blogs</Link>
            <Link to="/review" className="mr-3 hover:text-yellow-700">
              My Review
            </Link>
            <Link to="/login" className="mr-3 hover:text-sky-700">
              Login
            </Link>
            <Link to="register" className="mr-3 hover:text-green-500">
              Register
            </Link>
          </>
        )}
      </div>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src={userIcon} alt="" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <div className="lg:hidden block">
              {user?.uid ? (
                <>
                  {" "}
                  <li>
                    {" "}
                    <Link to="/addService" className="mr-3 hover:text-cyan-400">
                      Add Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="mr-3">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-3 hover:text-blue-900">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/review" className="mr-3 hover:text-yellow-700">
                      My Review
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    {" "}
                    <Link to="/home" className="mr-3">
                      Home
                    </Link>
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
                  <li>
                    {" "}
                    <Link to="/addService" className="mr-3 hover:text-cyan-400">
                      Add Service
                    </Link>
                  </li>
                  <li>
                    <Link className="mr-3 hover:text-blue-900">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/review" className="mr-3 hover:text-yellow-700">
                      My Review
                    </Link>
                  </li>
                </>
              )}
            </div>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
          </ul>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Header;
