import React from "react";
import { NavLink } from "react-router-dom";
import { pageLinks } from "../Navbar/Navbar.data";

const Sidebar = ({ showSidebar, setShowSidebar, navRef }) => {
  const sidebarModalRef = React.useRef(null);
  // useCloseOnClickOutside(sidebarModalRef, setShowSidebar);
  return (
    <aside className={`sidebar-modal ${showSidebar ? "open" : ""}`}>
      <div
        ref={sidebarModalRef}
        className={`sidebar hide ${showSidebar ? "open" : ""}`}
      >
        <ul className="sidebar-links">
          {pageLinks.map((singleLink) => (
            <li>
              <NavLink
                onClick={() => setShowSidebar(!showSidebar)}
                key={singleLink?.id}
                to={`${singleLink?.route}`}
                className="link"
              >
                <div
                  style={{ display: "inline-block" }}
                  className="link border-none"
                >
                  {singleLink?.page}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export { Sidebar };
