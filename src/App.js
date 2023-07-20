import React from "react";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/about/AboutPage";
import TechSkills from "./pages/techSkills/TechSkills";
import Projects from "./pages/projcts/Projects";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <AboutPage />
        <TechSkills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <div className="text-center mb-4 footer ">
        <h4 >made with 😊 ankit &copy; 2023</h4>
      </div>
    </div>
  );
}

export default App;
