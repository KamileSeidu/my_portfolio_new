import SkillCard from "./SkillCard";
import classes from "./Skills.module.css";
import { skillIcons } from "../../data/skills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1, // Controls the stagger timing
      duration: 0.8,
    },
  },
};

function Skills() {
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true }); // Triggers animation once when in view

  return (
    <div className={classes.skills}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        My Skills
      </motion.h1>

      <motion.ul
        ref={listRef}
        id="new-challenge-images"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animates when in view
      >
        {skillIcons.map((skillIcon) => (
          <SkillCard
            key={skillIcon.title}
            title={skillIcon.title}
            image={skillIcon.image}
          />
        ))}
      </motion.ul>
    </div>
  );
}

export default Skills;
