import React from "react";
import "./TechSkills.css";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";

import TechSkillsList from "../../utils/TechSkillsList";

const TechSkills = () => {
  return (
    <>
      <div className="container skills-container-div" id="skills">
        <Jump>
          <h1>TECH SKILLS</h1>
        </Jump>
        <hr />
        <p>👉 I use these technical skills to build web projects</p>
        <div className="row card-container box-div-skill">
          {TechSkillsList.map((items) => (
            <Fade left>
              <div className="col-md-4 " key={items._id}>
                <div className="card m-2 card-card  ">
                  <div className="card-content ">
                    <div className="card-body ">
                      <div className="media d-flex justify-content-center ">
                        <div className="alig-self-content ">
                          {<items.icon />}
                        </div>
                        <div className="media-body">{items.Name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechSkills;
