import { Container } from "@chakra-ui/react";
import { useState } from "react";

const WorkExperience = () => {

  const [tools] = useState([
    require("../assets/icons/gitlab.png"),
    require("../assets/icons/quasar.png"),
    require("../assets/icons/vuejs.png"),
    require("../assets/icons/axios.png"),
    require("../assets/logo/pixel8.png"),
    require("../assets/logo/3gx.png"),
    require("../assets/icons/laravel.png"),
    require("../assets/icons/react.png"),
    require("../assets/icons/github.png"),
    require("../assets/icons/mongodb.png"),
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
                Craft responsive websites using designs provided by UX/UI
                designers, ensuring optimal user experiences.
              </li>
              <li>
                Collaborate closely with fellow front-end developers, promoting
                teamwork and idea exchange.
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
        
        <div className="d-md-flex work-experience2 mt-5">
          <div className="p-4" align="center">
            <img
              className="work-exp-logo"
              src={tools[5]}
              alt="pixel8_logo"
            />
          </div>
          <div className="p-4">
            <h2 className="roboto">
              3gx Solutions
            </h2>
            <p>August 2023 - (On Process)</p>
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
            </ul>
          </div>
          <div className="p-4" align="center">
            <p className="position">Backend Developer</p>
            <p align="left">Tools:</p>
            <div className="tools">
            <img src={tools[8]} alt="github" />
              <img src={tools[6]} alt="laravel" />
              <img src={tools[7]} alt="react" />
              <img src={tools[9]} alt="mongodb" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WorkExperience;
