import Typed from "react-typed";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  const profile = require("../assets/profile-images/profile1.png");

  const animation = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="container mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ParticlesBackground />
        </motion.div>
        <motion.div
          // className="home-container"
          className="row align-items-end flex-column-reverse flex-lg-row"
        >
          <div className="col-sm-push-12 col-sm-12	col-md-12 col-lg-6	col-xl-6	col-xxl-6 custom-margin-bottom">
            <motion.h4
              className="roboto"
              variants={animation}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Hello, my name is
            </motion.h4>
            <motion.div
              className="bernard roboto"
              variants={animation}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Bernard
            </motion.div>
            <motion.div
              variants={animation}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <h4>
                <Typed
                  strings={[
                    "I'm a Full Stack Developer",
                    "I'm a Graphic Designer",
                    "I'm a Content Creator",
                  ]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                />
              </h4>
              <p className="introduction">
                Step into a world where code shapes creativity. I'm a web
                developer, and this portfolio is a glimpse into my passion for
                crafting digital wonders. Let's embark on a journey of
                innovation and design, where every click opens a door to a new
                online experience.
              </p>
            </motion.div>
            <motion.div
              variant={animation}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <motion.button
                className="hire-me me-3"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 2px #fd477e, 0 0 5px #fd477e",
                  boxShadow:
                    "0 2px 5px 0 #fd477e inset, 0 2px 5px 0 #fd477e, 0 2px 5px 0 #fd477e inset, 0 2px 5px 0 #fd477e",
                }}
              >
                Hire me
              </motion.button>
              <motion.button
                className="download-cv"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 2px #f1356d, 0 0 5px #f1356d",
                  boxShadow:
                    "0 2px 5px 0 #f1356d inset, 0 2px 5px 0 #f1356d, 0 2px 5px 0 #f1356d inset, 0 2px 5px 0 #f1356d",
                }}
              >
                Download CV
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            className="col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-6 mb-5-lg custom-margin-bottom"
            variants={animation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <img
              className="profile"
              src={profile}
              alt="profile"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
