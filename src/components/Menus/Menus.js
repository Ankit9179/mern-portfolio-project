import React from "react";
import "./Menus.css";
import {
  FcAbout,
  FcBusinessContact,
  FcHome,
  FcVideoProjector,
} from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { Link } from "react-scroll"; //you want go to specific page

const Menus = ({ toggle }) => {
  return toggle ? (
    <>
      <div className="navebar-profile-pic">
        <img
          src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd"
          alt="profile pic"
        />
      </div>
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
              <GiSkills /> Tech Skills
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
              <MdSchool /> Education
            </Link>
          </div>

          <div className="nav-link">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <FcBusinessContact /> Contact
            </Link>
          </div>
        </div>
      </div>
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
              <GiSkills />
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
              <MdSchool />
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
