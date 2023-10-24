import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Aprendex
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Cursos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Cursos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Meus Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favoritos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Favoritos
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Suporte
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--primary2">Cadastrar</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
