import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
      >
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            welcome
          </text>
        </svg>
      </motion.div>
    </>
  );
};

export default Loader;
