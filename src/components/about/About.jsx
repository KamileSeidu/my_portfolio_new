import Skills from "../skills/Skills";
import classes from "./About.module.css";

function About() {
  return (
    <section className={classes["about-section"]}>
      <h1 className={classes.heading}>About</h1>
      <div className={classes["about-paragraph"]}>
        <span className={classes.span} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima
          pariatur quidem soluta sit quis eos ullam? Quod obcaecati odit,
          facilis quasi sit nam a id eos dolor reprehenderit, aperiam, eius
          soluta quidem rem. Repudiandae vel nihil repellendus laudantium
          praesentium!
        </p>
      </div>
      <Skills />
    </section>
  );
}

export default About;
