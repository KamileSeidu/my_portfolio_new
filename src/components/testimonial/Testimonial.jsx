import classes from "./Testimonial.module.css";
import salis from "../../assets/Salis.png";

function Testimonial() {
  return (
    <section className={classes.testimonial}>
      <div className={classes.container}>
        <div className={classes["testimonial-left"]}>
          <h1>Testimonial</h1>
          <div className={classes["paragraph-design"]}>
            <span className={classes["long-line"]} />
            <div className={classes["paragraph-design__text"]}>
              <p>
                I had the pleasure of working with Kamile Seidu on developing a
                pixel-perfect website for my Foundation, and I couldn't be more
                impressed with the results. Kamile demonstrated an exceptional
                skill and attention to detail throughout the process. From the
                initial consultation to the final delivery, Kamile was
                professional, responsive, and committed to ensuring that every
                aspect of the website met the highest standards. What truly
                stood out was Kamile’s ability to deliver the project on time
                without compromising on quality. I highly recommend Kamile to
                anyone seeking a talented frontend engineer who can turn complex
                requirements into beautifully crafted digital experiences.
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
      </div>
    </section>
  );
}

export default Testimonial;
