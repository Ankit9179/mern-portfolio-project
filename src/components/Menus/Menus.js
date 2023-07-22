import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom"; //animation with the help of react-reveal
import Fade from "react-reveal/Fade"; //animation with the help of react-revea

import {
  FcAbout,
  FcBusinessContact,
  FcHome,
  FcVideoProjector,
  FcAutomatic,
  FcBookmark,
} from "react-icons/fc";
import { Link } from "react-scroll"; //you want go to specific page

const Menus = ({ toggle }) => {
  return toggle ? (
    <>
      <Zoom>
        <div className="navebar-profile-pic">
          <img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd"
            alt="profile pic"
          />
        </div>
      </Zoom>
      <Fade left>
        <div className="nav-icons">
          <div className="nav-icon">
            <div className="nav-link">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FcHome /> Home
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FcAbout /> About
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FcAutomatic /> Tech Skills
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="project"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FcVideoProjector /> Projects
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="education"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FcBookmark /> Education
              </Link>
            </div>

            <div className="nav-link">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <FcBusinessContact /> Contact
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </>
  ) : (
    <>
      <div className="nav-main-div">
        <div className="nav-icon">
          <div className="nav-link">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FcHome />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FcAbout />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FcAutomatic />
            </Link>{" "}
          </div>

          <div className="nav-link">
            <Link
              to="project"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FcVideoProjector />
            </Link>{" "}
          </div>

          <div className="nav-link">
            <Link
              to="education"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FcBookmark />
            </Link>{" "}
          </div>

          <div className="nav-link">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FcBusinessContact />
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
