import classes from "./Hero.module.css";
import Header from "../header/Header";
import kamil from "../../assets/Kamil_3.png";
import { socialIcons } from "../../data/social";

function Hero() {
  const { facebook, linkedin, x, whatsapp } = socialIcons;

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
              <li>{linkedin}</li>
              <li>{x}</li>
              <li>{facebook}</li>
              <li>{whatsapp}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
