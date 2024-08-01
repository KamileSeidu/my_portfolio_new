import "./App.css";
import Hero from "../src/components/hero/Hero";
import About from "../src/components/about/About";
import Projects from "./components/projects/Projects";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <section>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonial />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
