import React from "react";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/about/AboutPage";
import TechSkills from "./pages/techSkills/TechSkills";
function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <AboutPage />
        <TechSkills />
      </div>
    </div>
  );
}

export default App;
