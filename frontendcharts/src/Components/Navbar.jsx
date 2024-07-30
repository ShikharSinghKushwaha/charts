import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  const chartTypes = [
    {
      name: "Bar",
    },
    {
      name: "Doughnut",
    },
    {
      name: "Pie",
    },
    {
      name: "Line",
    },
  ];
  return (
    <>
      <div className="navlink-container">
        <div className="navlink">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h2 className="logo">ChartsWorld</h2>
          </NavLink>
          <nav className="navigate-links">
            {chartTypes.map((chartName, index) => (
              <div className="links" key={index}>
                <NavLink
                  to={`chartType/${chartName.name}`}
                  className="link-text"
                >
                  {chartName.name}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
