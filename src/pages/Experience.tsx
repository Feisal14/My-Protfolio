import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import SchoolIcon from "@mui/icons-material/School";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline className="3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-titile">
            Umm Al Qura University
          </h3>
          <p>Bachelor degree of Computer Sience </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
