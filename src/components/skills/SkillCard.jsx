import classes from "./SkillCard.module.css";

function SkillCard({ title, image }) {
  return (
    <li className={classes["skill-card"]}>
      <img src={image} alt="" />
      <h2>{title}</h2>
    </li>
  );
}

export default SkillCard;
