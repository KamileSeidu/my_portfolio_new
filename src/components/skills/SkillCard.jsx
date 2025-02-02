import classes from "./SkillCard.module.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

function SkillCard({ title, image }) {
  return (
    <motion.li
      variants={cardVariants} // Inherits animation from parent
      transition={{ type: "spring", stiffness: 80 }}
      className={classes["skill-card"]}
    >
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </motion.li>
  );
}

export default SkillCard;
