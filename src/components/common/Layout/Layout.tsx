import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Footer } from "../Footer";
import React from "react";
import "./Layout.css";

export const Layout: React.FC = () => {
  const location = useLocation().pathname;

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <nav className="navMenu">
          <Link
            to="/Rick-and-Morty-Test-Task"
            className={location === "/" ? "active" : ""}
          >
            Characters
          </Link>
          <Link
            to="/Rick-and-Morty-Test-Task/episodes"
            className={location === "/episodes" ? "active" : ""}
          >
            Episodes
          </Link>
          <Link
            to="/Rick-and-Morty-Test-Task/locations"
            className={location === "/locations" ? "active" : ""}
          >
            Locations
          </Link>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
