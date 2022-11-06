import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Ds from "../../assets/DS.png";
import { Sidebar } from "../index.components";
import { pageLinks } from "./Navbar.data";
export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navRef = useRef(null);

  return (
    <header>
      <nav ref={navRef} className="navbar">
        <div className="logo-container flex-center">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            type="submit"
            id="btnHamburger"
            href="#"
            aria-label="menu-icon"
            className={`nav-toggle hide-for-desktop m-right-small border-none ${
              showSidebar ? "open" : ""
            }`}
          >
            <span />
            <span />
            <span />
          </button>
          <h3 className="flex-center">
            <Link to="/" className="flex-center">
              <img className="nav-logo" src={Ds} alt="" />
              <span className="logo-text">Digipplus</span>
            </Link>
          </h3>
        </div>
        <div className="navbar-links-container">
          <ul className="navbar-links">
            {pageLinks.map((link) => (
              <NavLink key={link.id} to={link.route}>
                <li className="navbar-link">{link.page}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-profile">ID</div>
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          navRef={navRef}
        />
      </nav>
    </header>
  );
};
