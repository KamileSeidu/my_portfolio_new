import mabubaplus from "../assets/projectImg/MabubaPlus.png";
import reactess from "../assets/projectImg/ReactEssentials.png";
import techcare from "../assets/projectImg/TechCare.png";
import redux from "../assets/projectImg/ReduxCart.png";
import saidfoundation from "../assets/projectImg/SaidFoundation.png";
import foodApp from "../assets/projectImg/foodApp.png";

export const PROJECTS = {
  react: [
    {
      img: techcare,
      title: "Tech Care",
      description:
        "A hospital dashboard for managing patients diagnosis history",
      link: "https://exquisite-cascaron-186599.netlify.app/",
    },
    {
      img: foodApp,
      title: "React Food",
      description:
        "A react app for ordering food. Inc. Context API for cart, custom hook for sending http request.",
      link: "https://reactfoodapp24.netlify.app/",
    },

    {
      img: redux,
      title: "Redux Cart",
      description: "A cart implimentation using react redux",
      link: " https://reduxcart-66a51.web.app/",
    },
    {
      img: reactess,
      title: "React Essentials",
      description: "A blogpage showing the essential features of react. ",
      link: "https://react-essentials-348e1.web.app/",
    },
  ],
  wordpress: [
    {
      img: mabubaplus,
      title: "Mabuba Plus",
      description:
        "A Business consultacy website for people looking to take their business to the nest level",
      link: "https://mabubapluslimited.com/",
    },
    {
      img: saidfoundation,
      title: "SAID foundation",
      description: "A foundation committed to bringing change in the society",
      link: "https://saidfoundationghana.com/",
    },
  ],
};
