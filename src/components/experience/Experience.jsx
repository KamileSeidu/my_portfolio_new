import classes from "./Experience.module.css";

function Experience() {
  return (
    <section className={classes["experience-section"]}>
      <h1>Experience</h1>
      <div className={classes["experience-card"]}>
        <div className={classes["experience-card__design"]}>
          <span className={classes["span-badge"]}>2021</span>
          <div className={classes["span-badge__logo"]}>
            <span className={classes["span-circle"]} />
            <span className={classes["span-line"]} />
          </div>
        </div>
        <div className={classes["experience-info"]}>
          <h2>Senior Python Developer</h2>
          <h3>Scottech, Toledo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et
            nulla laboriosam aliquam mollitia dolore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Exercitationem, enim!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
