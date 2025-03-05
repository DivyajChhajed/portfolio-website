"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center text-2xl font-extrabold mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 flex text-2xl text items-center justify-center rounded-full bg-black text-white"
        whileHover={{
          scale: 1.3,
          // backgroundColor: [
          //   "rgba(131,58,180,1)",
          //   "rgba(253,29,29,1)",
          //   "rgba(252,176,69,1)",
          //   "rgba(131,58,180,1)",
          // ],
        }}
      >
        DC
      </MotionLink>
    </div>
  );
};

export default Logo;
