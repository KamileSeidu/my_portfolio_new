import logo from "../../assets/headerIcons/logo.svg";
import menu from "../../assets/headerIcons/menu.svg";
import classes from "./Header.module.css";
import { useState } from "react";

function Header() {
  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  const [isToggle, setIsToggle] = useState(null);

  return (
    <nav>
      <img src={logo} alt="logo" className={classes.img} />
      <img
        src={menu}
        alt="menu icon"
        className={classes.menu}
        onClick={toggleMenu}
      />
      <ul className={`${classes["nav-list"]} ${isToggle && classes.open}`}>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="" className={classes.btn}>
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
