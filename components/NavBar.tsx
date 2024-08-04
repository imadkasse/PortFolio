"use client";
import { Link as ScrollLink } from "react-scroll";
import {
  faArrowUpRightFromSquare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
  };
  const [menu, setMenu] = useState(false);

  return (
    <div className="text-white w-full border-b-2 border-gray-600/50 relative">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div>
          <Image
            src="/imgs/imadLogoBG.png"
            width={100}
            height={60}
            alt="logoImg"
            className="p-1"
          />
        </div>
        <div className="flex-grow md:block xs:hidden">
          <ul className="flex items-center justify-evenly">
            <li className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer">
              <ScrollLink to="home" smooth={true} duration={1500}>
                Home
              </ScrollLink>
            </li>
            <li className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer">
              <ScrollLink to="projects" smooth={true} duration={1000}>
                Projects
              </ScrollLink>
            </li>
            <li className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer">
              <ScrollLink to="skills" smooth={true} duration={1000}>
                Skills
              </ScrollLink>
            </li>
            <li className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer">
              <ScrollLink to="testimonials" smooth={true} duration={500}>
                Testimonials
              </ScrollLink>
            </li>
            <li className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer">
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-purple-700 to-gray-400 p-2 rounded-2xl hover:rounded-md transition-all delay-100 flex items-center gap-2">
            <h1>Let`s Talk</h1>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <button className="md:hidden" onClick={() => setMenu(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>
      {menu && (
        <motion.div
          className="bg-black/95 fixed top-0 w-[340px] p-2 h-[100vh] z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full">
            <button
              onClick={() => setMenu(false)}
              className="w-full text-end px-2 my-2"
            >
              <FontAwesomeIcon
                icon={faClose}
                size="lg"
                className="hover:text-red-600 hover:rotate-180 transition duration-300 cursor-pointer text-2xl"
              />
            </button>
            <ul className="flex flex-col items-center w-full h-full gap-5">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer"
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple-400 text-lg transition duration-150 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
