import Skills from "../skills/Skills";
import classes from "./About.module.css";

function About() {
  return (
    <section id="about" className={`${classes["about-section"]} `}>
      <div className={classes.container}>
        <h1 className={classes.heading}>About</h1>
        <div className={classes["about-paragraph"]}>
          <span className={classes.span} />
          <p>
            As a dedicated Frontend Engineer with 3 years of experience, I
            specialize in crafting seamless, pixel-perfect user interfaces. My
            expertise spans across JavaScript, ReactJS, NextJS, React Native,
            HTML5, CSS3, and Git, enabling me to deliver high-quality,
            responsive web applications that enhance user experience. My
            professional journey has been marked by a commitment to excellence
            and continuous learning. During my time as an intern at Nonihub, I
            was honored with the Outstanding Intern Award, a testament to my
            dedication and skill in frontend development. Key highlights of my
            career include: Creating pixel-perfect frontend designs that align
            with modern web standards and user expectations. Leveraging the
            latest frontend technologies to build dynamic and engaging web
            applications.Collaborating effectively with cross-functional teams
            to deliver projects on time and within scope. I am passionate about
            staying updated with the latest industry trends and continuously
            honing my skills. Whether it's through participating in coding
            challenges, contributing to open-source projects, or exploring new
            frameworks and libraries, I am always eager to expand my knowledge
            and expertise. I am excited to connect with fellow professionals and
            explore opportunities where I can contribute to innovative projects
            and grow alongside a talented team. Feel free to reach out if you'd
            like to discuss frontend development, technology, or potential
            collaborations.
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
