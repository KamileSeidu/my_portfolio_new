import classes from "./social-icons.module.css";

function SocialIcons({ icon }) {
  return (
    <li className={classes.list}>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="" />
      </a>
    </li>
  );
}

export default SocialIcons;
