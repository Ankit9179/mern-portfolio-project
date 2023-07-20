import React from "react";
import "./TechSkills.css";
import TechSkillsList from "../../utils/TechSkillsList";

const TechSkills = () => {
  return (
    <>
      <div className="container skills-container-div" id="skills">
        <h1>TECH SKILLS</h1>
        <hr />
        <p>
          👉 incuding programming languages , frameworks , databases ,frontend
          and backend bevelopment tools , and Apis
        </p>
        <div className="row card-container">
          {TechSkillsList.map((items) => (
            <div className="col-md-4" key={items._id}>
              <div className="card m-2 card-card ">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-content">{<items.icon />}</div>
                      <div className="media-body">{items.Name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechSkills;
