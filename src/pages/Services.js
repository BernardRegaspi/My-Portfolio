import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
import Footer from "../layouts/Footer";

const Services = () => {
  const [bg1, setBg1] = useState("#f1356d");
  const [icon1, setIcon1] = useState("#fff");
  const [bg2, setBg2] = useState("#f1356d");
  const [icon2, setIcon2] = useState("#fff");
  const [bg3, setBg3] = useState("#f1356d");
  const [icon3, setIcon3] = useState("#fff");

  const handleHover1 = () => {
    setBg1("#fff");
    setIcon1("#f1356d");
  };

  const handleHoverEnd1 = () => {
    setBg1("#f1356d");
    setIcon1("#fff");
  };
  const handleHover2 = () => {
    setBg2("#fff");
    setIcon2("#f1356d");
  };

  const handleHoverEnd2 = () => {
    setBg2("#f1356d");
    setIcon2("#fff");
  };
  const handleHover3 = () => {
    setBg3("#fff");
    setIcon3("#f1356d");
  };

  const handleHoverEnd3 = () => {
    setBg3("#f1356d");
    setIcon3("#fff");
  };

  const animation = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <Container maxW="container.lg">
        <motion.div
          className="text-center justify-content-center mt-5"
          variants={animation}
          initial="hidden"
          animate="visible"
          transition={{ delay:  0.1}}
        >
          <h1 className="roboto">MY SERVICES</h1>
          <motion.div
            className="row text-center my-5"
            variants={animation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="col m-2 m-4-sm p-5 services-bg services-sm"
              align="center"
              onHoverStart={handleHover1}
              onHoverEnd={handleHoverEnd1}
              whileHover={{
                y: -20,
                backgroundColor: "#f1356d",
              }}
            >
              <motion.span
                className="material-icons p-3 services-icon-bg mb-2 fs-2"
                initial={{ backgroundColor: "#f1356d", color: "#fff" }}
                animate={{ backgroundColor: bg1, color: icon1 }}
              >
                code
              </motion.span>
              <h4 className="roboto mb-4">Web Development</h4>
              <p className="small-text">
                I will develop your web-based Capstone/Thesis system, ensuring
                functionality, user-friendliness, and efficiency in every
                aspect.
              </p>
            </motion.div>
            <motion.div
              className="col m-2 p-5 services-bg services-sm"
              align="center"
              onHoverStart={handleHover2}
              onHoverEnd={handleHoverEnd2}
              whileHover={{
                y: -20,
                backgroundColor: "#f1356d",
              }}
            >
              <motion.span
                className="material-icons p-3 services-icon-bg mb-2 fs-2"
                initial={{ backgroundColor: "#f1356d", color: "#fff" }}
                animate={{ backgroundColor: bg2, color: icon2 }}
              >
                photo_library
              </motion.span>
              <h4 className="roboto mb-4">Graphic Designing</h4>
              <p className="small-text">
                I will skillfully edit your photos, logos, brochures,
                tarpaulins, and more, ensuring a polished and professional
                visual identity for your projects.
              </p>
            </motion.div>
            <motion.div
              className="col m-2 p-5 services-bg services-sm"
              align="center"
              onHoverStart={handleHover3}
              onHoverEnd={handleHoverEnd3}
              whileHover={{
                y: -20,
                backgroundColor: "#f1356d",
              }}
            >
              <motion.span
                className="material-icons p-3 services-icon-bg mb-2 fs-2"
                initial={{ backgroundColor: "#f1356d", color: "#fff" }}
                animate={{ backgroundColor: bg3, color: icon3 }}
              >
                videocam
              </motion.span>
              <h4 className="roboto mb-4">Video Editing</h4>
              <p className="small-text">
                I will adeptly edit your videos, customizing each one to fit its
                designated category, guaranteeing a professional and engaging
                end result.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
