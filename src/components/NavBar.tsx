import logo from "/logo.svg";
import hamburger from "/assets/shared/icon-hamburger.svg";
import close from "/assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);
  return (
    <div className="font-subHeading absolute z-50 flex w-full items-start justify-between p-6 md:items-center md:pr-0 md:pl-10 lg:pt-10 lg:pr-0 lg:pl-14 lg:text-xs">
      <NavLink to="/">
        {" "}
        <img src={logo} alt="Logo" className="h-10 w-10 md:h-12 md:w-12" />
      </NavLink>
      <img
        onClick={toggleMenu}
        src={isOpen ? close : hamburger}
        alt="Hamburger Menu"
        className="absolute right-0 z-40 mr-6 h-6 w-6 cursor-pointer md:hidden"
      />
      <nav
        className={clsx(
          "nav-links font-subHeading fixed top-0 right-0 flex h-full w-2/3 flex-col gap-6 bg-gray-900 pt-[118px] pl-8 tracking-wider text-white uppercase md:relative md:-mt-6 md:flex md:w-auto md:flex-row md:gap-9 md:bg-transparent md:px-10 md:pt-10 lg:mt-0 lg:px-28 lg:pt-10",
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          "transition-transform duration-300 ease-in-out",
        )}
      >
        {["/", "/destination", "/crew", "/technology"].map((path, index) => (
          <NavLink
            key={path}
            to={path}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              clsx(
                "border-r-3 font-normal duration-200 ease-in-out hover:border-b-[#979797] md:border-r-0 md:border-b-3 md:pb-[37px] md:text-[14px] md:tracking-widest",
                isActive ? "border-white" : "border-transparent",
              )
            }
          >
            <span className="mr-3 font-bold md:hidden lg:inline">0{index}</span>
            {path.replace("/", "") || "Home"}
          </NavLink>
        ))}
      </nav>

      {/* <div
        className={clsx(
          "nav-links font-subHeading hidden tracking-wider text-white uppercase md:flex md:gap-9 md:px-10 md:pt-10 lg:flex lg:px-28 lg:pt-10",
          isOpen
            ? "flex h-full w-2/3 translate-x-0 flex-col opacity-100 md:w-auto"
            : "",
        )}
      >
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `hover:border-primary-500 pb-10 font-normal duration-200 ease-in-out hover:border-b-3 lg:mr-6 lg:flex ${
              isActive
                ? "border-b-3 border-white"
                : "border-b-3 border-transparent"
            }`
          }
        >
          <span className="mr-3 font-bold md:hidden lg:block">00</span> Home
        </NavLink>
        <NavLink
          to="/destination"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `hover:border-primary-500 pb-10 font-normal duration-200 ease-in-out hover:border-b-3 lg:mr-6 lg:flex ${
              isActive
                ? "border-b-3 border-white"
                : "border-b-3 border-transparent"
            }`
          }
        >
          <span className="mr-3 font-bold md:hidden lg:block">01</span>
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `hover:border-primary-500 pb-10 font-normal duration-200 ease-in-out hover:border-b-3 lg:mr-6 lg:flex ${
              isActive
                ? "border-b-3 border-white"
                : "border-b-3 border-transparent"
            }`
          }
        >
          <span className="mr-3 font-bold md:hidden lg:block">02</span> Crew
        </NavLink>
        <NavLink
          to="/technology"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `hover:border-primary-500 pb-10 font-normal duration-200 ease-in-out hover:border-b-3 lg:mr-6 lg:flex ${
              isActive
                ? "border-b-3 border-white"
                : "border-b-3 border-transparent"
            }`
          }
        >
          <span className="mr-3 font-bold md:hidden lg:block">03</span>{" "}
          Technology
        </NavLink>
      </div> */}
    </div>
  );
};

export default NavBar;
