"use client";
import { data } from "@/data/skills";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="text-white mt-16 ">
      <div className="flex items-center justify-center mb-10 flex-col  gap-3 ">
        <span className="p-1 sm:text-5xl xs:text-3xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
          My Skills
        </span>
        <p className="md:text-lg text-md text-center md:px-24 line-clamp-3 text-gray-200 mb-12">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <motion.div
        ref={ref}
        className="container mb-5 grid md:grid-cols-5 gap-3 sm:grid-cols-3 xs:grid-cols-2 xs:	"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {data.map((skill) => {
          return (
            <motion.div
              className="item min-w-40 "
              key={skill.id}
              variants={item}
            >
              <div className=" w-full h-full  p-5 cursor-pointer">
                <div className="group flex flex-col items-center opacity-50 hover:opacity-100   hover:bg-purple-500/50 rounded-lg w-full transition duration-500 bg-purple-700/40 hover:border-purple-600">
                  <Image
                    src={skill.src}
                    alt="imgSkills"
                    width={1000}
                    height={1000}
                    className="w-32 h-32 scale-75 group-hover:scale-90 transition duration-500 py-3"
                  />
                  <div className="">
                    <span className="text-purple-200  text-xl font-bold ">
                      {skill.porsontage}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-3">
                  <h1 className="text-lg font-semibold text-purple-500">
                    {skill.title}
                  </h1>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
