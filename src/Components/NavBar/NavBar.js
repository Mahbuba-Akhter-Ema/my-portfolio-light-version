import React from "react";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = (
    <>
      <li className="text-black font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-black font-semibold">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="text-black font-semibold">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="text-black font-semibold">
        <a href="https://mahbuba-akhter-ema.netlify.app/"><FaMoon/></a>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 ">
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
              {navItems}
            </ul>
          </div>
          <Link className=" normal-case text-2xl font-bold text-black">
            Mahbuba Akhter
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img
                label="Mahbuba"
                alt=""
                src="https://i.ibb.co/KxTcszB/mahbuba-s-logo.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;