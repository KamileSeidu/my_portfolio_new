import classes from "./Experience.module.css";

function ExperienceItem({ title, company, year, activities }) {
  return (
    <div className={classes["experience-card"]}>
      <div className={classes["experience-card__design"]}>
        <span className={classes["span-badge"]}>{year}</span>
        <div className={classes["span-badge__logo"]}>
          <span className={classes["span-circle"]} />
          <span className={classes["span-line"]} />
        </div>
      </div>
      <div className={classes["experience-info"]}>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <ul>
          <li>{activities.one}</li>
          <li>{activities.two}</li>
          <li>{activities.three}</li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
