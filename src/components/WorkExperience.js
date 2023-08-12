import { Container } from "@chakra-ui/react";
import { useState } from "react";

const WorkExperience = () => {

  const [tools] = useState([
    require("../assets/icons/gitlab.png"),
    require("../assets/icons/quasar.png"),
    require("../assets/icons/vuejs.png"),
    require("../assets/icons/axios.png"),
    require("../assets/logo/pixel8.png"),
  ]);

  return (
    <>
      <Container maxW="container.lg">
        <div className="d-md-flex work-experience">
          <div className="p-4" align="center">
            <img
              className="work-exp-logo"
              src={tools[4]}
              alt="pixel8_logo"
            />
          </div>
          <div className="p-4">
            <h2 className="roboto">
              Pixel 8 Web Solution and Consultancy Inc.
            </h2>
            <p>March 2023 - June 2023 (486 Hours Internship)</p>
            <h3 className="roboto">Responsibilities</h3>
            <ul className="responsibilities">
              <li>
                Engage in full-time remote work from Monday to Saturday,
                spanning 8:00 AM to 5:00 PM
              </li>
              <li>
                Master programming languages and frameworks as directed by the
                supervisor.
              </li>
              <li>
                Tackle performance-based challenges and tasks to enhance skills
                and capabilities.
              </li>
              <li>
                Contribute actively to front-end developer meetings, fostering
                collaboration and sharing insights.
              </li>
              <li>
                Craft responsive websites using designs provided by UX/UI
                designers, ensuring optimal user experiences.
              </li>
              <li>
                Collaborate closely with fellow front-end developers, promoting
                teamwork and idea exchange.
              </li>
              <li>
                Demonstrate a strong understanding and adherence to company
                policies and regulations.
              </li>
            </ul>
          </div>
          <div className="p-4" align="center">
            <p className="position">Frontend Developer</p>
            <p align="left">Tools:</p>
            <div className="tools">
              <img src={tools[0]} alt="gitlab" />
              <img src={tools[1]} alt="quasar" />
              <img src={tools[2]} alt="vuejs" />
              <img src={tools[3]} alt="axios" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WorkExperience;
