import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import experiences from "../constantes/experiences.js";
import Icon from "./Icon";

export default class Experiences extends Component {
  render() {
    return (
      <VerticalTimeline>
        {experiences.map(experience => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Icon />}
            >
              <h3 className=" exp vertical-timeline-element-title">
                {experience.nom}
              </h3>
              <h4 className=" exp vertical-timeline-element-subtitle">
                {experience.date}
              </h4>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    );
  }
}
