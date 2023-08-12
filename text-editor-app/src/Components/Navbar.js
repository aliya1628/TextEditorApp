import React, { useState } from "react";
import PropTypes from "prop-types";
import ColorPicker from "./ColorPicker";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [currentColor, setCurrentColor] = useState();

  const toggleColor = (event) => {
    console.log(event.target.value, "log color in nav");
    setCurrentColor(event.target.value);
    props.changeDocumentBackgroundColor(event.target.value);
  };
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >              

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/editorSpace">
                  {props.menuName}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`form-check form-switch mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Switch Mode
              </label>
            </div>
            <ColorPicker
              toggleColor={toggleColor}
              currentColor={currentColor}
            />
          </div>
        </nav>
      </div>
    </>
  );
}

// type checking and validations to the field
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  menuName: PropTypes.string,
};
