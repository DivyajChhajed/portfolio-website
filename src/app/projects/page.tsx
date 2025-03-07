import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { DiGithub } from "react-icons/di";

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            <DiGithub />
          </Link>
          <Link href={link}>Visit the project</Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Divyaj</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify">
        <Layout className="pt-7">
          <AnimatedText
            text="Imagination trumps Knowledge!"
            className="mb-8 text-8xl text-center"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">Featured Projects</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12">Featured Projects</div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
