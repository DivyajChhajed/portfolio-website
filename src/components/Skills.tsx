import React from "react";
import "../app/globals.css";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold absolute bg-black text-white py-3 px-6 shadow-black cursor-pointer"
      whileHover={{ scale: 1.5 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-10">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center"
        style={{ background: "var(--circularLight)" }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-white px-6 py-3 shadow-black cursor-pointer"
          whileHover={{ scale: 1.5 }}
        >
          Web
        </motion.div>

        <Skill name="AI" x="20vw" y="6vw" />
        <Skill name="Machine Learning" x="0vw" y="12vw" />

        <Skill name="Java" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="-20vw" y="-15vw" />
        <Skill name="Gen AI" x="-30vw" y="-21vw" />

        <Skill name="RAG" x="5vw" y="-18vw" />
        <Skill name="LLMs" x="18vw" y="-7vw" />

        <Skill name="Video Editing" x="25vw" y="-18vw" />
        <Skill name="RAG" x="5vw" y="-18vw" />
        <Skill name="DSA" x="-30vw" y="-6vw" />
        <Skill name="Motion Graphics" x="-30vw" y="10vw" />
        <Skill name="Web Design" x="37vw" y="-2vw" />
        <Skill name="Python" x="24vw" y="17vw" />
        <Skill name="NLP" x="-20vw" y="19vw" />
        <Skill name="UI/UX" x="-20vw" y="2vw" />
      </div>
    </>
  );
};

export default Skills;
