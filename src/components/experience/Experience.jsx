import classes from "./Experience.module.css";
import { EXPERIENCE } from "../../data/experiences";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  const experiences = EXPERIENCE.map((experience, index) => (
    <ExperienceItem key={index} {...experience} />
  ));
  return (
    <section className={classes["experience-section"]}>
      <div className={classes.container}>
        <h1>Experience</h1>
        {experiences}
      </div>
    </section>
  );
}

export default Experience;
