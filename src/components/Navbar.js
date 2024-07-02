"use client";

import { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { BiCheckSquare } from "react-icons/bi";

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuToggler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="bg-slate-900 border-slate-950 border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/dashboard"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <BiCheckSquare size={"40px"} color="#fff" />
          <span className=" text-2xl font-semobold  whitespace-nowrap text-slate-300">
            TaskManager
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button
            type="button"
            className="flex text-sm bg-slate-700 text-white border-2 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 border-slate-400"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={menuToggler}
          >
            <span className="sr-only">Open user menu</span>
            <p className="px-3 py-1.5 capitalize">
              {props.name.substring(0, 1)}
            </p>
          </button>
          {/* Dropdown menu */}
          <div
            className={`z-50 ${
              toggleMenu ? "visible" : "hidden"
            } my-4 text-base list-none bg-slate-800 divide-y divide-gray-800 rounded-lg shadow "
            id="user-dropdown absolute top-5 right-0 text-white`}
          >
            <div className="px-4 py-3">
              <span className="block text-sm ">{props.name}</span>
              <span className="block text-sm   truncate ">{props.email}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm  hover:bg-gray-900   "
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm  hover:bg-gray-900   "
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;

const mapStateToProps = (state) => {
  return state.user.value;
};

export default connect(mapStateToProps, {})(Navbar);
