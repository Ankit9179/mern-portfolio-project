import React from "react";
import { useTheme } from "../../context/ThemContext"; //
import "./homePage.css";
import Fade from "react-reveal/Fade";
import Wobble from "react-reveal/Wobble";

import Typewriter from "typewriter-effect"; // new thing
import Resume from "../../assets/docs/newResume.pdf"; // resume pdf file
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const HomePage = () => {
  //them state
  const [them, setTheme] = useTheme(); // destructuring
  //handle theme button
  const handleTheme = () => {
    setTheme((preState) => (preState === "light" ? "dark" : "light")); //different logic
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="home-content-div">
          <Wobble>
            <div className="theme-icon-div" onClick={handleTheme}>
              {them === "light" ? (
                <BsFillMoonStarsFill size={30} />
              ) : (
                <BsFillSunFill size={30} />
              )}
            </div>
          </Wobble>

          <div className="container home-contant">
            <Fade right>
              <h4> Hello 👋, I'm Ankit i am a </h4>
              <h2>
                <Typewriter
                  options={{
                    strings: [
                      "Fullstack Developer !",
                      "Mern Stack Developer !",
                      "Ract Developer !",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </Fade>
            <Fade bottom>
              <div className="home-buttons">
                <a
                  className="btn btn-hire"
                  href="https://api.whatsapp.com/send?phone=7828092738"
                  target="blank"
                >
                  Hire Me
                </a>
                <a
                  className="btn btn-cv"
                  href={Resume}
                  download={"Resume-Ankit.pdf"}
                >
                  My Resume{" "}
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
