import { useState } from "react";
import { NavLink } from "react-router-dom";
import iconHamburger from "../../images/icon-hamburger.svg";
import logoIcon from "../../images/logo.svg";
import closeButton from "../../images/icon-close.svg";
import "./NavBar.scss";
const NavBar = () => {
  const [showNav, setNav] = useState<boolean>(false);
  return (
    <nav id="nav">
      <ul className={showNav ? "" : "show_nav"} id="nav_links">
        <img
          src={closeButton}
          alt="close_menu"
          onClick={() => setNav(!showNav)}
        />
        <NavLink to="/decorate-website/" end>
          <span>home</span>
        </NavLink>
        <NavLink to="/decorate-website/shop">
          <span>shop</span>
        </NavLink>
        <NavLink to="/decorate-website/about">
          <span>about</span>
        </NavLink>
        <NavLink to="/decorate-website/contact">
          <span>contact</span>
        </NavLink>
      </ul>
      <img src={iconHamburger} alt="Menu" onClick={() => setNav(!showNav)} />
      <img src={logoIcon} alt="Logo" />
    </nav>
  );
};

export default NavBar;
