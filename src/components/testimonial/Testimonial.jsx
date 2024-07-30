import classes from "./Testimonial.module.css";
import salis from "../../assets/Salis.png";

function Testimonial() {
  return (
    <section className={classes.testimonial}>
      <div className={classes["testimonial-left"]}>
        <h1>Testimonial</h1>
        <div className={classes["paragraph-design"]}>
          <span className={classes["long-line"]} />
          <div className={classes["paragraph-design__text"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              ratione reiciendis quia dolorem ad, facilis, animi consequatur
              dolores sequi numquam eos accusamus ab explicabo maxime voluptate
              magnam nam harum nihil?
            </p>
            <h2>Abubakari Mohammed Salis</h2>
            <div className={classes["title"]}>
              <span className={classes["small-line"]} />
              <h3>CEO, Said Foundation Ghana</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["testimonial-image"]}>
        <span />
        <img src={salis} alt="" />
      </div>
    </section>
  );
}

export default Testimonial;
