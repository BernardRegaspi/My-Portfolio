import { motion } from "framer-motion";
import { useState } from "react";
import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabIndicator,
  TabPanel,
} from "@chakra-ui/react";
import WorkExperience from "../components/WorkExperience";
import Footer from "../layouts/Footer";

const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  let skillsIcon = require("../assets/icons/skills.png");
  let workIcon = require("../assets/icons/experience-icon.png");

  const [skills] = useState([
    {
      id: 1,
      img: require("../assets/icons/html.png"),
      name: "HTML",
      scale: "Advance",
    },
    {
      id: 2,
      img: require("../assets/icons/css.png"),
      name: "CSS",
      scale: "Advance",
    },
    {
      id: 3,
      img: require("../assets/icons/sass.png"),
      name: "SASS",
      scale: "Intermediate",
    },
    {
      id: 4,
      img: require("../assets/icons/javascript.png"),
      name: "JavaScript",
      scale: "Intermediate",
    },
    {
      id: 5,
      img: require("../assets/icons/php.png"),
      name: "Php",
      scale: "Intermediate",
    },
    {
      id: 6,
      img: require("../assets/icons/react.png"),
      name: "React",
      scale: "Intermediate",
    },
    {
      id: 7,
      img: require("../assets/icons/laravel.png"),
      name: "Laravel",
      scale: "Intermediate",
    },
    {
      id: 8,
      img: require("../assets/icons/vuejs.png"),
      name: "VueJS",
      scale: "Intermediate",
    },
    {
      id: 9,
      img: require("../assets/icons/nodejs.png"),
      name: "NodeJS",
      scale: "Intermediate",
    },
    {
      id: 10,
      img: require("../assets/icons/python.png"),
      name: "Python",
      scale: "Beginner",
    },
  ]);

  return (
    <>
      <Container maxW="container.lg">
        <h1 className="roboto center-sm-screen">
          <img src={skillsIcon} alt="skills-icon" className="skills-icon" />
          SKILLS
        </h1>
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>TechStack</Tab>
            <Tab>Other Tools</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <motion.div
                className="row justify-content-center"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="col-4 col-sm-2 m-3 skills-item"
                    align="center"
                    variants={item}
                    whileHover={{ scale: 1.1, backgroundColor: "#ffffff31" }}
                  >
                    <img src={skill.img} alt={skill.name + " logo"} />
                    <span className="skills-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                className="row justify-content-center"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="col-4 col-sm-2 m-3 skills-item"
                    align="center"
                    variants={item}
                    whileHover={{ scale: 1.1, backgroundColor: "#ffffff31" }}
                  >
                    <img src={skill.img} alt={skill.name + " logo"} />
                    <span className="skills-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <div className="center-sm-screen mt-3">
          <h1 className="roboto">
            WORK EXPERIENCE
            <img src={workIcon} alt="skills-icon" className="skills-icon" />
          </h1>
          <br />
          <WorkExperience />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Skills;
