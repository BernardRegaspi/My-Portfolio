import { motion } from "framer-motion";
import Theme from "../components/Theme";
import Drawer from "../components/Drawer";
import { ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  const animation = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <ChakraProvider theme={Theme}>
      <header className="sticky-top">
        <div className="container">
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <motion.h2
                  className="roboto logo"
                  variants={animation}
                  initial="initial"
                  animate="animate"
                  transition={{ transition: 0.5, delay: 0.4 }}
                >
                  iCan't<span className="code roboto">Code();</span>
                </motion.h2>
              </Link>
              <button
                type="buttton"
                className="navbar-toggler navbar-button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <Drawer />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <span className="me-auto"></span>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <motion.li
                    className="nav-item"
                    variants={animation}
                    initial="initial"
                    animate="animate"
                    transition={{ transition: 0.5, delay: 0.5 }}
                  >
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-item"
                    variants={animation}
                    initial="initial"
                    animate="animate"
                    transition={{ transition: 0.5, delay: 0.6 }}
                  >
                    <Link className="nav-link" to="/skills">
                      Skills
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-item"
                    variants={animation}
                    initial="initial"
                    animate="animate"
                    transition={{ transition: 0.5, delay: 0.7 }}
                  >
                    <Link className="nav-link" to="/project">
                      Projects
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-item"
                    variants={animation}
                    initial="initial"
                    animate="animate"
                    transition={{ transition: 0.5, delay: 0.8 }}
                  >
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-item"
                    variants={animation}
                    initial="initial"
                    animate="animate"
                    transition={{ transition: 0.5, delay: 0.9 }}
                  >
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </ChakraProvider>
  );
};

export default Navbar;
