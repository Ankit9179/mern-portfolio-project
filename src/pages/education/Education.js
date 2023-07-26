import React from "react";
import "./Education.css";
import Shake from "react-reveal/Shake";

import { MdSchool } from "react-icons/md"; //react icon

//
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="container education-main-div" id="education">
        <Shake>
          <h1 className="text-center pt-5">My Education</h1>
        </Shake>
        <hr />
        <VerticalTimeline className="education-vertical-div">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 246, 248)",
              color: "#0a0909",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(20, 21, 21)" }}
            date="2023-2025"
            iconStyle={{ background: "rgb(13, 13, 13)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MCA (Running)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              TIT Bhopal, IN
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 246, 248)",
              color: "#0a0909",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 79, 82)" }}
            date="2022-2023"
            iconStyle={{ background: "rgb(13, 14, 14)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">P.G.D.C.A</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MCNUJC Bhopal, IN
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 246, 248)",
              color: "#0a0909",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 79, 82)" }}
            date="2019-2022"
            iconStyle={{ background: "rgb(16, 17, 17)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc (math)</h3>
            <h4 className="vertical-timeline-element-subtitle">MCBU MP, IN</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
export default Education;
