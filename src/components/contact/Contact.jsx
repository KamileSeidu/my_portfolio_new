import classes from "./Contact.module.css";
import { ICONS } from "../../data/social";
import SocialIcons from "./social-icons/social-icons";
import { contactIcons } from "../../data/contact";
import { motion } from "framer-motion";

function Contact() {
  const socials = ICONS.map((data, index) => (
    <SocialIcons key={index} {...data} />
  ));

  return (
    <section id="contact" className={classes.contact}>
      <motion.div className={classes["contact-header"]}>
        <span className={classes["top-left-line"]} />
        <h1>Contact Me</h1>
        <span className={classes["top-right-line"]} />
      </motion.div>
      <div className={classes["contact-details"]}>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          className={classes.email}
        >
          <img src={contactIcons.email} alt="" />
          seidukamile@gmail.com
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
          className={classes.phone}
        >
          <img src={contactIcons.phone} alt="" />
          +233 557 148 772
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          className={classes.location}
        >
          <img src={contactIcons.location} alt="" />
          Accra, Ghana
        </motion.p>
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
