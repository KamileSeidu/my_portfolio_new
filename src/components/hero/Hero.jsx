import classes from "./Hero.module.css";
import Header from "../header/Header";
import kamil from "../../assets/Kamil_3.png";
import { socialIcons } from "../../data/social";

function Hero() {
  return (
    <section>
      <Header />
      <div className={classes.hero}>
        <div className={classes["hero__heading"]}>
          <h1>
            I'm <span>Kamile Seidu</span>
          </h1>
          <p>Frontend Web Developer & AI Enthusiast</p>
          <button className={classes.btn}>Hire Me</button>
        </div>
        <div className={classes["hero__image"]}>
          <img src={kamil} alt="" className={classes.img} />
          <div className={classes["social-icons"]}>
            <span className={classes.span} />
            <ul>
              <li>
                <a href="">
                  <img src={socialIcons.linkedin} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={socialIcons.facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={socialIcons.whatsapp} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={socialIcons.x} alt="" />
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
