import classes from "./Hero.module.css";
import Header from "../header/Header";
import kamil from "../../assets/Kamil_3.png";
import kamile from "../../assets/Kamil_4.png";
import { socialIcons } from "../../data/social";
import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className={classes["hero-section"]}>
      <Header />
      <div className={`${classes.hero} ${classes.container}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start faded and shifted down
          animate={{ opacity: 1.8, y: 0 }} // Fade in and move up
          transition={{ duration: 1, ease: "easeOut" }}
          className={classes["hero__heading"]}
        >
          <h1 className={classes.type}>
            I&apos;m <span>Kamile Seidu</span>
          </h1>
          <p>
            Frontend Engineer & <br />
            AI Enthusiast
          </p>
          <a href="#contact" className={classes.btn}>
            Hire Me
          </a>
        </motion.div>
        <div className={classes["hero__image"]}>
          {!isLoaded && <div className={classes["skeleton-loader"]}></div>}
          <motion.img
            src={kamil}
            srcSet={`${kamile} 300w, ${kamil} 800w`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            initial={{ opacity: 0, y: -50 }} // Start faded and shifted down
            animate={{ opacity: 1.8, y: 0 }} // Fade in and move up
            transition={{ duration: 1, ease: "easeOut" }}
            alt=""
            className={classes.img}
          />
          <div className={classes["social-icons"]}>
            <span className={classes.span} />
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/seidu-kamile/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    loading="lazy"
                    initial={{ opacity: 0, y: 50 }} // Start faded and shifted down
                    animate={{ opacity: 1.8, y: 0 }} // Fade in and move up
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    src={socialIcons.linkedin}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/kha.mil.777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    loading="lazy"
                    initial={{ opacity: 0, y: 50 }} // Start faded and shifted down
                    animate={{ opacity: 1.8, y: 0 }} // Fade in and move up
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={socialIcons.facebook}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/qr/E7FJX26GEPAFM1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    loading="lazy"
                    initial={{ opacity: 0, y: 50 }} // Start faded and shifted down
                    animate={{ opacity: 1.8, y: 0 }} // Fade in and move up
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    src={socialIcons.whatsapp}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/KamileSeidu?t=lRC8PcJKsFGNEMnkFihb2w&s=35"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    loading="lazy"
                    initial={{ opacity: 0, y: 50 }} // Start faded and shifted down
                    animate={{ opacity: 1.8, y: 0 }} // Fade in and move up
                    transition={{ duration: 1, ease: "easeOut" }}
                    src={socialIcons.x}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
