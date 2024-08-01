import classes from "./Contact.module.css";
import { ICONS } from "../../data/social";
import SocialIcons from "./social-icons/social-icons";
import { contactIcons } from "../../data/contact";

function Contact() {
  const socials = ICONS.map((data, index) => (
    <SocialIcons key={index} icon={data.icon} />
  ));

  return (
    <section className={classes.contact}>
      <div className={classes["contact-header"]}>
        <span className={classes["top-left-line"]} />
        <h1>Contact Me</h1>
        <span className={classes["top-right-line"]} />
      </div>
      <div className={classes["contact-details"]}>
        <p className={classes.email}>
          <img src={contactIcons.email} alt="" />
          seidukamile@gmail.com
        </p>
        <p className={classes.phone}>
          <img src={contactIcons.phone} alt="" />
          +233 557 148 772
        </p>
        <p className={classes.location}>
          <img src={contactIcons.location} alt="" />
          Accra, Ghana
        </p>
      </div>
      <div>
        <div className={classes["contact-icons"]}>
          <span className={classes["bottom-left-line"]} />
          <ul>{socials}</ul>
          <span className={classes["bottom-right-line"]} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
