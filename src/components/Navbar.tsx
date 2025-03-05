"use client"; // Client Component

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

// Custom Link Component
interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 md:px-16 py-6">
      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>

      {/* Social Media Icons */}
      <nav className="flex space-x-4 items-center justify-center flex-wrap-">
        <motion.a
          href="https://www.linkedin.com/in/divyajchhajed"
          target="_blank"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="text-2xl hover:text-blue-600 transition m-1" />
        </motion.a>
        <motion.a
          href="https://github.com/DivyajChhajed"
          target="_blank"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="text-2xl hover:text-gray-600 transition m-1" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/divyaj_"
          target="_blank"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram className="text-2xl hover:text-pink-600 transition m-1" />
        </motion.a>
        <motion.a
          href="https://twitter.com/yourusername"
          target="_blank"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaXTwitter className="text-2xl hover:text-gray-800 transition m-1" />
        </motion.a>
      </nav>

      {/* Logo (Centered) */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
