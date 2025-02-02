import ProjectCard from "./ProjectCard";
import TabButton from "./TabButton";
import classes from "./Projects.module.css";
import { PROJECTS } from "../../data/projects";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const [selected, setSelected] = useState("react");

  const handleSelect = (selected) => {
    setSelected(selected);
  };

  const selectedProject = PROJECTS[selected];

  const selectedTabProjects = selectedProject.map((project) => (
    <ProjectCard key={project.title} {...project} />
  ));

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

  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true }); // Triggers animation once when in view

  return (
    <div id="projects" className={classes.projects}>
      <div className={classes.container}>
        <h1>My Projects</h1>
        <motion.div className={`${classes["tab-button"]}`}>
          <TabButton
            isSelected={selected === "react"}
            onSelect={() => handleSelect("react")}
          >
            React JS
          </TabButton>
          <TabButton
            isSelected={selected === "wordpress"}
            onSelect={() => handleSelect("wordpress")}
          >
            Wordpress
          </TabButton>
        </motion.div>
        <motion.main
          ref={listRef}
          id="projects-list"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          layout
        >
          {selectedTabProjects}
        </motion.main>
      </div>
    </div>
  );
}
