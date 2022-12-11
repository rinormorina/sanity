"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ socials }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "intro", name: "Intro" },
    { path: "arbeit", name: "Arbeit" },
  ];
  return (
    <nav>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center"
      >
        <Link
          href={"/"}
          className="text-lg font-medium mytext drop-shadow-lg mr-5"
        >
          Code mit Paul
        </Link>
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            url={social.url}
            fgColor="white"
            bgColor="transparent"
            className="headerIcon"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex items-center text-white cursor-pointer space-x-5"
      >
        <a href="#contact" className="block">
          <SocialIcon
            network="email"
            fgColor="white"
            bgColor="transparent"
            className="headerIcon"
          />
        </a>
        <div onClick={() => setShowSidebar(true)} className="flex">
          <AiOutlineMenu className="headerIcon" />
        </div>
      </motion.div>
      <div
        className={`${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } w-1/2 fixed top-0 right-0 bottom-0 gradient border-l z-50 border-white shadow-xl transition duration-200`}
      >
        <div className="p-5 pt-8 flex items-center justify-between">
          <div></div>
          <i>
            <AiOutlineClose
              onClick={() => setShowSidebar(false)}
              className="headerIcon"
            />
          </i>
        </div>
        <div className="flex flex-col items-center space-y-4 p-2">
          {links.map((link, index) => (
            <a
              onClick={() => setShowSidebar(false)}
              href={`#${link.path}`}
              className="w-full p-4 text-lg font-light hover:opacity-80 rounded-xl"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
