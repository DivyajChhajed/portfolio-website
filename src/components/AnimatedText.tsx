"use client";
import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const single = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full py-4 overflow-hidden">
      <motion.h1
        className={`${className} inline-block w-full text-dark font-bold capitalize tracking-tight`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block mr-2 hover:text-gray-600 transition-colors duration-300"
            variants={single}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
