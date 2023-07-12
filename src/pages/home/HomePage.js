import React from "react";
import "./homePage.css";
import Typewriter from 'typewriter-effect'; // new thing
import Resume from '../../assets/docs/resumE.pdf' // resume pdf file

const HomePage = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-contant">
          <h4>Hello 👋, I'm ankit </h4>
          <h1>
            <Typewriter
              options={{
                strings: ['Fullstack Developer !', 'Mern Stack Developer !', 'Ract Developer !'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download={"Resume-Ankit.pdf"}>My Resume </a>
          </div>
        </div>
      </div >
    </>
  );
};

export default HomePage;
