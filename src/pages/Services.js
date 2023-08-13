import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
import Footer from "../layouts/Footer";

const Services = () => {
  const [bg, setBg] = useState("#f1356d");
  const [icon, setIcon] = useState("#fff");

  const handleHover = () => {
    setBg("#fff");
    setIcon("#f1356d")
  };
  
  const handleHoverEnd = () => {
    setBg("#f1356d");
    setIcon("#fff")
  };
  
  const [services] = useState([
    {
      id: 1,
      icon: "code",
      name: "Web Development",
      details: `I will develop your web-based Capstone/Thesis system, ensuring functionality, user-friendliness, and efficiency in every aspect.`,
    },
    {
      id: 2,
      icon: "photo_library",
      name: "Graphic Designing",
      details:
        "I will skillfully edit your photos, logos, brochures, tarpaulins, and more, ensuring a polished and professional visual identity for your projects.",
    },
    {
      id: 3,
      icon: "videocam",
      name: "Video Editing",
      details:
        "I will adeptly edit your videos, customizing each one to fit its designated category, guaranteeing a professional and engaging end result.",
    },
  ]);
  return (
    <>
      <Container maxW="container.lg">
        <div className="row text-center justify-content-center mt-5">
          <h1 className="roboto text-start">SERVICES</h1>
          <motion.div
            className="row text-center mt-2"
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="col m-2 p-5 services-bg"
                align="center"
                onHoverStart={handleHover}
                onHoverEnd={handleHoverEnd}
                whileHover={{
                  y: -20,
                  backgroundColor: "#f1356d",
                }}
              >
                <motion.span
                  className="material-icons p-3 services-icon-bg mb-2"
                  initial={{ backgroundColor: "#f1356d", color: "white" }}
                  animate={{backgroundColor: bg, color: icon}}
                >
                  {service.icon}
                </motion.span>
                <h4 className="roboto mb-4">{service.name}</h4>
                <p className="services-text">{service.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
