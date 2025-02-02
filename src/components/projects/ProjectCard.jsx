// import techcare from "../assets/projectimg/TechCare.png";
import classes from "./ProjectCard.module.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function ProjectCard({ title, img, description, link }) {
  return (
    <motion.div
      variants={cardVariants} // Inherits animation from parent
      transition={{ type: "spring", stiffness: 80 }}
      className={classes.card}
    >
      <a href={link} target="_blank">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={classes["hover-text"]}>Click to see more</div>
      </a>
    </motion.div>
  );
}
