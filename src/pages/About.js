import { Container } from "@chakra-ui/react";
import Footer from "../layouts/Footer";
import { motion } from "framer-motion";

const About = () => {
  const animation = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Container maxW="container.lg">
        <motion.div
          className="text-center justify-content-center mt-3"
          variants={animation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h1 className="roboto text-start">ABOUT ME</h1>
          <motion.div
            className="row about-bg my-5"
            variants={animation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div className="col-7">
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, delay: 0.7 }}
              >
                Hello, I am Bernard Brennan N. Regaspi, a dedicated web
                developer who has carved a distinct path in the digital
                landscape. My academic journey led me through Camarines Sur
                Polytechnic Colleges, shaping me into a versatile Full-Stack
                Developer, adept Graphic Designer, and creative Content Creator.
                With an innate passion for programming and web development, I
                approach every project with zeal and innovation, striving to
                exceed expectations.
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, delay: 1.0 }}
              >
                Proficient in an array of programming languages and frameworks
                such as JavaScript, PHP, React, VueJS, and Laravel, I
                orchestrate intricate codes to construct fluid and user-centric
                web experiences. My knack for inventive problem-solving, paired
                with an unwavering commitment to staying abreast of industry
                trends, empowers me to present avant-garde solutions. From
                crafting dynamic web applications to weaving visually appealing
                designs, I, Bernard Brennan N. Regaspi, leave an enduring mark
                at the forefront of web development, pushing boundaries and
                redefining digital possibilities.
              </motion.p>
            </div>
            <motion.div
              className="col-5"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <img
                class="about-profile"
                src={require("../assets/profile-images/about-profile.jpg")}
                alt="about-profile"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
