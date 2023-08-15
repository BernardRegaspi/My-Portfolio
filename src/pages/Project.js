import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@chakra-ui/react";
import Footer from "../layouts/Footer";

const Project = () => {
  const [projects] = useState([
    {
      id: 1,
      path: require("../assets/projects/personal-project.PNG"),
      title: "My Website Portfolio",
      genre: "Personal Project",
      link: "http://localhost:3000",
      source_code: "https://github.com/BernardRegaspi/My-Portfolio",
      details: "lorem ipsum",
    },
    {
      id: 2,
      path: require("../assets/projects/appointment-system.PNG"),
      title: "Appointment System",
      genre: "Capstone Project",
      link: "https://maob-appointments-bato.000webhostapp.com/",
      source_code: "https://github.com/BernardRegaspi/My-Portfolio",
      details: "lorem ipsum",
    },
    {
      id: 3,
      path: require("../assets/projects/personal-project.PNG"),
      title: "Personal Website Portfolio",
      genre: "Personal Project",
      link: "http://localhost:3000",
      source_code: "https://github.com/BernardRegaspi/My-Portfolio",
      details: "lorem ipsum",
    },
  ]);
  const animation = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <>
      <Container maxW="container.lg">
        <motion.div
          className="mt-5"
          variants={animation}
          initial="hidden"
          animate="visible"
        >
          <h1 className="roboto text-center">
            My Newest and Most Impressive Website Build
          </h1>
          <div className="my-5">
            {projects.map((project) => (
              <motion.div
                className="row project-bg my-4"
                key={project.id}
                whileHover={{
                  y: -5,
                  backgroundColor: "#ffffff18",
                }}
              >
                <div className="col">
                  <img
                    className="project-img"
                    src={project.path}
                    alt={project.title}
                  />
                </div>
                <div className="col">
                  <h5 className="genre roboto">{project.genre}</h5>
                  <h3 className="roboto">{project.title}</h3>
                  <p className="project-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio quo, corrupti delectus earum id veritatis placeat
                    eaque dolorum aspernatur quaerat quasi harum doloremque ipsa
                    tempore, repellat perspiciatis quos excepturi minus?
                  </p>
                  <div className="mt-4">
                    <img
                      className="github-button"
                      src={require("../assets/icons/github.png")}
                      onClick={() => {
                        window.open(project.source_code, "_blank");
                      }}
                      alt="github-button"
                    />
                    <motion.button
                      onClick={() => {
                        window.open(project.link, "_blank");
                      }}
                      className="download-cv"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 2px #f1356d, 0 0 5px #f1356d",
                        boxShadow:
                          "0 2px 5px 0 #f1356d inset, 0 2px 5px 0 #f1356d, 0 2px 5px 0 #f1356d inset, 0 2px 5px 0 #f1356d",
                      }}
                    >
                      Visit Project
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
      <Footer />
    </>
  );
};

export default Project;
