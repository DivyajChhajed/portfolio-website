import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MailCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section - Copyright */}
        <div className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Divyaj Chhajed. All Rights Reserved.
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="flex space-x-6 my-4 md:my-0">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </nav>

        {/* Right Section - Social Media Links */}
        <div className="flex space-x-4">
          <Link href="mailto:divyajchhajeddc16102004@gmail.com" target="_blank">
            <MailCheck className="text-xl hover:text-gray-400 transition" />
          </Link>
          <Link href="https://github.com/DivyajChhajed" target="_blank">
            <FaGithub className="text-xl hover:text-gray-400 transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/divyajchhajed"
            target="_blank"
          >
            <FaLinkedin className="text-xl hover:text-blue-500 transition" />
          </Link>
          <Link href="https://www.instagram.com/divyaj_" target="_blank">
            <FaInstagram className="text-xl hover:text-pink-500 transition" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank">
            <FaXTwitter className="text-xl hover:text-gray-400 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
