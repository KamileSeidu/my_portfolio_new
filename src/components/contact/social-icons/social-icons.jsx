import classes from "./social-icons.module.css";

function SocialIcons({ icon }) {
  return (
    <li className={classes.list}>
      <a href="">
        <img src={icon} alt="" />
      </a>
    </li>
  );
}

export default SocialIcons;
