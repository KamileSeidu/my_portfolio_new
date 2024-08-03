import logo from "../../assets/headerIcons/logo.svg";
import menu from "../../assets/headerIcons/menu.svg";
import classes from "./Header.module.css";
import { useState } from "react";

function Header() {
  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  const [isToggle, setIsToggle] = useState(false);

  return (
    <section className={classes.header}>
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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1qzbFWIpiuhMQBQ3bU0Q8pfQ8L34Y-9vJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={classes.btn}
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
