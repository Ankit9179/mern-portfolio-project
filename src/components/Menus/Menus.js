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
            <FcHome /> Home
          </div>
          <div className="nav-link">
            <FcAbout /> About
          </div>
          <div className="nav-link">
            <GiSkills /> Tech Skills
          </div>
          <div className="nav-link">
            <FcVideoProjector /> Projects
          </div>
          <div className="nav-link">
            <MdSchool /> Education
          </div>

          <div className="nav-link">
            <FcBusinessContact /> Contact
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="nav-icon">
      <div className="nav-link">
        <FcHome title="Home" />
      </div>
      <div className="nav-link">
        <FcAbout title="About" />
      </div>
      <div className="nav-link">
        <GiSkills title="Skill" />
      </div>
      <div className="nav-link">
        <FcVideoProjector title="Projects" />
      </div>
      <div className="nav-link">
        <MdSchool />
      </div>
      <div className="nav-link">
        <FcBusinessContact title="Contact" />
      </div>
    </div>
  );
};

export default Menus;
