// import techcare from "../assets/projectimg/TechCare.png";
import classes from "./ProjectCard.module.css";

export default function ProjectCard({ title, img, description, link }) {
  return (
    <div className={classes.card}>
      <a href={link} target="_blank">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={classes["hover-text"]}>Click to see more</div>
      </a>
    </div>
  );
}
