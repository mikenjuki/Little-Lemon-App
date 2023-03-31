import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { logo, open, close } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex w-full justify-between items-center py-6">
      <Link to="/" className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </Link>

      {/* Desktop */}
      <ul className=" list-none flex-1 hidden justify-end items-center sm:flex">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-Karla font-normal cursor-pointer text-[1rem]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
             text-black`}
            >
              <Link to={nav.linkRoute}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>

      {/* hamburger menu and icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : open}
          alt="hamburger menu icon"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${toggle ? "flex" : "hidden"}
             p-6 bg-green-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => {
            return (
              <li
                key={nav.id}
                className={`font-Karla font-normal cursor-pointer text-[1rem]
            ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
             text-white`}
              >
                <Link to={nav.linkRoute}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>

    // <nav className="nav">
    //   <Link to="/" className="logo">
    //     Logo
    //   </Link>
    //   <ul>
    //     <CustomLink to="/">Home</CustomLink>
    //     <CustomLink to="/about">About Us</CustomLink>
    //     <CustomLink to="/menu">Menu</CustomLink>
    //     <CustomLink to="/reservations">Reservations</CustomLink>
    //     <CustomLink to="/order-online">Order Online</CustomLink>
    //     <CustomLink to="/login">Login</CustomLink>
    //   </ul>
    // </nav>
  );
};

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

export default Navbar;
