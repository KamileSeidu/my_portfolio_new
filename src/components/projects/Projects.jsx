import ProjectCard from "./ProjectCard";
import TabButton from "./TabButton";
import classes from "./Projects.module.css";
import { PROJECTS } from "../../data/projects";
import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState("react");

  const handleSelect = (selected) => {
    setSelected(selected);
  };

  const selectedProject = PROJECTS[selected];

  const selectedTabProjects = selectedProject.map((project) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      image={project.img}
      description={project.description}
    />
  ));

  return (
    <div className={classes.projects}>
      <h1>My Projects</h1>
      <div className={`${classes["tab-button"]}`}>
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
      </div>
      <main>{selectedTabProjects}</main>
    </div>
  );
}
