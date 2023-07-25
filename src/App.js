import React from "react";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/about/AboutPage";
import TechSkills from "./pages/techSkills/TechSkills";
import Projects from "./pages/projcts/Projects";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "react-scroll-to-top"; //scroll to top
import { useTheme } from "./context/ThemContext";
import Fade from "react-reveal/Fade";
import MobailNav from "./components/mobileNav/MobailNav";
import HomePage from "./pages/home/HomePage";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobailNav />
        <Layout />
        <div className="container">
          <AboutPage />
          <TechSkills />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Fade top>
          <div className="text-center pb-4 footer ">
            <h4>made with 😊 ankit &copy; 2023</h4>
          </div>
        </Fade>
      </div>

      <ScrollToTop
        smooth
        color="#ffffff"
        style={{ borderRadius: "80px", backgroundColor: "black" }}
      />
    </>
  );
}

export default App;
