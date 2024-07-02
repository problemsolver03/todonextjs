"use client";

import { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuToggler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="bg-slate-200 border-gray-200 border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-light whitespace-nowrap ">
            TaskManager
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button
            type="button"
            className="flex text-sm  border rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={menuToggler}
          >
            <span className="sr-only">Open user menu</span>
            <p className="   px-3 py-1.5 capitalize">Welcome! {props.name}</p>
          </button>
          {/* Dropdown menu */}
          <div
            className={`z-50 ${
              toggleMenu ? "visible" : "hidden"
            } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow "
            id="user-dropdown absolute top-5 right-0`}
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 ">Bonnie Green</span>
              <span className="block text-sm  text-gray-500 truncate ">
                {props.email}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
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
