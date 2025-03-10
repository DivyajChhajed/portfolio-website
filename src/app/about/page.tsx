"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import profilepic from "../../../public/images/profile/profilepic.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import "../../app/globals.css";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const page = () => {
  return (
    <>
      <Head>
        <title>Divyaj</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-7">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-8 text-8xl text-center"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold">About Me</h2>
              <p className="font-medium ">
                {" "}
                Hi, I&apos;m Divyaj, a Web Developer and UI/UX designer & an
                AI/ML Engineer with a passion for creating beautiful,
                functional, and user-centered digital experiences. I am always
                looking for new and innovative ways to work on different
                projects
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-4xl">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl " />
              <Image
                src={profilepic}
                alt="profile"
                className="w-full h-auto rounded-4xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium captialize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium captialize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium captialize text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default page;
