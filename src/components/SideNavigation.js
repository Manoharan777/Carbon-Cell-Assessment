import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {LOGO} from "../utility/constants"
const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        className="block lg:hidden fixed top-0 z-10 w-10 h-10 bg-orange-400 text-white"
        onClick={toggleMenu}
      >
        {isOpen ? "X" : "☰"}
      </button>

      {/* Side navigation */}
      <nav
        className={`bg-orange-400 w-64 h-full text-white fixed lg:relative lg:h-auto lg:block ${
          isOpen ? "left-0" : "-left-full lg:left-0"
        } transition-all duration-300 ease-in-out`}
        style={{ zIndex: 9 }}
      >
        <img src={LOGO} className="w-24 m-4 mx-auto" />
        <ul className="p-4 m-5 mt-36 text-2xl">
          <li className="py-2">
            <NavLink to="/" exact="true">
              <span
                className={
                  location.pathname === "/"
                    ? "text-[#226423]  m-2 p-2 font-bold text-2xl"
                    : ""
                }
              >
                HOME
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/graph" exact="true">
              <span
                className={
                  location.pathname === "/graph"
                    ? "text-[#226423]  m-2 p-2 font-bold text-2xl"
                    : ""
                }
              >
                GRAPH
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/card" exact="true">
              <span
                className={
                  location.pathname === "/card"
                    ? "text-[#226423]  m-2 p-2 font-bold text-2xl"
                    : ""
                }
              >
                CARDS
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/wallet" exact="true">
              <span
                className={
                  location.pathname === "/wallet"
                    ? "text-[#226423]  m-2 p-2 font-bold text-2xl"
                    : ""
                }
              >
                WALLET
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideNavigation;
