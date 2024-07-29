import SkillCard from "./SkillCard";
import classes from "./Skills.module.css";
import { skillIcons } from "../../data/skills";

function Skills() {
  const skillcards = skillIcons.map((skillIcon) => (
    <SkillCard
      key={skillIcon.title}
      title={skillIcon.title}
      image={skillIcon.image}
    />
  ));
  return (
    <div className={classes.skills}>
      <h1>My SKills</h1>
      {<ul>{skillcards}</ul>}
    </div>
  );
}

export default Skills;
