"use client";
import { data } from "@/data/projects";
import {
  faArrowUpRightFromSquare,
  faEye,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Projects = () => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 }, // البداية من أسفل الحاوية
    visible: { opacity: 1, y: 0 }, // النهاية في موضعه الطبيعيي
  };
  const [dataFilter, setDataFilter] = useState(data);
  return (
    <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-10">
      {dataFilter.length > 0 ? (
        dataFilter.map((project, index) => {
          return (
            <div
              key={project.id}
              className=" shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border-white/0 border-2 hover:border-purple-900 transition duration-200 cursor-pointer py-2  w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 relative md:min-w-[300px] h-[300px] sm:min-w-[150px] xs:w-full"
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
                  initial="hidden"
                  variants={variants}
                  transition={{ duration: 0.4 }}
                  whileHover="visible"
                  className="px-3 text-center absolute inset-0 bg-black/80 flex items-end justify-center"
                >
                  <div className="text-center flex items-center flex-col w-full h-full justify-center">
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/project/${project.id}`}
                        className="text-4xl px-2 py-2.5 rounded-full   font-semibold tracking-wider border-purple-700   hover:bg-purple-700 text-purple-100 hover:text-white  duration-300  flex items-center gap-2   dark:focus:bg-purple-500 "
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="text-white col-span-2 text-center my-6">
          Not Found Any Project{" "}
        </h1>
      )}
    </div>
  );
};

export default Projects;
