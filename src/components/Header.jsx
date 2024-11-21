import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/start-learning">Start Learning</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      {/* <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li> */}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="ml-2 font-semibold">
                {user ? " Welcome " + user.displayName : ""}
              </li>
              {links}
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-xl pr-2" to="/">
            Lingo Bingo
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mt-2 mx-5 font-semibold flex items-center">
              {user ? " Welcome " + user.displayName : ""}
            </li>
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="flex items-center gap-3">
              <NavLink to={"/myprofile"} className="flex">
                My Profile
              </NavLink>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />{" "}
              <button className="btn btn-neutral rounded-xl" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link className="btn btn-neutral" to="/auth/login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
