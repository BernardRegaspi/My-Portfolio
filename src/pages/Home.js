import Typed from "react-typed";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  const profile = require("../assets/profile-images/profile1.png")
  return (
    <>
      <div className="container mt-5">
        <ParticlesBackground />
        <motion.div
          // className="home-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="row"
        >
          <div className="home-item col-7">
            <h2 className="roboto">
              Hello, my name is <br />{" "}
              <span className="bernard roboto">Bernard</span>
              <br />
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
            </h2>
            <p className="introduction">
              Step into a world where code shapes creativity. I'm a web
              developer, and this portfolio is a glimpse into my passion for
              crafting digital wonders. Let's embark on a journey of innovation
              and design, where every click opens a door to a new online
              experience.
            </p>
            <motion.button
              className="hire-me"
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 2px #f1356d, 0 0 5px #f1356d",
                boxShadow:
                  "0 2px 5px 0 #f1356d inset, 0 2px 5px 0 #f1356d, 0 2px 5px 0 #f1356d inset, 0 2px 5px 0 #f1356d",
              }}
            >
              Hire me
            </motion.button>
          </div>
          <motion.div
            className="home-item col-5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              stiffness: 260,
              damping: 20,
            }}
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
