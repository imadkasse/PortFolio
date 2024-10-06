"use client";
import { backend, data, frontend, fullStack } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Spotlight } from "./ui/Spotlight";

const Projects = () => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 }, // البداية من أسفل الحاوية
    visible: { opacity: 1, y: 0 }, // النهاية في موضعه الطبيعيي
  };
  const [dataFilter, setDataFilter] = useState(data);
  return (
    <div className="text-white  ">
      <div className=" flex items-center justify-center mb-10">
        <span className="p-1 sm:text-5xl xs:text-3xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
          My Recent Works
        </span>
      </div>
      {/* Filter */}
      <div className=" flex items-center justify-center mb-4 xs:px-10">
        <div
          className="flex rounded-md shadow-sm  xs:gap-[5px] sm:gap-4 border-b-2 border-purple-700/40  px-1 py-2 "
          role="group"
        >
          <button
            type="button"
            className="border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-100 hover:text-white transition-all duration-300  px-4 py-2 text-sm font-medium    rounded-md      dark:focus:bg-purple-500 "
            onClick={() => setDataFilter(data)}
          >
            All
          </button>
          <button
            type="button"
            className="border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-100 hover:text-white transition-all duration-300  px-4 py-2 text-sm font-medium    rounded-md      dark:focus:bg-purple-500 "
            onClick={() => setDataFilter(frontend)}
          >
            Frontend
          </button>
          <button
            type="button"
            className="border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-100 hover:text-white transition-all duration-300  px-4 py-2 text-sm font-medium    rounded-md      dark:focus:bg-purple-500 "
            onClick={() => setDataFilter(backend)}
          >
            Backend
          </button>
          <button
            type="button"
            className="border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-100 hover:text-white transition-all duration-300  px-4 py-2 text-sm font-medium    rounded-md      dark:focus:bg-purple-500 "
            onClick={() => setDataFilter(fullStack)}
          >
            Fullsatck
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-10">
        {dataFilter.length > 0 ? (
          dataFilter.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                className=" shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border-white/0 border-2 hover:border-purple-900 transition duration-200 cursor-pointer py-2  w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 relative md:min-w-[300px] h-[300px] sm:min-w-[150px] xs:w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ duration: 1 }}
              >
                <div className=" w-full h-full  p-2 bg-purple-700/40 flex items-center justify-center rounded">
                  <Image
                    src={project.src}
                    className="object-cover "
                    width={1500}
                    height={1500}
                    alt="ProjectImg"
                  />
                </div>
                <div className="">
                  <motion.div
                    className="px-3 text-center absolute inset-0 bg-black/80 flex items-end justify-center"
                    initial="hidden"
                    variants={variants}
                    transition={{ duration: 0.4 }}
                    whileHover="visible"
                  >
                    <div className="text-center flex items-center flex-col w-full h-full justify-center">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="my-5 text-sm text-gray-300 line-clamp-3">
                        {project.desc}
                      </p>
                      <div className="flex items-center gap-4">
                        {project.href !== undefined ? (
                          <Link
                            href={project.href}
                            className="px-2 py-2.5 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none hover:bg-gradient-to-r hover:from-purple-800 transition duration-200 hover:to-gray-500 flex items-center gap-2 bg-gradient-to-r from-purple-700 to-gray-400"
                          >
                            <h1>Live Demo</h1>
                            <FontAwesomeIcon icon={faLink} />
                          </Link>
                        ) : (
                          ""
                        )}

                        <Link
                          href={project.repoHref}
                          className="px-2 py-2.5 rounded-lg border text-sm font-semibold tracking-wider border-purple-700   hover:bg-purple-700 text-purple-100 hover:text-white  duration-300  flex items-center gap-2   dark:focus:bg-purple-500 "
                        >
                          <h1>Repo</h1>
                          <FontAwesomeIcon icon={faLink} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <h1 className="text-white col-span-2 text-center my-6">
            Not Found Any Project{" "}
          </h1>
        )}
      </div>
      <div className="flex items-center justify-center mt-8 xs:px-10 md:px-12">
        <Link
          href="/projects"
          className="bg-gradient-to-r from-purple-700 to-gray-400 p-2 rounded-md   transition-all duration-300 hover:to-gray-400/50 hover:from-purple-700/40 "
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
