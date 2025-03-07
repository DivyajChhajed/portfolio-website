"use client";
import React from "react";
import Layout from "./Layout";
// import Image from "next/image";
import profile from "../../public/images/profile/profilepic.jpg";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { InteractiveHoverButton } from "./ui/InteractiveHoverButton";
// import { InteractiveHoverButton2 } from "./ui/HoverButton";
import { DownloadCloudIcon } from "lucide-react";
import HireMe from "./HireMe";
import { motion } from "framer-motion";
// import light from "../../public/images/svgs/miscellaneous_icons_1.svg";

const HomePage = () => {
  return (
    <main className="flex items-center text-black w-full min-h-screen lg:mt-[-30px]">
      <div className="absolute right-8 iniline-block w-24">
        {/* <Image
          src={light}
          alt="Divyaj"
          className="w-full h-auto animate-pulse"
        ></Image> */}
      </div>
      <Layout className="">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.img
              src="/images/profile/profilepic.jpg"
              alt="Divyaj"
              className="w-full max-w-md h-auto rounded-4xl shadow-lg mx-auto"
              initial={{ scale: 0.8, opacity: 0 }} // Scale-up effect on mount
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.1, // Slightly enlarges on hover
                rotate: 3, // Small rotation effect
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)", // More depth on hover
              }}
            />
          </div>
          <div className="w-full flex flex-col items-center text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Creativity"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            />
            <p className="my-2 text-base font-medium text-gray-600 leading-relaxed max-w-xl">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in AI and Web development.
            </p>
            <div className="flex items-center self-center mt-2 gap-5">
              <Link
                href="/dummy.pdf"
                target="_blank"
                download
                className="bg-black text-white items-center p-4 rounded-full px-6 text-lg font-semibold flex gap-x-2 transition-all duration-300 hover:scale-105"
              >
                Download CV
                <DownloadCloudIcon />
              </Link>
              <Link href="mailto:divyajchhajeddc16102004@gmail.com">
                <InteractiveHoverButton className="flex items-cente p-4 rounded-full px-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Contact
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
};

export default HomePage;
