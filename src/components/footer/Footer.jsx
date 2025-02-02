import classes from "./Footer.module.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <section className={`${classes.footer} ${classes["typewriter"]}`}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        THANK YOU FOR SCROLLING
      </motion.h1>
    </section>
  );
}

export default Footer;
