"use client";
import React, { useState } from "react";
import { data } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHub, LinkOffRounded } from "@mui/icons-material";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
}

const Project = ({ id }: Props) => {
  const [projects, setProjects] = useState(data);

  const Project = data.filter((project) => project.id === id);
  console.log(Project);

  return (
    <div className="text-white  container mx-auto my-16">
      {Project.map((project) => {
        return (
          <div key={project.id}>
            <div>
              <h1 className="my-12 text-center text-4xl">{project.title}</h1>
            </div>

            <div>
              <Image
                src={project.src}
                alt="Project Img"
                width={1500}
                height={1500}
                className="w-full md:h-96 sm:h-64 "
              />
            </div>

            <div>
              <h1 className="my-3 text-2xl ">description :</h1>
            </div>

            <div className="mx-4 md:text-lg xs:text-sm ">
              <p className="">{project.desc}</p>
            </div>

            <div>
              <h1 className="my-3 mt-9 text-2xl ">Technologies :</h1>
            </div>

            <div className="mx-4 flex items-center flex-wrap gap-2 mb-9">
              {project?.technologies?.map((tech) => (
                <div key={tech.id}>
                  <button className="p-2 text-base bg-gray-600 rounded-3xl hover:bg-gray-600/70 transition duration-300">
                    {tech.title}
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h1 className="my-3 text-2xl ">Site objectives :</h1>
            </div>
            <ol className="list-disc mx-8 ">
              {project?.objectiveProject?.map((objective) => (
                <li key={objective.id}>{objective.text}</li>
              ))}
            </ol>

            {/* LINKS */}
            <div className="flex items-center gap-9 my-3 mt-9">
              <h1 className=" text-2xl ">Links :</h1>
              <div className="flex items-center gap-2">
                <Link
                  href={project.repoHref}
                  target="_blank"
                  className="border border-purple-500  py-1 px-4 rounded-lg hover:bg-purple-500 group transition duration-300"
                >
                  <GitHub className="text-white group-hover:scale-75 transition duration-300" />
                </Link>
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="border border-blue-400  py-1 px-4 rounded-lg hover:bg-blue-400 group transition duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      className="text-white group-hover:scale-75 transition duration-300"
                    />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="mt-14  flex items-center justify-center border rounded-lg flex-col gap-5 md:py-4 xs:py-7 bg-gray-700/40">
              <h1 className="md:text-5xl xs:text-2xl">
                Call Me for Your project
              </h1>
              <Link
                href="https://wa.me/213675416320"
                target="_blank"
                className="px-5 py-2.5 rounded-lg text-white bg-gray-400/10  border hover:bg-gradient-to-tl hover:from-purple-700 to-purple-300"
              >
                Call Now
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
