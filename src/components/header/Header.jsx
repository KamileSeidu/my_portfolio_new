import logo from "../../assets/headerIcons/logo.svg";
import menu from "../../assets/headerIcons/menu.svg";
import classes from "./Header.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Track screen size

  const toggleMenu = () => setIsToggle((prev) => !prev);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={classes.header}>
      <nav>
        <img src={logo} alt="logo" className={classes.img} />
        {isMobile && ( // Show menu icon only on mobile
          <motion.img
            src={menu}
            alt="menu icon"
            className={classes.menu}
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          />
        )}
        <AnimatePresence initial={false}>
          {(isToggle || !isMobile) && ( // Always show navbar on desktop
            <motion.ul
              className={`${classes["nav-list"]} ${
                isToggle ? classes.open : ""
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
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
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </section>
  );
}

export default Header;
